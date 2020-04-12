import styled from "styled-components"
import { breakpoints } from "~/utils/theme"

export const Container = styled.div`
  max-width: 80%;
  margin: 64px auto;

  @media (min-width: ${breakpoints.medium}) {
    width: 1356px;
  }
`
