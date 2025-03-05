import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    min-height: calc(100vh - 80px);
    position: relative;
    overflow: hidden;

    @media (max-width: 840px){
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Triangles = styled.img(({ position, size }) => `
    position: absolute;
    top: ${position.x}px;
    left: ${position.y}px;
    width: ${size}px;
    transform: rotatex(180deg);
    1
    @media (max-width: 840px) {
        top: calc(${position.x}0px)px;
    }
`);

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    width: 50vw;
    z-index: 5;

    @media (max-width: 840px) {
        margin: 0;
        width: 100vw;
    }
`;

export const ClietsArea = styled.div`
  position: relative;
  overflow: hidden;
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 50%;
  height: 100%;
  animation: logocarrocel 10s linear infinite;
  animation-timing-function: linear;
  animation-duration: 20s;

  @keyframes logocarrocel {
    0% {
      transform: translateX(-150%);
    }
    100% {
      transform: translateX(150%);
    }
  }

  @media (max-width: 840px) {
    @keyframes logocarrocel {
        0% {
        transform: translateX(-120%);
        }
        100% {
        transform: translateX(120%);
        }
    }
    }
`;

export const LogosCli = styled.img`
    height: 100px;
    width: 200px;
    filter: grayscale(100%);
    opacity: 0.5;
    transition: all 0.2s ease-in-out;

     &:hover {
        filter: grayscale(0%);
        opacity: 1;
        cursor: pointer;
    }

    @media (max-width: 840px) {
        height: 150px;
        margin-top: 4rem;
        width: 300px;
    }
`;

export const TextArea = styled.div`
    display: flex;
    margin-top: 1rem;
`;


export const Mark = styled.img(({ size }) => `
    margin: 0 1rem;
    width: ${size}px;
`);

export const Title = styled.h1(({ color, left, top }) => `
    color: ${color};
    margin-left: ${left}px;
    margin-top: ${top}px;
    text-transform: uppercase;
`);

export const Text = styled.p`
    display: block;
    margin-top: 1rem;
    width: 100%;
    font-size: 1rem;

    @media (max-width: 840px) {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
`;