import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'

export function NewMovie() {
  return (
    <Container>
      <Header />
      <header>
        <ButtonText title="Voltar" icon={FiArrowLeft} />
        <h1>Novo filme</h1>
      </header>
      <main>
        <div>
          <Input type="text" placeholder="Titulo" />
          <Input type="number" placeholder="Sua nota (de 0 a 5)" />
        </div>
        <Textarea placeholder="Observações" />
      </main>
    </Container>
  )
}
