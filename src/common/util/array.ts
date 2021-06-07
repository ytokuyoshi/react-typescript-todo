// 単一項目のソート
export const sort = (rows: string[][], rowIndex: number, isOrderAsc: boolean): string[][] => {
  return rows.sort((a, b) => {
    return compare(a[rowIndex].toLowerCase(), b[rowIndex].toLowerCase(), isOrderAsc);
  });
};

// 上位項目も含めた文字列連結によるソート
export const sortUsingUpperItems = (rows: string[][], rowIndex: number, isOrderAsc: boolean): string[][] => {
  const divider = '$$$';
  return rows.sort((a, b) => {
    // 指定の位置を文字比較でソートする
    let x = '';
    let y = '';
    for (let index = 0; index <= rowIndex; index++) {
      x = `${x}${divider}${a[index]}`;
      y = `${y}${divider}${b[index]}`;
    }
    return compare(x.toLowerCase(), y.toLowerCase(), isOrderAsc);
  });
};

const compare = (a: string, b: string, isOrderAsc: boolean): number => {
  if (isOrderAsc) {
    return a < b ? -1 : 1;
  } else {
    return a > b ? -1 : 1;
  }
};

export const buildEmptyStringList = (length: number): string[] => {
  const list: string[] = [];
  for (let index = 0; index < length; index++) {
    list.push('');
  }
  return list;
};
