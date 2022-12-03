import styled from "styled-components";
import { Avatar } from "./Avatar";


export const Body = () => {
  return (
    <>
      <BodyComponent>
        <Avatar /> 
      </BodyComponent>
    </>
  );
};

const BodyComponent = styled.div`
  position: absolute;
  display: flex;

  @media (max-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-51%, -51%);
  }
`;
