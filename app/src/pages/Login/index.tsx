import { ReactNode } from 'react';

import { Container } from './styles';

interface LoginProps {
  children: ReactNode;
}

export function Login({ children }: LoginProps) {
  return (
    <Container>
      <h1>Login</h1>
      {children}
    </Container>
  );
}
