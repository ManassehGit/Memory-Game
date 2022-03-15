import React from 'react';
import { toggleModalMenuVisibility } from '../store/modalsSlice';
import { useDispatch } from 'react-redux';


const OpenCloseMenuButton = (props) => {

  const dispatch = useDispatch();
  const openMenuModalHandler = () => {
    dispatch(toggleModalMenuVisibility());
  };

  return (
    <>
      <Button
        onClick={openMenuModalHandler}
        type={props.type}
        showOnlyOn={'mobile'}
      >
        {props.children}
      </Button>
    </>
  );
};

export default OpenCloseMenuButton;