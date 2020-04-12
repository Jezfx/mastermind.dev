import Layout from "~/components/layout/"
import Button from "~/components/button/"
import { Header } from "~/components/typography/"

import * as Styles from "./home.styles"
import * as Constants from "./home.constants"

export default () => (
  <Layout>
    <Styles.Container>
      <Styles.Main>
        <Styles.Intro>
          Meet on a regular basis with other driven developers to share ideas,
          learn and teach.
        </Styles.Intro>

        <Styles.ButtonWrapper mobile>
          <Button>{Constants.buttonText}</Button>
        </Styles.ButtonWrapper>

        <Header as="h3">Goal</Header>
        <p>
          As a developer, it's hard to stay on top of how quick the industry
          moves and keeping up with news, best practices and .
        </p>
        <p>
          The goal of these masterminds is for small groups to work together to
          share essential knowledge to build each other up.
        </p>

        <Header as="h3">How it works</Header>
        <p>
          Tell us about your background, goals and interests and we'll put you
          in a group (max 5) of similar skills sets and levels to meet on a
          regular basis.
        </p>
        <p>
          Once a month you'll get together for your mastermind to share
          something interesting you've learnt or discovered that month. A new
          person each month will lead the group to manage time and structure.
        </p>
      </Styles.Main>
      <Styles.Aside>
        <>
          <Styles.Image src="/conferance-call.svg" alt="conferance call" />
          <Styles.ButtonWrapper desktop>
            <Button>{Constants.buttonText}</Button>
          </Styles.ButtonWrapper>
        </>
      </Styles.Aside>
    </Styles.Container>
  </Layout>
)
