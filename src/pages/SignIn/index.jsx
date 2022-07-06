import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Container, Form, Background } from './styles';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input 
          icon={FiMail} 
          type="email" 
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)} 
        />

        <Input 
          icon={FiLock} 
          type="password" 
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)} 
        />
        
        <Button
          title="Entrar"
          onClick={handleSignIn} 
        />

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
