import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';
import ProjectSummary from '../components/project';
// import TicketSummary from '../components/ticket';
import UserSummary from '../components/user';
import OverviewSummary from '../components/OverviewSummary';

class Home extends PureComponent {

    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {

        return (
            <HomeWrapper>
                <GridWrapper>
                    {/* <ProjectSummary projects={projects} /> */}

                    {/* <TicketSummary /> */}

                    {/* <UserSummary users={users} /> */}

                    {/* <OverviewSummary projects={projects} users={users} /> */}
                </GridWrapper>
            </HomeWrapper>
        );
    }
}

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 47vw 47vw;
    row-gap: 2rem;
    justify-content: space-around;
    align-items: space-around;
`;

const HomeWrapper = styled.div`
    width: 100%;
    position: relative;
`;

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, actions)(Home);
