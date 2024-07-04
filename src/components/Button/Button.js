import React from 'react';
import { Button } from '@mui/material';
import './Button.css';

const CustomButton = ({ text, icon, onClick }) => {
  return (
    <Button
      variant="contained"
      className="custom_btn"
      endIcon={icon ? <div className="btn_iconcontainer">{icon}</div> : null}
      onClick={onClick} // Handle button click
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
