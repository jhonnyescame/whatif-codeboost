import { styled } from "../../styles";
import { Container } from "../../styles/global";

export const HeaderStyle = styled("header", {
  position:"absolute",
  top: 0,
  width:"100%",
  borderBottom:"1px solid rgba(255, 255, 255, 0.2);",
  display:"flex",
  alignItems:"center",
  // justifyContent:"space-between",
  height:96,
  zIndex:2022,
  [`${Container}`]:{
    height:"100%",
    borderLeft:"1px solid rgba(255, 255, 255, 0.2);",
    borderRight:"1px solid rgba(255, 255, 255, 0.2);",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
  },
  ".logo":{
    position:"relative",
    padding: 23,
    "&:before" :{
      content: " ",
      backgroundColor:"$red800",
      position:"absolute",
      bottom: -5,
      height:1,
      width:104,
    }
  },
  ".code":{
    display:"flex",
    alignItems:"center",
    height:"100%",
    padding:" 0 23px",
    borderLeft:"1px solid rgba(255, 255, 255, 0.2);",
  },
  "@lgScreen":{

  }
})