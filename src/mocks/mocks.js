export const categoryMock = {
  prices: ['카테고리', '상품명', '가격'],
  users: ['이름', '이메일', '전화번호', '주소', '지갑', '가입 일시'],
  partners: ['이름', '전화번호', '주소', '사업번호', '승인 여부', '가입 일시'],
  orders: [
    '주문번호',
    '주문명',
    '이메일',
    '전화번호',
    '파트너',
    '파트너 전화번호',
    '주소',
    '상태',
    '픽업',
  ],
};

export const menuMock = [
  { text: '가격표 관리', category: 'prices' },
  { text: '유저 관리', category: 'users' },
  { text: '파트너 관리', category: 'partners' },
  { text: '이용 내역', category: 'orders' },
];

export const historyCategoryMock = ['상품명', '가격', '수량', '맡긴 날짜'];
