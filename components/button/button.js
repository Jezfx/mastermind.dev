import Layout from "~/components/layout/"
import { Header } from "~/components/typography/"

import * as Styles from "./button.styles"

export default (props) => (
  <Styles.Container {...props}>{props.children}</Styles.Container>
)
