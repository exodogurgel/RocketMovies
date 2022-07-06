import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 

import { useAuth } from '../../hooks/auth';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  async function handleUpdate() {
    const user = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew,
    }
    await updateProfile({ user })
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/exodogurgel.png" alt="Foto do Usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input 
          type="text" 
          icon={FiUser} 
          placeholder="Nome" 
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          type="email" 
          icon={FiMail} 
          placeholder="E-mail"
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          type="password" 
          icon={FiLock} 
          placeholder="Senha atual" 
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          type="password" 
          icon={FiLock} 
          placeholder="Nova senha" 
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button
          title="Salvar"
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  )
}
