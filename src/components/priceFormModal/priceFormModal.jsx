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
  priceInfo,
  onSetPriceInfo,
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

  const handlePriceInfoChange = ({ target }) => {
    onSetPriceInfo((prev) => ({ ...prev, [target.name]: target.value }));
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
            name="category"
            type="text"
            defaultValue={priceInfo.category}
            placeholder="카테고리"
            onChange={handlePriceInfoChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="name"
            type="text"
            defaultValue={priceInfo.name}
            placeholder="상품명"
            onChange={handlePriceInfoChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="price"
            type="text"
            defaultValue={priceInfo.price}
            placeholder="가격"
            onChange={handlePriceInfoChange}
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
