import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html{
    box-sizing: border-box;
    
    margin: 0; 
    padding: 0 ;
    font-family: 'Montserrat' ;

}

*,*::after, *::before{
    box-sizing: inherit;
}

body {
    //font-family: Montserrat, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: "Roboto";
    //width: 100%;
    //height: 100%;
    //::-webkit-scrollbar {
    //display: none;
//}
}


`;
