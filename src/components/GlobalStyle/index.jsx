import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body{
        font-size: 16px;
        /* font-family: "https://fonts.google.com/specimen/Kumbh+Sans"; */
        padding: 0;
        margin: 0;
        height: 100%;
    }

    *{
        box-sizing: border-box;
        
    }

    h1{
        font-weight: 700;
    }

    h2{
        font-weight: 400;
        
    }

    p{
        font-weight: 400;
    }

    ul{
        padding: 0;
        margin: 0;
        list-style: none;
        li{
            a{
                text-decoration: inherit;
                color: inherit;
            }
        }
    }


`