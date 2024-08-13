import React from 'react';

interface IButton {
    className?: string;
    children: string;
    type?: "button" | "submit" | "reset";
    [key: string]: any; 
}

const Button = ({ className, children, type = "button", ...rest }: IButton) => {
    return (
        <button
            type={type} 
            {...rest}
            className={`${className} btn bg-primary hover:bg-secondary text-white`}
        >
            {children}
        </button>
    );
}

export default Button;
