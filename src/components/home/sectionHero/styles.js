import { styled } from "../../../styles";
import { Container } from "../../../styles/global";

import bgHero from "../../../assets/bg-hero.jpg";

export const SectionHeroStyle = styled("section", {
  position:"relative",
  zIndex: 1,
  width: "100%",
  height: 731,
  background:`url(${bgHero.src}) no-repeat top center`,
  backgroundAttachment:"fixed",
  paddingTop: 96,
  display: "flex",
  flexDirection:"row",

  [`${Container}`]:{
    borderLeft:"1px solid rgba(255, 255, 255, 0.2);",
    borderRight:"1px solid rgba(255, 255, 255, 0.2);",
    display:"flex",
    alignItems:"flex-start",
  },
  "&:after" :{
    content: " ",
    position:"absolute",
    backgroundImage:"linear-gradient(transparent, #000000)",
    zIndex:-1,
    bottom: 0,
    width:"100%",
    height:300,
  },
  "@tablet":{
    [`${Container}`]:{
      flexDirection: "column",
      
    },
  },
});

export const AreaSocial = styled("div", {
  width:72,
  height: "100%",
  borderRight:"1px solid rgba(255, 255, 255, 0.2);",
  "@tablet":{
      width:"100%",
  },
  ul:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    listStyle:"none",
    padding:"30px 0",
    borderBottom:"1px solid rgba(255, 255, 255, 0.2);",
    "@tablet":{
      padding:"15px 0",
      flexDirection:"row",
      justifyContent: "center",
      gap:30,
    },
    li:{
      "&:not(:last-child)":{
        marginBottom:32,
        "@tablet":{
          marginBottom: 0,
        },
      },
      a:{
        display:"block",
      }
    }
  }
});
export const ContexText = styled("div", {
  height: "100%",
  paddingLeft: 96,
  paddingRight:71,
  display:"flex",
  alignItems:"flex-end",
  justifyContent:"space-between",
  flex:1,
  paddingBottom:31,
  "@tablet":{
    paddingLeft: 30,
    paddingRight:30,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  "@mobile":{
    paddingLeft: 15,
    paddingRight:15,
  },
  ".left": {
    flex: 1,
    maxWidth: 574,
    paddingBottom:"10.1rem",
    "@tablet":{
      paddingBottom:"1rem",
    },
    h3:{
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "21px",
      letterSpacing: "0.095em",
      color: "#FFA800",
      marginBottom: 8,
      "@mobile":{
        marginTop:10,
        marginBottom: 4,
      },
    },
    h1: {
      fontWeight: 600,
      fontSize: "6.1rem",
      lineHeight: "7.1rem",
      color: "#FFFFFF",
      marginBottom: 8,
      "@mobile":{
        fontSize: "5.1rem",
        lineHeight: "5.5rem",
        marginBottom: 4,
      },
    },
    p:{
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      marginBottom: 32,
      "@mobile":{
        fontSize: "1.2rem",
        marginBottom: 10,
      },
    },
    a:{
      display:"inline-block",
      padding:"15px 52px",
      backgroundColor: "$red900",
      color: "#FFFFFF",
      borderRadius: 5,

      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      textDecoration: "none",
      transition:"filter .3s ease",
      "&:hover":{
        filter: "brightness(0.8)",
      }
    }
  }
  
});