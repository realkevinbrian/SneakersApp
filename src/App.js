import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar"
import Product from "./components/ProductShowCase";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyle";

function App() {

  const theme = {

    Layout : {
      Mobile : "699px",
      Tablet : "700px",
      Desktop : "1440px"
    },

    Colors : {

      Primary : {

        orange : "hsl(26, 100%, 55%)",
        pale_orange : "hsl(25, 100%, 94%)"
      },

      Neutral : {

        vark_blue : "hsl(220, 13%, 13%)",
        dark_blue : "hsl(219, 9%, 45%)",
        gray_blue : "hsl(220, 14%, 75%)",
        light_blue : "hsl(223, 64%, 98%)",
        white : "hsl(0, 0%, 100%)",
        black : "hsl(0, 0%, 0%)"

      }
    }
  }


  /***
   * Initialize a state open the cart 
   * When user clicks on the cartIcon in the Navigation bar 
   */
 

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <NavigationBar/>
      <Product/>
      {/* <Attribution/> */}
    </ThemeProvider>
    </>
  );
}

export default App;
