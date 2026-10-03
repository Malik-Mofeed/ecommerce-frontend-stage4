export const orders = [
  {
    id: 1001,
    userId: 1,
    status: "Delivered",
    total: 149.98,
    date: "2026-09-20",
    items: [
      {
        productId: 1,
        quantity: 1,
        price: 59.99,
      },
      {
        productId: 2,
        quantity: 1,
        price: 89.99,
      },
    ],
  },
  {
    id: 1002,
    userId: 1,
    status: "Processing",
    total: 99.98,
    date: "2026-09-22",
    items: [
      {
        productId: 3,
        quantity: 1,
        price: 39.99,
      },
      {
        productId: 4,
        quantity: 1,
        price: 74.99,
      },
    ],
  },
  {
    id: 1003,
    userId: 2,
    status: "Shipped",
    total: 64.99,
    date: "2026-09-24",
    items: [
      {
        productId: 6,
        quantity: 1,
        price: 64.99,
      },
    ],
  },
  {
    id: 1004,
    userId: 1,
    status: "Pending",
    total: 59.98,
    date: "2026-09-26",
    items: [
      {
        productId: 7,
        quantity: 1,
        price: 19.99,
      },
      {
        productId: 8,
        quantity: 1,
        price: 54.99,
      },
    ],
  },
  {
    id: 1005,
    userId: 2,
    status: "Cancelled",
    total: 27.99,
    date: "2026-09-28",
    items: [
      {
        productId: 15,
        quantity: 1,
        price: 27.99,
      },
    ],
  },
];