import { BoardRow } from '@/components/ui';
import { BoardContainer, BoardColumn } from '@/styles/board';

const PriceBoard = ({
  data,
  status,
  onSetType,
  onUpdate: handleUpdate,
  onRemove: handleRemove,
}) => {
  const mapedData = data.map(({ id, category, name, price, isApprove }) => {
    return (
      <BoardRow
        key={id}
        {...{ id }}
        {...{ status }}
        {...{ category }}
        {...{ name }}
        {...{ price }}
        {...{ isApprove }}
        {...{ onSetType }}
        onUpdate={handleUpdate}
        onRemove={handleRemove}
      >
        <BoardColumn>{category}</BoardColumn>
        <BoardColumn>{name}</BoardColumn>
        <BoardColumn>{price}</BoardColumn>
      </BoardRow>
    );
  });

  return <BoardContainer>{mapedData}</BoardContainer>;
};

export default PriceBoard;
