import React from 'react'

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