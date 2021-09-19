import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 720px;

  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Title = styled.h1``;

export const Content = styled.section`
  width: 100%;
  background-color: gray;
  padding: 20px;
  border-radius: 5px;
`;

export const Message = styled.article`
  height: 200px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
`;

export const MessageArea = styled.div`
  display: flex;
  width: 100%;

  margin-top: 10px;

  input {
    flex: 1;
    padding: 5px;
  }
`;
