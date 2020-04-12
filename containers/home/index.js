import Link from "next/link"
import styled from "styled-components"

import Layout from "~/components/layout/"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default () => (
  <Layout>
    <main>
      <Title>here</Title>
      <p>Virtual mastermind groups for developers.</p>
      <p>
        Meet on a regular basis with other driven developers to share ideas,
        learn and teach.
      </p>
      <h2>Goal</h2>
      <p>
        As a developer, it's hard to stay on top of how quick the industry moves
        and keeping up with news, best practices and .
      </p>
      <p>
        The goal of these masterminds is for small groups to work together to
        share essential knowledge to build each other up.
      </p>

      <h2>How it works</h2>
      <p>
        Tell us about your background, goals and interests and we'll put you in
        a group (max 5) of similar skills sets and levels to meet on a regular
        basis.
      </p>
      <p>
        Once a month you'll get together for your mastermind to share something
        interesting you've learnt or discovered that month. A new person each
        month will lead the group to manage time and structure.
      </p>
    </main>
    <aside>
      <button>Join the waiting list</button>
    </aside>
  </Layout>
)
