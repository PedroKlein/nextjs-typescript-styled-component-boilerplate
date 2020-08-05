import styled from 'styled-components'
import Head from 'next/head'

const Title = styled.h1`
  color: var(--primary);
  font-size: 50px;
`

const IndexPage = (): JSX.Element => (
  <div>
    <Head>
      <title>Template Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>Hello 👋</Title>
  </div>
)

export default IndexPage
