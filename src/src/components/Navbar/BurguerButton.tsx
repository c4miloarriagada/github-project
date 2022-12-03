import { Button } from "../../interface/interfaces";
import styled from "styled-components";




export const BurguerButton = ({ button, handleClick }:Button ) => {

  return (
    <BurgerButtonComponent>
      <div className= {`icon nav-icon-6 ${button ? 'open' : ''}`}  onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BurgerButtonComponent>
  );
};

const BurgerButtonComponent = styled.div`
  .nav-icon-6 {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: sticky;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-6 span {
    //background-color: #F1554C;
    background-color: #E9ECF4;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
  }
  .nav-icon-6 span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .nav-icon-6 span:nth-child(2) {
    top: 13px;
    left: 0px;
  }
  .nav-icon-6 span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  .nav-icon-6:not(.open):hover span:nth-child(1) {
    background-color: #F1554C;
    transform: scaleY(1.2);
    left: -5px;
  }
  .nav-icon-6:not(.open):hover span:nth-child(2) {
    background-color: #F1554C;
    transform: rotate(5deg) scaleY(1.1);
  }
  .nav-icon-6:not(.open):hover span:nth-child(3) {
    background-color: #F1554C;
    transform: scaleY(1.2);
    left: 5px;
  }
  .nav-icon-6.open span:nth-child(1) {
    background-color: #F1554C;
    transform: rotate(45deg) scaleX(0.7);
    top: 13px;
    left: -8px;
  }
  .nav-icon-6.open span:nth-child(2) {
    background-color: #F1554C;
    transform: scale(0);
    transition-duration: 50ms;
  }
  .nav-icon-6.open span:nth-child(3) {
    background-color: #F1554C;
    transform: rotate(-45deg) scaleX(0.7);
    top: 13px;
    left: 7px;
  }
  @media(min-width: 768px){
    display: none;
  }
`;
