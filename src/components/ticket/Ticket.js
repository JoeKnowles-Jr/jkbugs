import React from 'react';
import styled from 'styled-components';

const Ticket = ({ tk }) => {

    return (
        <TicketWrapper>
            <input class="open-button" type="image" name="details" src="/jkbugs/img/door-enter-512.png" border="0" alt="text"></input>

        </TicketWrapper>
    );
};

const TicketWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    background-color: #999;
    border: 1px solid blue;
    border-radius: 13px;
    padding: 1rem;
    margin: 1rem;
`;

export default Ticket;