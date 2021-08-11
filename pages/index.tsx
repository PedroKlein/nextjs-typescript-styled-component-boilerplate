import { GetStaticProps } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const Title = styled.h1`
  color: var(--secondary);
  font-size: 50px;
`

interface Props {
  textFromServer: string
}

const IndexPage: React.FC<Props> = ({ textFromServer }) => (
  <main>
    <Head>
      <title>Template Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>{textFromServer}</Title>
  </main>
)

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const textFromServer = 'Hello 👋'

  return {
    props: {
      textFromServer,
    },
  }
}
