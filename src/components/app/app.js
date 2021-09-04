import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from "react-redux";
import NavHeader from '../nav/navHeader';
import styled from "styled-components";

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <MainApp>
        <NavHeader user={user} />
        <MainContent>
          {this.props.children}
        </MainContent>
        <Footer>
          <span>jbk &copy; 2021</span>
        </Footer>
      </MainApp>
    );
  }
}

const MainContent = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const MainApp = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100vh;
    background: rgb(20,11,38);
    background: #999;
`;

const Footer = styled.div`
  width: 100%;
  height: 2rem;
  text-align: center;
  flex-shrink: 0;
  span {
    transform: translateX(-50%);
    padding: 0.5rem 0.75rem;
    background-color: rgba(0, 0, 200, 0.3);
    border-radius: 50px;
    color: white;
  }
`;

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
  errorMessage: PropTypes.string
};

function mapStateToProps(state) {
  const { user } = state;

  return {
    user,
    // errorMessage
  }
}

export default connect(mapStateToProps)(App);
