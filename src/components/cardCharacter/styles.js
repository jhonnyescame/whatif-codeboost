import { styled } from "../../styles";
import { Container } from "../../styles/global";


export const CardCharacterStyle = styled("section", {
 width: "100%",
 maxWidth:"28rem",
 "@mobile":{
    maxWidth:"20rem",
  },
 "&:hover":{
  ".image": {
    img: {
      transform: "scale(1.05)",
    }
  },
  ".inf":{
    h3 :{
      color: "$red800",
    }
  }
 },
 a:{
  display:"block",
  textDecoration: "none",
 },
 ".image": {
    width: "100%",
    height:"37.2rem",
    marginBottom: 16,
    borderRadius: 5,
    overflow:"hidden",
    img: {
      width: "100%",
      height:"100%",
      objectFit:"cover",
      transition:"transform .3s ease",
    }
 },
 ".inf":{
    display:"flex",
    justifyContent:"space-between",
    div:{
      span: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "21px",
        color: "#8C8A97",
      }
    },
    h3 :{
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "27px",
      color: "#FFFFFF",
      transition:"color .3s ease",
    },
    span: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "21px",
      color: "#FFFFFF",
      opacity: "0.4",
    }
 }

});