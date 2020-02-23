import { createGlobalStyle } from 'styled-components';
import vect from '../img/vect.png';

export default createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  html, body , #root {
    min-height: 100%
  }

  body {

    -webkit-font-smoothing: antialiased !important
  }

  .content {
    max-width: 1200px;
    margin: 0 auto
  }

  #skills-bar svg{
  width: 180px;
  margin: 10px 70px 30px 0;
}

#skills-bar {
  position: relative;
  margin: 10px 0 30px
}

#skills-bar .skills__logo {
  background-image: url(${vect});
  background-repeat: no-repeat;
  max-width: 216px;
  height: 39px;
  position: relative;
  margin: 20px 0
}

#skills-bar .skills__logo span {
  color: #fff;
  display: block;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  padding: 8px 0;
}

#progress-title {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 180px;
    font-family: 'calibri';
    font-weight: 700;
    font-size: 1.1rem;
}


.CircularProgressbar .CircularProgressbar-text {
    fill: #2f4152;
    font-size: 20px;
    dominant-baseline: middle;
    font-family: 'calibri';
}
`;
