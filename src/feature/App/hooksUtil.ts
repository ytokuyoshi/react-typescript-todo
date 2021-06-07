import moment from 'moment';
import { LAST_UPDATE_TITLE } from 'entity/IData';

// 最終更新日を追加する
export const addLastUpdateDate = (colName: string[], row: string[]): string[] => {
  const tempRow: string[] = [];
  let rowIndex = 0;
  for (let index = 0; index < colName.length; index++) {
    const title = colName[index];
    if (title === LAST_UPDATE_TITLE) {
      // const now = `${moment().format('YYYY/MM/DD HH:mm:SS')}`;
      const now = `${moment().format('YYYY/MM/DD HH:mm')}`;
      tempRow.push(now);
    } else {
      tempRow.push(row[rowIndex]);
      rowIndex++;
    }
  }
  return tempRow;
};
