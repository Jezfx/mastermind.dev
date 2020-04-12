import styled from "styled-components"
import { breakpoints } from "~/utils/theme"

export const Container = styled.div`
  flex-direction: column;
  display: flex;

  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
  }
`

export const Main = styled.main`
  max-width: 550px;
`

export const Intro = styled.p`
  margin-top: 30px;
  font-size: 20px;
`

export const Aside = styled.aside`
  flex-grow: 1;
  padding-left: 80px;

  @media (min-width: ${breakpoints.xLarge}) {
    justify-content: start;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.large}) {
    max-width: 510px;
  }

  ${({ mobile }) =>
    mobile &&
    `
    @media (min-width: ${breakpoints.large}) {
      display: none;
  }
`}

  ${({ desktop }) =>
    desktop &&
    `
    display: none;
    @media (min-width: ${breakpoints.large}) {
      display: block;
  }
`}
`

export const Image = styled.img`
  display: none;
  width: 100%;
  max-width: 510px;
  min-width: 300px;

  margin-bottom: 20px;

  @media (min-width: ${breakpoints.large}) {
    display: block;
  }
`
