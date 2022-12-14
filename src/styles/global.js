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
  background: #55E6C1;
  -webkit-font-smoothing: antialiased;

}

body, input , button {

  font: 14px Poppins,sans-serif;
  
}


ul {
  margin: 0 auto;
  padding: 0 20px 50px;
  max-width: 1020px;
 
 
}

button {
  cursor: pointer;
}


`
