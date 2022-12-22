import { Container, Title, Form, InputContainer, Input, JoinButton } from './styled';

const Login = () => {
  return (
    <Container>
      <Title>새물</Title>
      <Form>
        <InputContainer>
          <Input type="email" placeholder="이메일" />
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder="비밀번호" />
        </InputContainer>
        <JoinButton type="submit">로그인</JoinButton>
      </Form>
    </Container>
  );
};

export default Login;
