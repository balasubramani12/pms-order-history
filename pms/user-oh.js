let currentPage = 1;
const recordsPerPage = 10;


let filteredData = orders.filter(
  order => order.mobno === currentUser.mobno
);

// Set title
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h2");
  title.innerText = `📦 ${currentUser.name}'s Order History`;
  displayTable();
});

// Status class mapping
function getStatusClass(status) {
  status = status.toLowerCase();

  if (status.includes("booked")) return "booked";
  if (status.includes("in-process")) return "inprocess";
  if (status.includes("shipped")) return "shipped";
  if (status.includes("hub")) return "hub";
  if (status.includes("out")) return "out";
  if (status.includes("delivered")) return "delivered";
  if (status.includes("cancelled")) return "cancelled";

  return "";
}

// Popup
function showPopup(message) {
  document.getElementById("popupMessage").innerText = message;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Display Table
function displayTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * recordsPerPage;
  const end = start + recordsPerPage;
  const pageData = filteredData.slice(start, end);

  pageData.forEach(order => {

    const statusClass = getStatusClass(order.status);
    const statusBadge = `<span class="status ${statusClass}">${order.status}</span>`;

    let actions = "";

    // ✅ Show Change Location ONLY if NOT delivered/cancelled
    if (
    !order.status.toLowerCase().includes("delivered") &&
    !order.status.toLowerCase().includes("cancelled")
    ) {
    actions += `<button class="action-btn change-btn" onclick="showPopup('Request Sent For Drop Location Update')">Change Location</button>`;
    }

    // ❌ Cancel allowed only before shipped
    if (
    !order.status.toLowerCase().includes("shipped") &&
    !order.status.toLowerCase().includes("delivered") &&
    !order.status.toLowerCase().includes("cancelled")
    ) {
    actions += `<button class="action-btn cancel-btn" onclick="showPopup('Cancel request sent')">Cancel</button>`;
    }

    const row = `
      <tr>
        <td>${order.order_id}</td>
        <td>${order.name}</td>
        <td>${order.mobno}</td>
        <td>${order.pickup}</td>
        <td>${order.drop}</td>
        <td>${order.weight}</td>
        <td>${order.delivery_type}</td>
        <td>${statusBadge}</td>
        <td>${actions}</td>
      </tr>
    `;

    tableBody.innerHTML += row;
  });

  document.getElementById("pageInfo").innerText =
    `Page ${currentPage} of ${Math.ceil(filteredData.length / recordsPerPage)}`;
}

// Pagination
function nextPage() {
  if (currentPage < Math.ceil(filteredData.length / recordsPerPage)) {
    currentPage++;
    displayTable();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayTable();
  }
}

// Search
document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();

  filteredData = orders.filter(order =>
    order.order_id.toString().includes(value) ||
    order.status.toLowerCase().includes(value) ||
    order.pickup.toLowerCase().includes(value) ||
    order.drop.toLowerCase().includes(value)
  );

  currentPage = 1;
  displayTable();
});
