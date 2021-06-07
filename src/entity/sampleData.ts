import { getLocalStorage, setLocalStorage } from 'common/util/localStorage';
import { IData, IDataNullable, IDataNullable2IData, LAST_UPDATE_TITLE, MEMO } from 'entity/IData';

export const sampleData: IDataNullable = {
  pageTitle: 'TODOリスト',
  pageDescription: [
    '普通のTODOリスト用途だけでなく、部屋の片づけ、持ち物管理など、使い方次第で色々使えます',
    'カラムの数とタイトルはJSONを編集し再アップロードすることで変更可能',
    'ページタイトルと説明文もJSONで管理しているので編集可能',
    '「最終更新日」はヘッダー名称（colName）に1か所だけ設定してください、位置は移動可能',
    '「メモ」「最終更新日」以外は上位項目を含めてソートします（「メモ」「最終更新日」は右端に配置する前提の仕様）',
  ],
  colName: ['item1', 'item2', LAST_UPDATE_TITLE],
  rows: [
    ['a_itemName11', 'c_itemName21', '2021/06/01 11:23'],
    ['b_itemName12', 'a_itemName22', '2021/06/01 11:24'],
    ['c_itemName13', 'b_itemName23', '2021/06/01 11:25'],
  ],
};

export const sampleData2: IDataNullable = {
  pageTitle: '持ち物リスト',
  pageDescription: [],
  colName: ['大分類', '中分類', '小分類', MEMO, LAST_UPDATE_TITLE],
  rows: [
    ['PCデスク', '卓上', '27inch FullHD Display', '', '2021/06/01 11:22'],
    ['PCデスク', '卓上', 'PS4', '下段に移動する', '2021/06/01 11:22'],
    ['PCデスク', '下段', 'デスクトップPC', '', '2021/06/01 11:22'],
    ['PCデスク', '下段', 'BOSEスーパーウーファー', '', '2021/06/01 11:22'],
    ['PCデスク', '下段', 'かご', '要整理', '2021/06/01 11:22'],
  ],
};

export const getDefaultData = (): IData => {
  const localData: IDataNullable = getLocalStorage();
  if (localData) return IDataNullable2IData(localData);

  // 初期データはローカルストレージに入れる
  setLocalStorage(sampleData);

  return IDataNullable2IData(sampleData);
};
