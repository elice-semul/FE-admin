import { Nav, MenuButton } from './styled';

import { menuMock } from '@/mocks/mocks';

const Menu = ({ onSetMenuStatus }) => {
  const handleMenuButtonClick = (category) => {
    onSetMenuStatus(category);
  };

  const mapedMenuMock = menuMock.map(({ text, category }, index) => (
    <MenuButton key={index} type="button" onClick={() => handleMenuButtonClick(category)}>
      {text}
    </MenuButton>
  ));

  return <Nav>{mapedMenuMock}</Nav>;
};

export default Menu;
