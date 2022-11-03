import { styled } from "../../styles";
import { Container } from "../../styles/global";


export const FooterStyle = styled("section", {
  // border: "1px solid rgba(255, 255, 255, 0.2)",
  padding:"40px 0",
  [`${Container}`]:{
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    padding:"40px 0",
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"space-between",

    "& > div":{
      display:"flex",
      alignItems:"flex-start",
      width: "100%",
      justifyContent:"space-between",
      "@tablet":{
        flexDirection: "column",
        alignItems:"center",
      },
      strong:{
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "21px",
        color:"$white",
        "@tablet":{
          marginBottom:10,
        },
      },
      p:{
        flex: 1,
        maxWidth: "593px",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "21px",
        color: "$gray500",
        "@tablet":{
          marginBottom:10,
        },
        // marginLeft:"18.6rem"
      }
    }
  },

});
