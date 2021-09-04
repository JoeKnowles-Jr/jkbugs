import React from 'react';
import styled from 'styled-components';
import enterButton from '../img/enter_arrow_64.png';

const TicketSummary = ({ tickets }) => {
    const numTickets = tickets ? tickets.length : 0;

    return (
        <TicketSummaryWrapper>
            
            <Header>{numTickets} Tickets</Header>
            <EnterButton>
                <form method="get" action="/jkbugs/tickets">
                    <input type="image" width="32px" src={enterButton} alt="enter" />
                </form>
            </EnterButton>
            {numTickets > 0 ?
                (
                    <div>

                    </div>
                )
                :
                (
                    <EmptyWrapper>
                        <p>There are no tickets to show.</p>
                        <button>Add Ticket</button>
                    </EmptyWrapper>
                )
            }
        </TicketSummaryWrapper>
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

const TicketSummaryWrapper = styled.div`
    background-color: #aaa;
    border-radius: 1rem;
    position: relative;
    height: 35vh;
`;

export default TicketSummary;