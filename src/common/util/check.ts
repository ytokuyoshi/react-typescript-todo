// 数字チェック
export const isNumeric = (text: string): boolean => {
  if (!text) return false;
  if (text === '') return false;
  if (text.match(/^[0-9]+$/)) return true;
  return false;
};

// 数字チェック：ブランク許容
export const isNumericOrBlank = (text: string): boolean => {
  if (!text) return false;
  if (text === '') return true;
  if (text.match(/^[0-9]+$/)) return true;
  return false;
};
