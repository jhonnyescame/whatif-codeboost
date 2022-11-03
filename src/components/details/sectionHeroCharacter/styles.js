import { styled } from "../../../styles";
import { Container } from "../../../styles/global";

export const SectionCharacterStyle = styled("section", {
  marginTop: "9.6rem",
  height: 631,
  borderBottom:"1px solid rgba(255, 255, 255, 0.2);",
  [`${Container}`]:{
    display:"flex",
    alignItems:"center",
    height:"100%",
    borderLeft:"1px solid rgba(255, 255, 255, 0.2);",
    borderRight:"1px solid rgba(255, 255, 255, 0.2);",
    // justifyContent:"space-between",
    "@mobile":{
      flexDirection:"column",
      // marginLeft:20,
    },
  },
  ".image":{
    borderRadius: 5,
    overflow:"hidden",
    height:"100%",
    "@mobile":{
      minHeight: 250,
    },
  },
  ".infor":{
    flex: 1,
    maxWidth:650,
    marginLeft:32,
    display:"flex",
    "@tablet":{
      flexDirection:"column",
      marginLeft:20,
    },
    ".conteudo": {
      position:"relative",
      flex: 1,
      maxWidth: 546,
      paddingLeft:27,
      marginLeft:19,
      "@tablet":{
        paddingLeft:5,
        marginLeft:2,
      },
      "&:before":{
        content:"",
        position:"absolute",
        width: "4px",
        height: "46px",
        left: 0,
        top: 12,
        background:" #FF040D",
      }
    },
    span: {
      // flex: 1,
      fontWeight: 400,
      fontSize: "1.8rem",
      lineHeight: "2.7rem",
      color: "$gray400",
      opacity:0.6,
      marginTop:17,
    },
    h1 :{
      fontWeight: 600,
      fontSize: "6.1rem",
      lineHeight: "7.1rem",
      color: "$white",
      "@mobile":{
        fontSize: "4.1rem",
        lineHeight: "7.1rem",
      },
    },
    p:{
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      color: "$gray400",
      "@mobile":{
        fontSize: "1.2rem",
        lineHeight: "1.9rem",
      },
    }
  }
});