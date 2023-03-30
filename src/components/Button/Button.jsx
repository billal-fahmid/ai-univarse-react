import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center mt-4 mb-7'>
            <button className="btn btn-accent">{children}</button>
        </div>
    );
};

export default Button;