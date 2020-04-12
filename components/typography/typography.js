import styled from "styled-components"
import { Text } from "rebass"

export const Header = styled(Text)`
  font-weight: 900;
  font-size: 24px;
  margin-top: 48px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
`
