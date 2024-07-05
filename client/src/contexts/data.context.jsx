import { createContext, useContext, useState } from 'react';

export const datacontext = createContext(null);

export const DataProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [cartList, setCartList] = useState([]);

  const addItemToCart = (item) => {
    const existingCartItemIndex = cartList.findIndex(
      (items) => items._id === item._id
    );

    const existingCartItem = cartList[existingCartItemIndex];

    let updateItems;

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        quantity: item.quantity,
      };

      updateItems = [...cartList];

      updateItems[existingCartItemIndex] = updateItem;

      setCartList(updateItems);
    } else {
      setCartList((prev) => [...prev, item]);
    }
  };

  const removeItemFromCart = (id) => {
    const existingCartItemIndex = cartList.findIndex((item) => item._id === id);

    console.log(existingCartItemIndex);
    const updateItems = [...cartList];

    updateItems.splice(existingCartItemIndex, 1);
    setCartList(updateItems);
  };

  return (
    <datacontext.Provider
      value={{
        account,
        setAccount,
        cartList,
        setCartList,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </datacontext.Provider>
  );
};

export const useData = () => {
  return useContext(datacontext);
};
