import { Container, Header, SubTitle, Title, Infos, Buttons } from './styles';
import { FiHome, FiLogOut } from 'react-icons/fi'
import { OrderCard } from './templates/OrderCard';

export default function Orders() {
  return (
    <Container>
      <Header>
      <Infos>
        <Title>Pedidos</Title>
        <SubTitle>Aqui estão todos os seus pedidos</SubTitle>
      </Infos>
      <Buttons>
        <FiHome color='#0074CA' size={26}/>
        <FiLogOut color='#0074CA' size={26}/>
      </Buttons>
      </Header>
      <OrderCard name={"Apartamento"} />
      <OrderCard name={"Quarto infantil"} />
    </Container>
  );
}
