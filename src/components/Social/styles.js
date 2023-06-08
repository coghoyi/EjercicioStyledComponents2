import styled from "styled-components";

const StyledContainer = styled.div`
    width: 1110px;
    height: 240px;
    margin: auto;
    @media (max-width:1250px) {
        width: 90%;
    }
`;
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    @media (max-width:550px) {
        flex-direction: column;
        gap: 20px;
    }
`;
const StyledMode = styled.div`
    display: flex;
    align-items: center;
    @media (max-width:550px) {
        border-top: 1px solid rgba(29, 31, 41, 1);
        padding-top: 15px;
    }
`;
const StyledButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 2rem;
    border: 0;
    padding: 1rem 2.2rem;
    background-color: ${props => props.active ? 'rgba(64, 219, 130, 1)' : 'rgba(174, 179, 203, 1)'};
`;
const StyledButtonCircle = styled.button`
    width: 26px;
    aspect-ratio: 1;
    background-color: ${props => (props.active ? 'rgba(37, 43, 66, 1)' : 'rgba(241, 243, 250, 1)')};
    border-radius: 100%;
    border: 0;
    transition: .5s ease;
    position: absolute;
    left: ${props =>(props.active ? '3px' : '39px')};
    cursor: pointer;
`;
const StyledH1 = styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: ${props =>(props.active ? 'white' : 'rgba(29, 31, 41, 1)')};
    margin-bottom: .2rem;
    @media (max-width:1250px) {
        font-size: 20px;
    }
`;
const StyledP = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: rgba(140, 152, 198, 1);
    margin: 0;
    padding-right: 1rem;
`;



export {StyledContainer, StyledH1, StyledP, StyledHeader, StyledButton, StyledMode,StyledButtonCircle};