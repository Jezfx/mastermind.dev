import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  border-radius: 4px;
  height: 48px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 700;
  min-width: 160px;
  background-color: ${({ theme }) => theme.colors.primary};
`
