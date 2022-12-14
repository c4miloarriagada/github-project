import styled from "styled-components";
export const Button = () => {
  return (
    <>
      <ScrollDownComponent>
        <section>
          <a>
            <span> </span>
          </a>
        </section>
      </ScrollDownComponent>
    </>
  );
};

const ScrollDownComponent = styled.section`
  display: none;
 

  @media (max-width: 768px) {
    display: flex;
    margin-top: 2rem;
    a span {
      position: absolute;
      left: 50%;
      width: 30px;
      height: 50px;
      border: 2px solid #ffff;
      border-radius: 50px;
      box-sizing: border-box;
    }
    a span::before {
      position: absolute;
      top: 10px;
      left: 50%;
      content: "";
      width: 6px;
      height: 6px;
      margin-left: -3px;
      background-color: #f1554c;
      border-radius: 100%;
      -webkit-animation: sdb10 2s infinite;
      animation: sdb10 2s infinite;
      box-sizing: border-box;
    }
    @-webkit-keyframes sdb10 {
      0% {
        -webkit-transform: translate(0, 0);
        opacity: 0;
      }
      40% {
        opacity: 1;
      }
      80% {
        -webkit-transform: translate(0, 20px);
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes sdb10 {
      0% {
        transform: translate(0, 0);
        opacity: 0;
      }
      40% {
        opacity: 1;
      }
      80% {
        transform: translate(0, 20px);
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;
