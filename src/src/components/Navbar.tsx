import styled from "styled-components";
import { BurguerButton } from "./BurguerButton";
import { useState } from "react";

export const Navbar = () => {
  const [button, setButton] = useState(false);


  const handleClick = (): void => {
    setButton(!button);
  };

  return (
    <>
      <NavbarComponent>
        <h2>
          Camilo Arrigada Vallejos <span>Full stack developer</span>
        </h2>
        <a>Github</a>
        <a>Contacto</a>

        <BurguerButton button={button} handleClick={handleClick} />
      </NavbarComponent>
    </>
  );
};

const NavbarComponent = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  a {
    color: black;
    display: flex;
  }
`;
