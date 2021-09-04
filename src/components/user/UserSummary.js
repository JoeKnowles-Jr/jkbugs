import React from 'react';
import styled from 'styled-components';
import enterButton from '../../img/enter_arrow_64.png';
import history from '../../history';

const UserSummary = ({users}) => {
    const numUsers = users ? users.length : 0;
    const addUser = (e) => {
        history.push("/jkbugs/addUser");
    };

    return (
        <UserSummaryWrapper>
            <Header>{numUsers} Users</Header>
            <EnterButton>
                <form method="get" action="/jkbugs/users">
                    <input type="image" width="32px" src={enterButton} alt="enter" />
                </form>
            </EnterButton>
            {numUsers > 0 ?
                (
                    <div>

                    </div>
                )
                :
                (
                    <EmptyWrapper>
                        <p>There are no active users.</p>
                        <button onClick={addUser}>Add User</button>
                    </EmptyWrapper>
                )
            }
        </UserSummaryWrapper>
    );
}

const EmptyWrapper = styled.div`
    text-align: center;
`;

const EnterButton = styled.div`
    width: 32px;
    height: 32px;
    position: absolute;
    top: 7px;
    right: 7px;
`;

const Header = styled.h1`
    text-align: center;
`;

const UserSummaryWrapper = styled.div`
    background-color: #aaa;
    border-radius: 1rem;
    position: relative;
    height: 35vh;
`;

export default UserSummary;