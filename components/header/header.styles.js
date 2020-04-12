import styled from "styled-components"

export const Logo = styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.black};
`

export const SubHeader = styled.h2`
  margin-top: 0;
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`
