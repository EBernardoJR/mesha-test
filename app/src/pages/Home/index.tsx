import { Container, Header, SubTitle, Title, Infos, Buttons, ButtonIcon } from './styles';
import { UserCard } from './templates/UserCard';
import { useNavigate } from "react-router-dom";
import { FiSend, FiLogOut } from 'react-icons/fi'
import UserContext from '../../services/context/userContext';
import { useContext } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const { user, handleUser } = useContext(UserContext)
  return (
    <Container>
      <Header>
      <Infos>
        <Title>Bem vindo, !</Title>
        <SubTitle>Veja abaixo alguns dos nossos arquitetos disponíveis</SubTitle>
      </Infos>
      <Buttons>
        <ButtonIcon onClick={() => navigate('/orders')}>
          <FiSend color='#0074CA' size={26}/>
        </ButtonIcon>
        <ButtonIcon onClick={() => navigate('/login')}>
          <FiLogOut color='#0074CA' size={26}/>
        </ButtonIcon>
      </Buttons>
      </Header>
      <UserCard name={'Josenildo da silva'} />
      <UserCard name={'Joana Francisca'} />
      <UserCard name={'Joana Francisca'} />
      <UserCard name={'Joana Francisca'} />
    </Container>
  );
}
