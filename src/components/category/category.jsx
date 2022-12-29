import { Container, BoardHeaderList, BoardHeaderItem } from './styled';

import { categoryMock } from '@/mocks/mocks';

const Category = ({ status }) => {
  const mapedCategoryMock = categoryMock[status].map((el, index) => (
    <BoardHeaderItem key={index}>{el}</BoardHeaderItem>
  ));

  return (
    <Container {...{ status }}>
      <BoardHeaderList {...{ status }}>{mapedCategoryMock}</BoardHeaderList>
    </Container>
  );
};

export default Category;
