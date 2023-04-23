import { Container, Title } from './styles';
import TextInput from '../../../../components/TextInput';
import { PrimaryButton } from '../../../../components/Buttons';

const Form = ({ onSubmit }: {
  onSubmit: () => any
}) => {
  return (
    <Container>
        <Title>Nova solicitação</Title>
        <TextInput placeholder='Titulo (Ex: Reforma de quarto, Casa...)' />
        <TextInput placeholder='Orçamento (R$)'/>
        <TextInput placeholder='Descrição'/>
        <PrimaryButton onClick={onSubmit}>Enviar</PrimaryButton>
    </Container>
  );
}

export default Form;