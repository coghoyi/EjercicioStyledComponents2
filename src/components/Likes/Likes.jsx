import { StyledLikes, StyledViews, StyledH2, StyledH3, StyledP, StyledImg } from "./styles";

const Likes = ({active, src, src2, alt, t1, t2, t3, color})=>{
    return(
        <StyledLikes active={active}>
            <StyledViews>
                <StyledH2>{t1}</StyledH2>
                <img src={src} alt={alt} />
            </StyledViews>
            <StyledViews>
                <StyledH3 active={active}>{t2}</StyledH3>
                <StyledP className={color}> <StyledImg src={src2} alt={alt} /> {t3}</StyledP>
            </StyledViews>
        </StyledLikes>
    )
    
}
export default Likes;