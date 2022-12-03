import { useState } from "react";
import { Body } from "./Body/Body";
import { Navbar } from "./Navbar/Navbar";
import { SiderMenu } from "./Navbar/SiderMenu";
import styled from 'styled-components';

export const Container = () => {
  const [button, setButton] = useState(false);

  const handleClick = (): void => {
    setButton(!button);
  };


  return (
    <>
    <Navbar button={button} handleClick={handleClick} />

      { button ? (
        <>
          <Body />
          <SiderMenu />
        </>
      ) : (
        <>
          <Body />
        </>
      )}


 
    </>
  );
};



