import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';

export function Profile(){
  return (
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
          Voltar
        </a>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/exodogurgel.png" alt="Foto do Usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              type="file" 
              id="avatar" 
            />
          </label>
        </Avatar>

        <Input
          type="text"
          icon={FiUser}
          placeholder="Nome"
        />

        <Input
          type="email"
          icon={FiMail}
          placeholder="E-mail"
        />

        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha atual"
        />

        <Input
          type="password"
          icon={FiLock}
          placeholder="Nova senha"
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}