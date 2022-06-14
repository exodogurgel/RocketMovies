import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Container, Content } from './styles'
import { FiArrowLeft } from 'react-icons/fi';


export function Details() {
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText icon={FiArrowLeft} title="Voltar"/>

        </Content>
      </main>
    </Container>
  )
}