import { useState, useEffect, useCallback } from 'react';
import { getTodo } from 'api/sample';
import { SORT_MARK_ASC, SORT_MARK_DESC } from 'common/component/CustomTable';
import { downloadJson } from 'common/util/download';
import { setLocalStorage } from 'common/util/localStorage';
import { sort } from 'common/util/array';
import { jsonText2obj } from 'common/util/json';
import { IData } from 'entity/IData';
import { sampleData, sampleData2, getDefaultData } from 'entity/sampleData';
import { addLastUpdateDate } from './hooksUtil';
import { IAppResources } from './IAppResources';
import { MSG_I_001, MSG_E_001, MSG_E_002, MSG_E_003 } from './messageConst';

export const useResource = (): IAppResources => {
  useEffect(() => {
    // API sample:このデータは利用していません。実装サンプルです
    getTodo();
  }, []);

  const [data, setData] = useState<IData>(getDefaultData());
  const [dataNumber, setDataNumber] = useState<number>(1);
  const [orderColName, setOrderColName] = useState<string>('');
  const [isOrderAsc, setIsOrderAsc] = useState<boolean>(true);
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState<boolean>(false);
  const [isOpenFormDialogIns, setIsOpenFormDialogIns] = useState<boolean>(false);
  const [isOpenFormDialogUpd, setIsOpenFormDialogUpd] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [infoMsg, setInfoMsg] = useState<string>('');
  const [isLocked, setIsLocked] = useState<boolean>(true);

  const clearMsg = (): void => {
    setInfoMsg('');
    setErrorMsg('');
  };

  // ローカルストレージとuseStateのデータを更新する
  const setLocalStorageAndStateData = useCallback((newData: IData): void => {
    setLocalStorage(newData);
    setData(newData);
  }, []);

  // 新しいRowsデータに更新する
  const setNewRows = (newRows: string[][]): void => {
    // ポインタを書き換えるためスプレッド演算子でコピーする
    const newData = { ...data };
    newData.rows = [...newRows];
    setLocalStorageAndStateData(newData);
  };

  // 1-1.ヘッダークリック
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleHeaderClick = (e: any): void => {
    clearMsg();
    // ソートマークは判定で邪魔なので置換して消しておく
    const colName = (e.target?.textContent ?? '').replace(SORT_MARK_ASC, '').replace(SORT_MARK_DESC, '');
    const index = data.colName.indexOf(colName);
    let isOrderAscTemp = true;
    if (orderColName === colName) {
      if (isOrderAsc) {
        isOrderAscTemp = false;
      }
    }
    const sortedRows = sort(data.rows, index, isOrderAscTemp);
    setNewRows(sortedRows);

    // 次回、逆順でソートを行うために設定しておく
    setOrderColName(colName);
    setIsOrderAsc(isOrderAscTemp);
  };

  // 1-2.行の削除ボタンクリック
  const handleRowDeleteClick = (rowIndex: number): void => {
    clearMsg();

    // 削除ロック中は何もしない
    if (isLocked) {
      setErrorMsg(MSG_E_003);
      return;
    }

    const newRows: string[][] = [];
    for (let index = 0; index < data.rows.length; index++) {
      // 削除行以外をコピーしてPushする
      if (index !== rowIndex) {
        const row = data.rows[index];
        newRows.push([...row]);
      }
    }
    setNewRows(newRows);
  };

  // 1-3.行のコピーボタンクリック
  const handleRowCopyClick = (rowIndex: number): void => {
    clearMsg();
    const newRows: string[][] = [];
    for (let index = 0; index < data.rows.length; index++) {
      const row = data.rows[index];
      newRows.push([...row]);
      // コピー行は2回Pushする
      if (index === rowIndex) {
        newRows.push([...row]);
      }
    }
    setNewRows(newRows);
  };

  // 1-4.行クリック=Edit
  const handleRowClick = (rowIndex: number): void => {
    clearMsg();
    // Edit対象行をセットしダイアログを開く
    setData({ ...data, editRowIndex: rowIndex });
    setIsOpenFormDialogUpd(true);
  };

  // 2-1.削除ロック
  const handleChangeDeleteToggle = (isLocked: boolean): void => {
    clearMsg();
    setIsLocked(isLocked);
  };

  // 2-2.ダウンロード
  const handleDownload = (data: IData): void => {
    clearMsg();
    downloadJson(JSON.stringify(data));
  };

  // 2-3-1.サンプルデータ読込
  const handleReset = (dataNumber: number): void => {
    clearMsg();
    // 確認ダイアログのOK時に参照するため、先に設定しておく
    setDataNumber(dataNumber);

    setIsOpenConfirmDialog(true);
  };

  // 2-3-2.サンプルデータ読込 cancel
  const handleDialogCancel = (): void => {
    clearMsg();
    setIsOpenConfirmDialog(false);
  };

  // 2-3-3.サンプルデータ読込 OK
  const handleDialogOK = useCallback((): void => {
    clearMsg();
    // ボタン押下時に指定したデータをロードする
    switch (dataNumber) {
      case 2:
        setLocalStorageAndStateData(sampleData2);
        break;
      default:
        setLocalStorageAndStateData(sampleData);
        break;
    }
    // ソート順をリセットする
    setOrderColName('');
    setIsOrderAsc(true);
    // ダイアログを閉じる
    setIsOpenConfirmDialog(false);
  }, [dataNumber, setIsOpenConfirmDialog, setIsOrderAsc, setLocalStorageAndStateData, setOrderColName]);

  // 2-4-1i.登録ダイアログ open
  const handleFormDialogInsOpen = (): void => {
    clearMsg();
    setIsOpenFormDialogIns(true);
  };

  // 2-4-2i.登録ダイアログ cancel
  const handleFormDialogInsCancel = (): void => {
    clearMsg();
    setIsOpenFormDialogIns(false);
  };

  // 2-4-3i.登録ダイアログ OK
  const handleFormDialogInsOK = (row: string[]): void => {
    clearMsg();
    const newRows: string[][] = [];

    // 最終更新日を追加する
    const tempRow = addLastUpdateDate(data.colName, row);

    // 新規データは先頭に追加する
    newRows.push(tempRow);

    for (let index = 0; index < data.rows.length; index++) {
      const row = data.rows[index];
      newRows.push([...row]);
    }
    setNewRows(newRows);
    setIsOpenFormDialogIns(false);
  };

  // 2-4-1u.更新ダイアログ open
  // const handleFormDialogUpdOpen = (): void => {
  //   clearMsg();
  //   setIsOpenFormDialogUpd(true);
  // };

  // 2-4-2u.更新ダイアログ cancel
  const handleFormDialogUpdCancel = (): void => {
    clearMsg();
    setIsOpenFormDialogUpd(false);
  };

  // 2-4-3u.更新ダイアログ OK
  const handleFormDialogUpdOK = (row: string[]): void => {
    clearMsg();
    const newRows: string[][] = [];
    for (let index = 0; index < data.rows.length; index++) {
      if (index === data.editRowIndex) {
        // 最終更新日を追加する
        const tempRow = addLastUpdateDate(data.colName, row);
        newRows.push([...tempRow]);
      } else {
        const rowTemp = data.rows[index];
        newRows.push([...rowTemp]);
      }
    }
    setNewRows(newRows);
    setIsOpenFormDialogUpd(false);
  };

  // 2-5-1.upload
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFile = (e: any): void => {
    const content = e.target.result;
    const obj: IData = jsonText2obj(content);
    if (obj) {
      // JSONに変換可能なものだけインポートする
      if (Array.isArray(obj.rows) && obj.rows.length > 0) {
        // 厳密な型チェックは行わないが、ゼロ件データは除外する
        setLocalStorageAndStateData(obj);
        setInfoMsg(MSG_I_001);
      } else {
        setErrorMsg(MSG_E_001);
      }
    } else {
      setErrorMsg(MSG_E_002);
    }
  };

  // 2-5-2.upload
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeFile = (e: any): void => {
    clearMsg();
    try {
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = handleFile;
      fileReader.readAsText(file);
    } catch (error) {
      // ファイル選択を連続で実行、キャンセルを繰り返すとエラーが発生する
      // console.log('handleChangeFile error', error);
    }
  };

  return {
    data,
    orderColName,
    isOrderAsc,
    isOpenConfirmDialog,
    isOpenFormDialogIns,
    isOpenFormDialogUpd,
    errorMsg,
    infoMsg,
    handleHeaderClick,
    handleRowDeleteClick,
    handleRowCopyClick,
    handleRowClick,
    handleDownload,
    handleReset,
    handleDialogCancel,
    handleDialogOK,
    handleFormDialogInsOpen,
    handleFormDialogInsCancel,
    handleFormDialogInsOK,
    handleFormDialogUpdCancel,
    handleFormDialogUpdOK,
    handleChangeFile,
    handleChangeDeleteToggle,
  };
};
