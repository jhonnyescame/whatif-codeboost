import { styled } from "../../../styles";
import { Container } from "../../../styles/global";


export const SectionCharactersStyle = styled("section", {
  paddingTop: 56,
  paddingBottom:72,
  ".title":{
    display:"flex",
    alignItems:"center",
    paddingBottom:56,
    "@tablet":{
      paddingLeft:56,
    },
    span:{
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1.8rem",
      lineHeight: "2.7rem",
      color: "$white",
      opacity: 0.4,
      marginRight: "11.3rem"
    },
    h2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "2.5rem",
      lineHeight: "3.5rem",
      color: "$white",
      maxWidth:"21.6rem",
      position:"relative",
      paddingLeft:16,
      "&:before" :{
        content: " ",
        position:"absolute",
        top: 5.5,
        left: 0,
        width: 2,
        height: 59,
        backgroundColor:"$red800",
      }
    }
  },
  [`${Container}`]:{

  },
});

export const ListCharactersStyle = styled("div", {
  display:"grid",
  gridTemplateColumns:"repeat(4, 1fr)",
  gridGap:"4rem 3.3rem",
  "@tablet":{
    gridTemplateColumns:"repeat(2, 1fr)",
    gridGap:"2rem 3.3rem",
    justifyItems: "center"
  },
  "@mobile":{
    gridTemplateColumns:"repeat(2, 1fr)",
    gridGap:"1rem 1rem",
    justifyItems: "center"
  },
  ".marvel":{
    width:"28.0rem",
    height:"36.8rem",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    "@mobile":{
      width:"20.0rem",
      height:"20.0rem",
    },
  }
});