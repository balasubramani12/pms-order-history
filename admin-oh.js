let currentPage = 1;
const recordsPerPage = 10;
let filteredData = [...orders]; // orders loaded from order_data.js

// Status color mapping
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

// Popup notification
function showPopup(msg) {
  document.getElementById("popupMessage").innerText = msg;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// 🔢 Pagination Functions (MISSING - NOW ADDED)
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayTable();
  }
}

function nextPage() {
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayTable();
  }
}

// Display Table with Pagination
function displayTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const start = (currentPage - 1) * recordsPerPage;
  const end = start + recordsPerPage;
  const pageData = filteredData.slice(start, end);

  if (pageData.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="9" style="text-align:center;">No records found</td></tr>`;
    document.getElementById("pageInfo").innerText = `Page 0 of 0`;
    updatePaginationButtons(1, 1);
    return;
  }

  pageData.forEach(order => {
    const statusClass = getStatusClass(order.status);
    const statusBadge = `<span class="status ${statusClass}">${order.status}</span>`;

    const actions = `
      <select onchange="updateStatus(${order.order_id}, this.value)">
        <option value="">Update Stage</option>
        <option>Booked</option>
        <option>In-Process</option>
        <option>Shipped</option>
        <option>Reached to Nearest Hub</option>
        <option>Out for Delivery</option>
        <option>Delivered</option>
        <option>Cancelled</option>
      </select>
      <button class="action-btn change-btn" onclick="updateDrop(${order.order_id})">Update Drop</button>
      <button class="action-btn cancel-btn" onclick="cancelOrder(${order.order_id})">Cancel</button>
    `;

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

  // Update page info & button states
  document.getElementById("pageInfo").innerText = `Page ${currentPage} of ${totalPages}`;
  updatePaginationButtons(currentPage, totalPages);
}

// Enable/Disable Prev/Next buttons
function updatePaginationButtons(current, total) {
  const buttons = document.querySelectorAll('.pagination button');
  if (buttons[0]) buttons[0].disabled = (current <= 1);      // Prev button
  if (buttons[1]) buttons[1].disabled = (current >= total);  // Next button
}

// 🔄 Update Status
function updateStatus(id, newStatus) {
  if (!newStatus) return;
  const order = orders.find(o => o.order_id === id);
  if (order) {
    order.status = newStatus;
    // Also update in filteredData if it's currently filtered
    const filteredOrder = filteredData.find(o => o.order_id === id);
    if (filteredOrder) filteredOrder.status = newStatus;
    
    showPopup("Status updated successfully");
    displayTable();
  }
}

// 📍 Update Drop Location
function updateDrop(id) {
  const newDrop = prompt("Enter new drop location:");
  if (newDrop && newDrop.trim()) {
    const order = orders.find(o => o.order_id === id);
    if (order) {
      order.drop = newDrop.trim();
      const filteredOrder = filteredData.find(o => o.order_id === id);
      if (filteredOrder) filteredOrder.drop = newDrop.trim();
      
      showPopup("Drop location updated");
      displayTable();
    }
  }
}

// ❌ Cancel Order
function cancelOrder(id) {
  if (!confirm("Are you sure you want to cancel this order?")) return;
  
  const order = orders.find(o => o.order_id === id);
  if (order) {
    order.status = "Cancelled";
    const filteredOrder = filteredData.find(o => o.order_id === id);
    if (filteredOrder) filteredOrder.status = "Cancelled";
    
    showPopup("Order cancelled");
    displayTable();
  }
}

// 🔍 Search with Real-time Filtering
document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase().trim();

  if (value === "") {
    filteredData = [...orders]; // Reset to full list
  } else {
    filteredData = orders.filter(order =>
      order.order_id.toString().includes(value) ||
      order.name.toLowerCase().includes(value) ||
      order.status.toLowerCase().includes(value) ||
      order.pickup.toLowerCase().includes(value) ||
      order.drop.toLowerCase().includes(value)
    );
  }

  currentPage = 1; // Reset to first page on new search
  displayTable();
});

// Initialize on load
document.addEventListener("DOMContentLoaded", function() {
  displayTable();
});