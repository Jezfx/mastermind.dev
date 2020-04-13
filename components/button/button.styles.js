import styled from "styled-components"
import { Button } from "rebass"

export const Container = styled(Button)`
  width: 100%;
  border: none;
  color: #fff;
  border-radius: 4px;
  height: 48px;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 700;
  min-width: 160px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};

  // for anchor links
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`
