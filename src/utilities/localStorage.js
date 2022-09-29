// Use Local Storage to manage cart data
const addToLocalStorage = (id) => {
  let shoppingCart = {};

  // get the shopping cart

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
  let shoppingCart = {};
  // get the shopping cart
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
    return shoppingCart;
  }
};

const removeFromLocalStorage = (id) => {
  // console.log("remove", id);
  const storedCart = localStorage.getItem("shopping-cart");
  const shoppingCart = JSON.parse(storedCart);
  if (storedCart) {
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};
const deleteFromLocalStorage = () => {
  localStorage.removeItem("shopping-cart");
};

export {
  addToLocalStorage,
  getStoredCart,
  removeFromLocalStorage,
  deleteFromLocalStorage,
};
