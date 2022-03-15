import React from 'react';
import { toggleModalMenuVisibility } from '../store/modalsSlice';
import { useDispatch } from 'react-redux';


const OpenCloseMenuButton = () => {
  return (
    <>
      <Button>
        {props.children}
      </Button>
    </>
  );
};

export default OpenCloseMenuButton;