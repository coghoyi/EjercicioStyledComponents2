import { StyledCard, StyledH2, StyledH3, StyledImg, StyledP, StyledRed, StyledRedP } from "./styles";

const Cards = ({active, color, src, alt, text1, text2, text3, text4, arrow, colorLetra})=>{
    return(
        <StyledCard className={color} active={active}>
            <StyledRed>
                <img src={src} alt={alt} />
                <StyledRedP active={active}>{text1}</StyledRedP>
            </StyledRed>
            <StyledH2 active={active}>{text2}</StyledH2>
            <StyledH3 active={active}>{text3}</StyledH3>
            <StyledP className={colorLetra}><StyledImg src={arrow}/> {text4}</StyledP>
        </StyledCard>
    )
}



export default Cards;