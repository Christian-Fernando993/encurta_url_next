import { styled } from "@stitches/react";

export const HeroStyle = styled("section", {
  paddingTop: "100px",

  ".box": {
    marginTop: "10rem",
    background: "#fff",
    borderRadius: "18px",
    padding: "40px 60px",
    height: "400",
    ".title": {
      marginBottom: "30px",
      h1: {
        color: "#3D324A",
        fontFamily: "$BROmnyBold",
        fontSize: "48px",
        fontWeight: 700,
        marginBottom: "40px",
      },
      p: {
        color: "#3D324A",
        fontFamily: "$BROmnyBold",
        fontSize: "24px",
        fontWeight: 700,
      },
    },
    ".input": {
      ".input-url": {
        outline: 'none',
        width: "100%",
        maxWidth: "100%",
        height: "60px",
        borderRadius: "25px",
        padding: "15px 40px",
        border: '2px solid rgba(90, 120, 255, 0.51)',
        color: "#3D324A",
        fontFamily: "$BROmnyRegular",
        fontSize: "18px",
        fontWeight: 300,
        marginBottom: "40px",
        transition: '.3s',
        '&:hover, &:focus': {
          border: '2px solid #5a78ff',
        }
      },
      ".bts": {
        ".btn": {
          width: "113px",
          height: "57px",
          borderRadius: "25px",
          background: "#5A78FF",
          color: "#fff",
          fontSize: "18px",
          transition: "all .3s",
          "&:first-child": {
            marginRight: "50px",
          },
          "&:hover": {
            backgroundColor: "#3D3245",
          },
        },
      },
    },
  },

  '@media (max-width: 640px)': {
    '.box': {
      padding: '25px',
      '.title': {
        marginBottom: '30px',
        h1:{
          fontSize: '24px',
          marginBottom: '20px',
        },
        p:{
          fontSize: '16px',
        }
      },
      '.input': {
        '.input-url': {
          fontSize: '16px',
          height: '50px',
          marginBottom: '20px',
          padding: '15px 15px',
        },
        '.bts': {
          display: 'flex',
          justifyContent: 'space-between',
          '.btn':{
            width: '120px',
            height: '45px',
            fontSize: '16px',
            "&:first-child": {
              marginRight: "0px",
            },
          }
        }
      }
    }
  }
});
