import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background: #72bca5;
  -webkit-font-smoothing: antialiased;
}

body, input , button {

  font: 14px Poppins,sans-serif;
}


#root {
  margin: 0 auto;
 
}

button {
  cursor: pointer;
}


`
