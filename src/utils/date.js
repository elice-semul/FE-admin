export const getKoreanDateByDate = (date) => {
  const myDate = new Date(date);

  return `${myDate.getFullYear()}년 ${myDate.getMonth() + 1}월 ${myDate.getDate()}일`;
};
