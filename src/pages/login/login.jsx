import { useForm } from 'react-hook-form';
import ClipLoader from 'react-spinners/ClipLoader';

import { Container, Title, Form, InputContainer, Input, RequiredText, JoinButton } from './styled';

import useLogin from '@/hooks/useLogin';
import PortalNoti from '@/portals/portalNoti';
import { getErrorMessage } from '@/utils/errorMessage';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { isShowingModal, setIsShowingModal, loginAdmin } = useLogin();

  const handleLoginFormSubmit = ({ email, password }) => {
    loginAdmin.mutate({ email, password });
  };

  return (
    <Container>
      <Title>새물</Title>
      <Form onSubmit={handleSubmit(handleLoginFormSubmit)}>
        <InputContainer>
          <Input
            type="text"
            placeholder="이메일"
            {...register('email', {
              required: { value: true, message: '이메일을 입력해주세요.' },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식을 입력해주세요.',
              },
            })}
          />
        </InputContainer>
        {errors.email && <RequiredText>{errors.email.message}</RequiredText>}
        <InputContainer>
          <Input
            type="password"
            placeholder="비밀번호"
            {...register('password', {
              required: { value: true, message: '비밀번호을 입력해주세요.' },
              minLength: { value: 4, message: '4자리 이상 비밀번호를 입력해주세요.' },
            })}
          />
        </InputContainer>
        {errors.password && <RequiredText>{errors.password.message}</RequiredText>}
        <JoinButton type="submit" disabled={isSubmitting}>
          {loginAdmin.isLoading ? (
            <ClipLoader color="#ffffff" size={16} speedMultiplier={1} />
          ) : (
            '로그인'
          )}
        </JoinButton>
      </Form>
      {isShowingModal && (
        <PortalNoti
          onSetIsShowingModal={setIsShowingModal}
          text={getErrorMessage(loginAdmin.error)}
        />
      )}
    </Container>
  );
};

export default Login;
