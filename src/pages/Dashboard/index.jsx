import { Container, Title, Content, MessageArea, Message } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Title>Chat board</Title>
      <Content>
        <Message></Message>
        <MessageArea>
          <input type="text" placeholder="Escreva uma mensagem..." />
          <button type="submit">Enviar</button>
        </MessageArea>
      </Content>
    </Container>
  );
}
