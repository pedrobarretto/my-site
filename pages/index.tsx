import styled from 'styled-components'
import NavImage from '../components/Image/NavBarImg'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`

export default function Home() {
  return (
    <>
      <Title>Pedro Barretto</Title>
      <NavImage />
    </>
  )
}
