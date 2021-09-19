import { Container, Title, Content, MessageArea } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Title>Chat board</Title>
      <Content>
        <article></article>
        <MessageArea>
          <input type="text" />
          <button type="submit"></button>
        </MessageArea>
      </Content>
    </Container>
  );
}
