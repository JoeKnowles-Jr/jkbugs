import React from 'react';
import styled from 'styled-components';
import enterButton from '../../img/enter_arrow_64.png';

const ProjectSummary = ({ projects }) => {
    const numProjects = projects ? projects.length : 0;

    return (
        <ProjectSummaryWrapper>
            <Header>{numProjects} Projects</Header>
            <EnterButton>
                <form method="get" action="/jkbugs/projects">
                    <input type="image" width="32px" src={enterButton} alt="enter" />
                </form>
            </EnterButton>
            {numProjects > 0 ?
                (
                    <div>
                        
                    </div>
                )
                    :
                (
                    <EmptyWrapper>
                        <p>There are no projects being tracked.</p>
                        <p>Add one to get started.</p>
                        <button>Add Project</button>
                    </EmptyWrapper>
                )
            }
        </ProjectSummaryWrapper>
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

const ProjectSummaryWrapper = styled.div`
    background-color: #aaa;
    border-radius: 1rem;
    position: relative;
    height: 35vh;
`;

export default ProjectSummary;