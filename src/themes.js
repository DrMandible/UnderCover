import styled from 'styled-components';

export const DetailStyles = styled.div`
  margin: 0 auto !important;
  text-align: center !important;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  box-sizing: 2em;
  width: 100%;
  color: white;
  background-color: rgb(96, 125, 139) !important;

  .buttons {
    color: black;
    background-color: lightblue;
    border: 2px solid lightgrey;
    border-radius: 6px;
  }

  .details {
    color: white;
    background-color: rgb(96, 125, 139) !important;
    .header {
      font-weight: bold;
    }
  }
`;

export const LoginStyles = styled.div`
  margin: 0 auto !important;
  text-align: center !important;
  font-size: 1.3em;

  body {
    /* margin: 0; */
    overflow: hidden;
  }

  .Splash {
    position: flex;
    height: 97vh;
    width: 98vw;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    .Details {
      background-color: rgb(96, 125, 139);
    }
  }

  .Title-text {
    background-color: transparent;
    color: transparent;
    -webkit-text-stroke: 1px rgba(243, 255, 145, 0.5);
    mix-blend-mode: difference;
  }

  .Login {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: 2em;
    width: 100%;
    height: 100%;
    caret-color: #34ebeb;
  }

  .Submit-Button {
    font-family: sans-serif;
    width: auto;
    height: 3rem;
    line-height: 1;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.3rem;
    border: 3px solid white;
    background: rgba(66, 255, 255, 0.2);
    color: rgba(22, 89, 89, 0.6);
    -webkit-text-stroke: 1px white;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.35s;
    margin: 1rem;
  }

  .bgvid {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background: url(polina.jpg) no-repeat;
    background-size: cover;
  }
  input,
  textarea,
  select {
    width: 200px;
    height: 2em;
    margin: 0;
    text-align: center;
    align-items: center;
    align-content: center;
    -webkit-box-sizing: border-box; /* For legacy WebKit based browsers */
    -moz-box-sizing: border-box; /* For legacy (Firefox <29) Gecko based browsers */
    box-sizing: border-box;
  }
`;
