import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import App from '../components/app/app';
// import RequireAuth from '../components/auth/require_auth';
import Auth from '../pages/Auth';
import Signin from '../components/auth/signin';
import Signup from '../components/auth/signup';
import Signout from '../components/auth/signout';
import Home from '../pages/Home';

const Routes = () => {
    return (
        <App>
            <RouteWrapper>
                <Route exact path="/" component={Home} />
                <Route exact path="/auth" component={Auth} />
                <Route exact path="/signout" component={() => new Signout()} />
            </RouteWrapper>
        </App>
    );
};

const RouteWrapper = styled.div`

`;

export default Routes;
