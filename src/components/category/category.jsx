import { BoardHeaderList, BoardHeaderItem } from './styled';

import { categoryMock } from '@/mocks/mocks';

const Category = ({ status }) => {
  const mapedCategoryMock = categoryMock[status].map((el, index) => (
    <BoardHeaderItem key={index}>{el}</BoardHeaderItem>
  ));

  return <BoardHeaderList>{mapedCategoryMock}</BoardHeaderList>;
};

export default Category;
