export const sort = (rows: string[][], index: number, isOrderAsc: boolean): string[][] => {
  return rows.sort((a, b) => {
    // 指定の位置を文字比較でソートする
    if (isOrderAsc) {
      return a[index].toLowerCase() < b[index].toLowerCase() ? -1 : 1;
    } else {
      return a[index].toLowerCase() > b[index].toLowerCase() ? -1 : 1;
    }
  });
};

export const buildEmptyStringList = (length: number): string[] => {
  const list: string[] = [];
  for (let index = 0; index < length; index++) {
    list.push('');
  }
  return list;
};
