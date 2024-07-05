import React, { useState } from 'react';

import { ButtonGroup, Button, styled } from '@mui/material';
import { useData } from '../../contexts';

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const GroupButton = ({ item }) => {
  const { addItemToCart } = useData();

  const [counter, setCounter] = useState(item.quantity);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);

    const updateItem = { ...item, quantity: counter + 1 };

    addItemToCart(updateItem);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
    const updateItem = { ...item, quantity: counter - 1 };

    addItemToCart(updateItem);
  };

  return (
    <Component>
      <StyledButton onClick={handleDecrement} disabled={counter == 0}>
        -
      </StyledButton>
      <Button disabled>{counter}</Button>
      <StyledButton onClick={handleIncrement}>+</StyledButton>
    </Component>
  );
};

export default GroupButton;
