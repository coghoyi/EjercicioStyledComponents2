import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
	font-family: sans-serif;
	background-color: ${props => (props.active ? 'rgba(29, 31, 41, 1)' : 'white')};
}
.container {
	width: 100%;
	height: 244px;
    margin: auto;
    background-color: ${props => (props.active ? 'rgba(29, 31, 41, 1)' : 'rgba(247, 249, 255, 1)')};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
}
.container2 {
    width: 1110px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    position: relative;
    top: -108px;
    @media (max-width:1250px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
}
@media (max-width:1250px) {
    .container2 {
        width: 50%;
    }
}
.blue {
    color: rgba(29, 161, 242, 1);
}
.orange {
    color: rgba(223, 72, 150, 1);
}
.red {
    color: red;
}
.container3 {
    width: 1110px;
    margin: auto;
    position: relative;
    top: -70px;
    @media (max-width:1250px) {
        width: 90%;
    }
}
.over {
    color: ${props =>(props.active ? 'white' : 'rgba(99, 104, 125, 1)')};
    @media (max-width:1250px) {
        font-size: 18px;
    }
}
.container4 {
    width: 1110px;
    margin: auto;
    position: relative;
    top: -50px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 30px;
    @media (max-width:1250px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
`;


export {GlobalStyles};