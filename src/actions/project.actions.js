import axios from 'axios';
import History from '../history.js';
import { projectUrl } from './action.urls';
import {
    CREATE_PROJECT,
    GET_PROJECTS,
    UPDATE_PROJECT,
    DELETE_PROJECT
} from './types';

export const getProjects = () => {
    return (dispatch) => {
        // submit email/password to the server
        axios.get(`${projectUrl}/all`)
            .then(response => {

                // if request is good...
                // - update state to indicate user is authenticated
                dispatch({ type: AUTH_USER, payload: { user: response.data.user } });

                // - save the jwt token
                localStorage.setItem('token', response.data.token);

                // - redirect to the homepage
                History.push('/');

            }).catch(() => {
                // if request is bad...
                // - show an error to the user
                dispatch(authError('Bad Login Info'));
            });
    };
};

export const signupUser = (params) => {
    return (dispatch) => {
        console.log("signup params");
        console.log(params);
        // submit user data to the server
        axios.post(`${userUrl}/signup`, params)
            .then(response => {
                console.log("response");
                console.log(response);
                dispatch({ type: AUTH_USER, payload: { user: response.data.user } });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                History.push('/');
            })
            .catch(err => {
                dispatch(authError(err.response.data.error));
            });
    };
};