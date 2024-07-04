import React from 'react';
import { Button } from '@mui/material';
import "./Hireme.css";

const CustomButton = ({ text, icon }) => {
  const handleClick = () => {
    window.location.href = 'mailto:prathameshpawarpap@gmail.com';
  };

  return (
    <Button className="custom_btnn" onClick={handleClick} 
      endIcon={icon ? (<div className="btn_iconcontainern">{icon}</div>) : null}>
      <span className='btn_textn'>{text}</span>
    </Button>
  );
};

export default CustomButton;
