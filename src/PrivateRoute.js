import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    const show =true;
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
        show ?
                <Component {...props} />
            : <Redirect to="/Login" />
        )} />
    );
};

export default PrivateRoute;