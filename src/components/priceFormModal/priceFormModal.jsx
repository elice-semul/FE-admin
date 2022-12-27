import { useForm } from 'react-hook-form';
import ClipLoader from 'react-spinners/ClipLoader';

import {
  ModalLayout,
  ModalContentContainer,
  Form,
  InputContainer,
  Input,
  FormButton,
} from './styled';

const PriceFormModal = ({
  updateInfo,
  onSetUpdateInfo,
  onSetIsShowingModal,
  onAddFormSubmit: handleAddFormSubmit,
  onUpdateButtonClick: handleUpdateButtonClick,
  createLoading,
  updateLoading,
  type,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const handleModalLayoutClick = (event) => {
    event.stopPropagation();
    onSetIsShowingModal(false);
  };

  const handleModalContentContainerClick = (event) => {
    event.stopPropagation();
  };

  const handleUpdateInfoChange = ({ target }) => {
    onSetUpdateInfo((prev) => ({ ...prev, [target.name]: target.value }));
  };

  if (type === 'create') {
    return (
      <ModalLayout onClick={handleModalLayoutClick}>
        <ModalContentContainer onClick={handleModalContentContainerClick}>
          <Form onSubmit={handleSubmit(handleAddFormSubmit)}>
            <InputContainer>
              <Input type="text" placeholder="카테고리" {...register('category')} />
            </InputContainer>
            <InputContainer>
              <Input type="text" placeholder="상품명" {...register('name')} />
            </InputContainer>
            <InputContainer>
              <Input type="text" placeholder="가격" {...register('price')} />
            </InputContainer>
            <FormButton type="submit" disabled={isSubmitting}>
              {createLoading ? (
                <ClipLoader color="#ffffff" size={16} speedMultiplier={1} />
              ) : (
                '추가'
              )}
            </FormButton>
          </Form>
        </ModalContentContainer>
      </ModalLayout>
    );
  }

  return (
    <ModalLayout onClick={handleModalLayoutClick}>
      <ModalContentContainer onClick={handleModalContentContainerClick}>
        <InputContainer>
          <Input
            type="text"
            defaultValue={updateInfo.category}
            placeholder="카테고리"
            {...register('category')}
            onChange={handleUpdateInfoChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            defaultValue={updateInfo.name}
            placeholder="상품명"
            {...register('name')}
            onChange={handleUpdateInfoChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="price"
            type="text"
            defaultValue={updateInfo.price}
            placeholder="가격"
            {...register('price')}
            onChange={handleUpdateInfoChange}
          />
        </InputContainer>
        <FormButton type="button" onClick={handleUpdateButtonClick}>
          {updateLoading ? <ClipLoader color="#ffffff" size={16} speedMultiplier={1} /> : '수정'}
        </FormButton>
      </ModalContentContainer>
    </ModalLayout>
  );
};

export default PriceFormModal;
