import Header from "~/components/header"
import * as Styles from "./layout.styles"

export default ({ children }) => (
  <Styles.Container>
    <Header />
    <main>{children}</main>
  </Styles.Container>
)
