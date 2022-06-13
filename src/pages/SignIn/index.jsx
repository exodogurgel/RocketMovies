import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi"

export function SignIn() {
  return (
    <Container> 
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input 
          icon={FiMail}
          type="email"
          placeholder="Nome"
        /> 

        <Input 
          icon={FiLock}
          type="password"
          placeholder="Nome"
        /> 

        </Form>
    </Container>  
  )
}