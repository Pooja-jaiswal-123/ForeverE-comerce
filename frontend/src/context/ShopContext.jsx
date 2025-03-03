import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryfee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product size");
      return;
    }

    setCartItems((prevCartItems) => {
      const cartData = { ...prevCartItems };

      if (!cartData[itemId]) {
        cartData[itemId] = {}; // Agar item nahi hai toh object create karo
      }

      // Properly update size-wise quantity
      cartData[itemId] = {
        ...cartData[itemId],
        [size]: (cartData[itemId][size] || 0) + 1,
      };

      return cartData;
    });
  };

  const getCartCount = () => {
    let TotalCount = 0;
    Object.values(cartItems).forEach((sizes) => {
      Object.values(sizes).forEach((quantity) => {
        TotalCount += quantity;
      });
    });
    return TotalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (!cartData[itemId]) {
      cartData[itemId] = {}; // Ensure itemId exists
    }

    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (!itemInfo) continue;

      for (const size in cartItems[items]) {
        try {
          if (cartItems[items][size] > 0) {
            totalAmount += itemInfo.price * cartItems[items][size];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    deliveryfee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
