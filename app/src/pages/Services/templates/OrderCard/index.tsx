import { ReactNode } from 'react';
import { Buttons, Container, Description, Name, Price } from './styles';
import { PrimaryButton, SecondaryButton } from '../../../../components/Buttons';
const icon = require("../../../../assets/icons/order.png")

interface UserCardProps {
  name: ReactNode;
}

export function OrderCard({ name }: UserCardProps) {
  const isClient = true
  return (
    <Container>
      <img src={icon} alt="icon"  />
      <Name>{name}</Name>
      <Description>
      Na final da UEFA Champions League 17/18 em Kiev, apenas Marcelo sabia que era o último jogo 
      </Description>
      <Price>
        Orçamento<br />
        <strong>R$ 12.000</strong>
      </Price>
      <Buttons>
        {
          isClient? 
          <>
          <PrimaryButton>
            Editar
          </PrimaryButton>
          <SecondaryButton>
            Excluir
          </SecondaryButton>
          </> :
          <>
          <PrimaryButton>
            Aceitar
          </PrimaryButton>
          <SecondaryButton>
            Rejeitar
          </SecondaryButton>
          </>
        }
      </Buttons>
    </Container>
  );
}
