import { StyledLikes, StyledViews, StyledH2, StyledH3, StyledP, StyledImg } from "./styles";

const Likes = ({active})=>{
    return(
        <StyledLikes active={active}>
            <StyledViews>
                <StyledH2>Page Views</StyledH2>
                <img src='/public/images/icon-facebook.svg' alt="" />
            </StyledViews>
            <StyledViews>
                <StyledH3 active={active}>87</StyledH3>
                <StyledP> <StyledImg src='/public/images/icon-up.svg' alt="" /> 3%</StyledP>
            </StyledViews>
        </StyledLikes>
    )
    
}
export default Likes;