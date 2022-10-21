import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-6 px-6 bg-blue-gradient font-poppins font-bold text-[18px] text-primary outline-none rounded-full ${styles}`}>
      Premium
    </button>
  )
}

export default Button