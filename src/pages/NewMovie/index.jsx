import { Container, Form } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { NewTag } from '../../components/NewTag'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { ButtonText } from '../../components/ButtonText'

export function NewMovie() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" icon={FiArrowLeft} />
            <h1>Novo filme</h1>
          </header>
          <div className="input-values">
            <Input type="text" placeholder="Titulo" />
            <Input type="number" placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <NewTag value="Drama" />
              <NewTag value="Ficção Cientifica" />
              <NewTag value="" isNew placeholder="Novo marcador" />
            </div>
          </Section>
        </Form>
      </main>
    </Container>
  )
}
