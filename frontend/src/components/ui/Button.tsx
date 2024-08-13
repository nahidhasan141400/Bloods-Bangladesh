import React from 'react'
interface IButton {
    className?: string;
    children: string;
}
const Button = ({className,children}:IButton) => {
  return (
    <button className={`${className} btn bg-primary hover:bg-secondary text-white`}>{children}</button>
  )
}

export default Button
