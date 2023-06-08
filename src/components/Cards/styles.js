import styled from "styled-components";

const StyledCard = styled.div`
    width: 255px;
    height: 211px;
    border-radius: 6px;
    border-top: 5px solid;
    background-color: ${props => (props.active ? 'rgba(37, 43, 66, 1)' : 'rgba(241, 243, 250, 1)')};
`;
const StyledRed = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`;
const StyledRedP = styled.p`
    color: ${props => (props.active ? 'rgba(140, 152, 198, 1)' : 'rgba(140, 152, 198, 1)')};
`;
const StyledH2 = styled.h2`
    color: ${props => (props.active ? 'white' : 'rgba(29, 31, 41, 1)')};
    font-size: 56px;
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding-top: 15px;
`;
const StyledH3 = styled.h3`
    margin: 0;
    text-align: center;
    letter-spacing: 6px;
    font-size: 12px;
    color: ${props => (props.active ? 'rgba(140, 152, 198, 1)' : 'rgba(99, 104, 125, 1)')};
`;
const StyledP = styled.p`
    font-size: 12px;
    margin: 0;
    text-align: center;
    padding-top: 20px;
    letter-spacing: 2px;
    color: rgba(30, 181, 137, 1);
    
`;
const StyledImg = styled.img`
    padding-bottom: 2px;
`;

export {StyledCard, StyledRed, StyledRedP, StyledH2, StyledH3, StyledP, StyledImg};