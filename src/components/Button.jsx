import React from 'react';
import './css/hover.css';

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-6 px-6 bg-blue-gradient font-poppins font-bold text-[18px] text-primary outline-none rounded-full ${styles}`} id='premium-btn'>
      Premium
    </button>
  )
}

export default Button