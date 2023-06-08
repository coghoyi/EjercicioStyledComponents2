import styled from "styled-components";

const StyledLikes = styled.div`
    width: 255px;
    height: 125px;
    display: flex;
    flex-direction: column;
    background-color: ${props => (props.active ? 'rgba(37, 43, 66, 1)' : 'rgba(241, 243, 250, 1)')};
    border-radius: 6px;
`;
const StyledViews = styled.div`
    width: 80%;
    height: 40%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledH2 = styled.h2`
    font-size: 14px;
    font-weight: bold;
    color: ${props => (props.active ? 'rgba(140, 152, 198, 1)' : 'rgba(140, 152, 198, 1)')};
`;
const StyledH3 = styled.h3`
    font-size: 32px;
    font-weight: bold;
    color: ${props => (props.active ? 'white' : 'rgba(29, 31, 41, 1)')};
`;
const StyledP = styled.p`
    font-size: 12px;
    margin: 0;
    text-align: center;
    letter-spacing: 2px;
    color: rgba(30, 181, 137, 1);
    
`;
const StyledImg = styled.img`
    padding-bottom: 2px;
`;

export {StyledLikes, StyledViews, StyledH2, StyledH3, StyledP, StyledImg};