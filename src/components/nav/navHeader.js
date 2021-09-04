import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class NavHeader extends PureComponent {

    render() {
        // const user = this.props.user;
        const { user, isAuthenticated } = this.props;
        return (
            <NavHeaderWrapper>
                <div className="title">
                    {user && (<span id="current-user">
                        <span className="liu">{user.firstName} <span className="role">({user.role})</span></span>
                    </span>)}
                    {!user && (<span id="current-user">
                        <span className="guest">Guest User</span>
                    </span>)}
                    <div className="banner">
                        <span>jkbugs</span>
                    </div>
                </div>
                <nav className="hdr-btn-wrapper">
                    <div className="hdr-btns">
                        {isAuthenticated && (<div>
                            <Link className="hdr-btn" to="/signout">Signout</Link>
                        </div>)}
                        {!isAuthenticated && (<div>
                            {/* <Link className="nav-link hdr-btn" to="/signin">Sign In</Link>
                            <Link className="nav-link hdr-btn" to="/signup">Sign Up</Link> */}
                            <Link className="nav-link hdr-btn" to="/auth">Sign In / Sign Up</Link>
                        </div>)}
                    </div>
                </nav>
            </NavHeaderWrapper>
        );
    }
}

const NavHeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #445;
    @media (max-width: 550px) {
        flex-direction: column;
        justify-content: center;
    }
    .title {
        position: relative;
        display: flex;
        align-items: center;
        max-height: 5rem;
        justify-content: space-around;
        width: 45%;
        margin-left: 1rem;
        text-align: center;
        color: #fff;
        text-shadow: 3px 3px 5px #333;
        font-size: 2.25rem;
        border-radius: 50px 0 50px 0;
        background: linear-gradient(to right, #0724ef, #14e71a);
        @media (max-width: 550px) {
            font-size: .5rem;
        }
        @media (max-width: 768px) {
            font-size: .9rem;
        }
        @media (max-width: 1240px) {
            font-size: 1.25rem;
        }
        img {
            margin-left: 1rem;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            @media (max-width: 768px) {
                width: 32px;
                height: 32px;
            }
        }
        .liu {
            font-size: 1rem;
        }
        .role {
            font-size: 0.77rem;
        }
        .guest {

        }
    }

    #current-user {
        position: absolute;
        bottom: 7px;
        left: 13px;
        display: inline-block;
        font-family: digital2, sans-serif;
        border: 3px solid #3a1cff;
        border-radius: 30px;
        color: #7f7;
        background-color: #555;
        text-shadow: none;
        padding: 7px 7px 2px;
        font-size: 0.75rem;
        -webkit-box-shadow: inset 3px 3px 3px 0 rgba(0, 0, 0, 1);
        -moz-box-shadow: inset 3px 3px 3px 0 rgba(0, 0, 0, 1);
        box-shadow: inset 3px 3px 3px 0 rgba(0, 0, 0, 1);
    }

    .banner {
        overflow: hidden;
        width: 80%;
        margin: 5px auto;
        border-radius: 100px;
        font-family: 'Fredoka One', cursive;
        border-radius: 0 50px 0 50px;
        background: linear-gradient(to right, #14e71a, #0724ef);
    }

    .hdr-btn-wrapper {
        margin-right: 1rem;
        .hdr-btns {
            display: flex;
        }
    }

    .hdr-btn {
        color: #14e71a;
        text-align: center;
        display: inline-block;
        text-shadow: none;
        text-decoration: none;
        font-size: 1.5rem;;
        padding: 0.75rem;
        margin: 5px 3px 0;
        border-right: 2px solid #0724ef;
        border-bottom: 2px solid #0724ef;
        border-radius: 0 10px 0 10px;
        @media (max-width: 500px) {
            font-size: .5rem;
        }
        @media (min-width: 768px) {
            font-size: 1rem;
        }
        @media (max-width: 1240px) {
            font-size: 1.25rem;
        }
    }
`;

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
        ,user: state.auth.user
    }
};

export default connect(mapStateToProps)(NavHeader);
