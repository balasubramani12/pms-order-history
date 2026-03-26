const currentUser = {
  name: "Ravi Kumar",
  mobno: "9876543210"
};

const orders = [
  // =========================
  // 👤 CURRENT USER ORDERS
  // =========================
  {
    order_id: 1001,
    name: "Ravi Kumar",
    mobno: "9876543210",
    pickup: "Hyderabad",
    drop: "Bangalore",
    weight: "2kg",
    dimensions: "10x10x10",
    delivery_type: "Standard",
    status: "Booked"
  },
  {
    order_id: 1002,
    name: "Ravi Kumar",
    mobno: "9876543210",
    pickup: "Chennai",
    drop: "Delhi",
    weight: "5kg",
    dimensions: "20x15x10",
    delivery_type: "Regular",
    status: "Shipped"
  },
  {
    order_id: 1003,
    name: "Ravi Kumar",
    mobno: "9876543210",
    pickup: "Mumbai",
    drop: "Pune",
    weight: "1kg",
    dimensions: "8x8x8",
    delivery_type: "Standard",
    status: "Delivered"
  },

  // =========================
  // 📦 OTHER USERS ORDERS
  // =========================
  {
    order_id: 1004,
    name: "Anita",
    mobno: "9000000001",
    pickup: "Delhi",
    drop: "Jaipur",
    weight: "3kg",
    dimensions: "12x10x10",
    delivery_type: "Regular",
    status: "In-Process"
  },
  {
    order_id: 1005,
    name: "Kiran",
    mobno: "9000000002",
    pickup: "Pune",
    drop: "Mumbai",
    weight: "2kg",
    dimensions: "10x8x8",
    delivery_type: "Standard",
    status: "Booked"
  },
  {
    order_id: 1006,
    name: "Rahul",
    mobno: "9000000003",
    pickup: "Chennai",
    drop: "Madurai",
    weight: "4kg",
    dimensions: "14x12x10",
    delivery_type: "Regular",
    status: "Shipped"
  },
  {
    order_id: 1007,
    name: "Divya",
    mobno: "9000000004",
    pickup: "Kolkata",
    drop: "Patna",
    weight: "3kg",
    dimensions: "12x11x9",
    delivery_type: "Standard",
    status: "Out for Delivery"
  },
  {
    order_id: 1008,
    name: "Arjun",
    mobno: "9000000005",
    pickup: "Hyderabad",
    drop: "Vizag",
    weight: "5kg",
    dimensions: "16x14x12",
    delivery_type: "Regular",
    status: "Delivered"
  },
  {
    order_id: 1009,
    name: "Meena",
    mobno: "9000000006",
    pickup: "Bhopal",
    drop: "Indore",
    weight: "2kg",
    dimensions: "10x9x8",
    delivery_type: "Standard",
    status: "Cancelled"
  },
  {
    order_id: 1010,
    name: "Vikram",
    mobno: "9000000007",
    pickup: "Surat",
    drop: "Ahmedabad",
    weight: "3kg",
    dimensions: "11x10x9",
    delivery_type: "Regular",
    status: "Reached to Nearest Hub"
  },
  {
    order_id: 1011,
    name: "Sneha",
    mobno: "9000000008",
    pickup: "Noida",
    drop: "Delhi",
    weight: "1kg",
    dimensions: "8x7x6",
    delivery_type: "Standard",
    status: "Booked"
  },
  {
    order_id: 1012,
    name: "Amit",
    mobno: "9000000009",
    pickup: "Nagpur",
    drop: "Pune",
    weight: "6kg",
    dimensions: "18x15x14",
    delivery_type: "Regular",
    status: "Shipped"
  },
  {
    order_id: 1013,
    name: "Pooja",
    mobno: "9000000010",
    pickup: "Patna",
    drop: "Ranchi",
    weight: "2kg",
    dimensions: "10x9x9",
    delivery_type: "Standard",
    status: "In-Process"
  },
  {
    order_id: 1014,
    name: "Rohit",
    mobno: "9000000011",
    pickup: "Lucknow",
    drop: "Kanpur",
    weight: "3kg",
    dimensions: "12x10x10",
    delivery_type: "Regular",
    status: "Out for Delivery"
  },
  {
    order_id: 1015,
    name: "Neha",
    mobno: "9000000012",
    pickup: "Kerala",
    drop: "Kochi",
    weight: "4kg",
    dimensions: "14x13x12",
    delivery_type: "Standard",
    status: "Delivered"
  },
  {
    order_id: 1016,
    name: "Suresh",
    mobno: "9000000013",
    pickup: "Goa",
    drop: "Mumbai",
    weight: "2kg",
    dimensions: "10x10x8",
    delivery_type: "Regular",
    status: "Booked"
  },
  {
    order_id: 1017,
    name: "Lakshmi",
    mobno: "9000000014",
    pickup: "Chennai",
    drop: "Bangalore",
    weight: "5kg",
    dimensions: "15x14x13",
    delivery_type: "Standard",
    status: "Shipped"
  },
  {
    order_id: 1018,
    name: "Manoj",
    mobno: "9000000015",
    pickup: "Delhi",
    drop: "Chandigarh",
    weight: "3kg",
    dimensions: "12x10x9",
    delivery_type: "Regular",
    status: "Cancelled"
  }
];