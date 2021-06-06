import { getLocalStorage, setLocalStorage } from 'common/util/localStorage';
import { IData, LAST_UPDATE_TITLE } from 'entity/IData';

export const sampleData: IData = {
  pageTitle: 'TODOリスト',
  pageDescription: [
    '普通のTODOリスト用途だけでなく、部屋の片づけ、持ち物管理など、使い方次第で色々使えます',
    'カラムの数とタイトルはJSONを編集し再アップロードすることで変更可能',
    'ページタイトルと説明文もJSONで管理しているので編集可能',
    '「最終更新日」はヘッダー名称（colName）に1か所だけ設定してください、位置は移動可能',
  ],
  colName: ['item1', 'item2', LAST_UPDATE_TITLE],
  rows: [
    ['a_itemName11', 'c_itemName21', '2021/06/01 11:22:33'],
    ['b_itemName12', 'a_itemName22', '2021/06/01 11:22:34'],
    ['c_itemName13', 'b_itemName23', '2021/06/01 11:22:35'],
  ],
  editRowIndex: -1,
};

export const sampleData2: IData = {
  pageTitle: '持ち物リスト',
  pageDescription: [],
  colName: ['大分類', '中分類', '小分類', 'メモ', LAST_UPDATE_TITLE],
  rows: [
    ['PCデスク', '卓上', '27inch FullHD Display', '', '2021/06/01 11:22:33'],
    ['PCデスク', '卓上', 'PS4', '下段に移動する', '2021/06/01 11:22:33'],
    ['PCデスク', '下段', 'デスクトップPC', '', '2021/06/01 11:22:33'],
    ['PCデスク', '下段', 'BOSEスーパーウーファー', '', '2021/06/01 11:22:33'],
    ['PCデスク', '下段', 'かご', '要整理', '2021/06/01 11:22:33'],
  ],
  editRowIndex: -1,
};

export const getDefaultData = (): IData => {
  const localData = getLocalStorage();
  if (localData) return localData;

  // 初期データはローカルストレージに入れる
  setLocalStorage(sampleData);

  return sampleData;
};
