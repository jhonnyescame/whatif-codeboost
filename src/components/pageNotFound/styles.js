import { styled } from "../../styles";
import { Container } from "../../styles/global";

export const PageNotFoundStyle = styled("section", {
  marginTop: 96,
  paddingTop: 96,
  [`${Container}`]:{
    // borderLeft:"1px solid rgba(255, 255, 255, 0.2);",
    // borderRight:"1px solid rgba(255, 255, 255, 0.2);",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  h1:{
    fontWeight: 600,
    fontSize: "49px",
    lineHeight: "59px",
    color: "$white",
    marginBottom:30,
  },
  p:{
    maxWidth: "641px",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    color: "$white",
    marginBottom:30,
  },
  a:{
    display:"inline-block",
    maxWidth: "196px",
    lineHeight: "54px",
    backgroundColor:"$red900",
    borderRadius: 5,
    padding: "0 73px",

    fontWeight: 400,
    fontSize: "16px",
    color: "$white",
    transform: "filter .3s ease",
    marginBottom:72,
    textDecoration: "none",
    "&:hover":{
      filter: "brightness(0.8)",
    }
  }
});