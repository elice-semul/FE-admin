import { BoardRow } from '@/components/ui';
import { BoardContainer, BoardColumn } from '@/styles/board';

const PriceBoard = ({
  data,
  status,
  onSetType,
  onUpdate: handleUpdate,
  onRemove: handleRemove,
}) => {
  const mapedData = data.map(({ id, category, name, price }) => {
    return (
      <BoardRow
        key={id}
        {...{ id }}
        {...{ status }}
        {...{ category }}
        {...{ name }}
        {...{ price }}
        {...{ onSetType }}
        onUpdate={handleUpdate}
        onRemove={handleRemove}
      >
        <BoardColumn>{category}</BoardColumn>
        <BoardColumn>{price}</BoardColumn>
        <BoardColumn>{name}</BoardColumn>
      </BoardRow>
    );
  });

  return <BoardContainer>{mapedData}</BoardContainer>;
};

export default PriceBoard;
