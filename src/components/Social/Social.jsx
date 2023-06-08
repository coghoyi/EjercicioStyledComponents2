
import { StyledButton, StyledButtonCircle, StyledContainer, StyledH1, StyledHeader, StyledMode, StyledP } from "./styles"


const Social = ({active, setActive})=>{

    return(
        <StyledContainer>
        <StyledHeader>
            <div>
                <StyledH1 active={active}>Social Media Dashboard</StyledH1>
                <StyledP active={active}>Total Followers: 23,004</StyledP>
            </div>
            <StyledMode>
                <StyledP>Dark Mode</StyledP>
                <StyledButton active={active}>
                    <StyledButtonCircle 
                    onClick={()=>darkMode(active,setActive)}
                    active={active}
                    ></StyledButtonCircle>
                </StyledButton>
            </StyledMode>
        </StyledHeader>
        </StyledContainer>
    )
}

const darkMode = (active, setActive) =>{
    setActive(!active)
}

export default Social;