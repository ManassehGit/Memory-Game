import React from 'react';
import { toggleModalMenuVisibility } from '../store/modalsSlice';
import { useDispatch } from 'react-redux';


const OpenCloseMenuButton = () => {

  const dispatch = useDispatch();
  const openMenuModalHandler = () => {
    dispatch(toggleModalMenuVisibility());
  };
  
  return (
    <>
      <Button>
        {props.children}
      </Button>
    </>
  );
};

export default OpenCloseMenuButton;