const products = [
  {
    id: 1,
    name: "hero Product",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    hero: "OMG This just came out today!",
    image:
      "https://images.unsplash.com/photo-1591052680592-b82b85ce83e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHhpYW9taXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Product 1",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    info: "This is the latest and greatest product from Derp corp.",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Product 2",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    offer: "BOGOF",
    image:
      "https://static1.squarespace.com/static/5a51022ff43b55247f47ccfc/5a567854f9619a96fd6233bb/5b74446c40ec9afbc633e555/1534346950637/Husqvarna+545FR+%282%29.png?format=1500w",
  },
  {
    id: 4,
    name: "Product 3",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Product 4",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    offer: "No srsly GTFO",
    image:
      "https://images.unsplash.com/photo-1549546851-c3550b32e3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwNnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Product 5",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    name: "Product 6",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    info: "This is the latest and greatest product from Derp corp.",
    offer: "info with offer",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id == id);
}
