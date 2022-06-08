import React from 'react';
import { Navigate } from 'react-router-dom';

const Redirect = () => {

    const shouldReplace = true;

    return (
        <div>
            {shouldReplace && <Navigate replace to='/' />}
        </div>
    );
};

export default Redirect;