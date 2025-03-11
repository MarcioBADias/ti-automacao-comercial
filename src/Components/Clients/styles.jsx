import styled from 'styled-components'

export const Section = styled.section`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5% 0;
`

export const Container = styled.div`
  display: flex;
  @media (max-width: 840px) {
    display: inline-block;
  }
`

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 50vw;
  z-index: 5;

  @media (max-width: 840px) {
    margin: 0;
    width: 100vw;
  }
`

export const ClietsArea = styled.div`
  position: relative;
  overflow: hidden;
`

export const LogosContainer = styled.div`
  animation: logocarrocel 10s linear infinite;
  animation-timing-function: linear;
  animation-duration: 20s;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 5rem;
  height: 100%;
  width: 70%;

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
`

export const LogosCli = styled.img`
  height: 400px;
  margin: 3rem 1rem 0 1rem;
  width: 400px;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: all 1s ease-in-out;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
    cursor: pointer;
  }

  @media (max-width: 840px) {
    height: 100%;
    width: 100%;
    margin: -2rem 1rem 0 1rem;
  }
`

export const TextArea = styled.div`
  display: flex;
  padding: 1rem;
`

export const Mark = styled.img(
  ({ size }) => `
    margin: 0 1rem;
    width: ${size}px;
`,
)

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`

export const Text = styled.p`
  display: block;
  width: 100%;
  font-size: 1rem;

  @media (max-width: 840px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`
