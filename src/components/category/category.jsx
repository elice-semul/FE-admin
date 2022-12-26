import { BoardHeaderList, BoardHeaderItem } from './styled';

import { categoryMock } from '@/mocks/mocks';

const Category = ({ menuStatus }) => {
  const mapedCategoryMock = categoryMock[menuStatus].map((el, index) => (
    <BoardHeaderItem key={index}>{el}</BoardHeaderItem>
  ));

  return <BoardHeaderList>{mapedCategoryMock}</BoardHeaderList>;
};

export default Category;
