import { getStoredCart } from "../utilities/localStorage";

export const ProductsAndCart = async () => {
  const productData = await fetch("products.json");
  const products = await productData.json();

  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      addedProduct.quantity = savedCart[id];
      initialCart.push(addedProduct);
    }
  }
  return { products: products, initialCart: initialCart };
};
