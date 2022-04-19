import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import NavigationBar from "./components/Main/Navbar/NavigationBar";
import Product from "./components/Main/Product/Product";

const theme = {
  Layout : {
    Mobile : "375px",
    Desktop : "1440px"
  },

  Colors : {

    Primary : {
      orange : "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)"
    },
    Neutral : {
      varkBlue : "hsl(220, 13%, 13%)",
      DarkGrayishBlue: "hsl(219, 9%, 45%)",
      GrayishBlue: "hsl(220, 14%, 75%)",
      LightGrayishBlue: "hsl(223, 64%, 98%)",
      White : "hsl(0, 0%, 100%)",
      Black : "hsl(0, 0%, 0%)"
    }
  },
  Typography : {
    fontSize : "16px",
    fontFamily : "(https://fonts.google.com/specimen/Kumbh+Sans)",
    fontBold : "400",
    fontBolder : "700"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavigationBar/>
        <Product/>
    </ThemeProvider>
  );
}

export default App;
