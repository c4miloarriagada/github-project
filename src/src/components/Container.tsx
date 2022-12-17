import { useState } from "react";
import { Body } from "./Body/Body";
import { Navbar } from "./Navbar/Navbar";
import { SiderMenu } from "./Navbar/SiderMenu";
import { Repos } from "./Github/Repos";
import { useFetch } from '../hooks/useFetch';

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
        <div>
          <Body />
          <SiderMenu />
        </div>
          <Repos/>
        </>
      ) : (
        <>
        <div>
          <Body />
        </div>
        <div>
          <Repos/>
        </div>
        </>
      )}


 
    </>
  );
};



