export interface IData {
  pageTitle: string;
  pageDescription: string[];
  colName: string[];
  rows: string[][];
  editRowIndex: number;
  isHeaderVisible: boolean;
}

export interface IDataNullable {
  pageTitle?: string;
  pageDescription?: string[];
  colName?: string[];
  rows?: string[][];
  editRowIndex?: number;
  isHeaderVisible?: boolean;
}

export const IDataNullable2IData = (data: IDataNullable): IData => {
  return {
    pageTitle: data.pageTitle ?? '',
    pageDescription: data.pageDescription ?? [],
    colName: data.colName ?? [],
    rows: data.rows ?? [],
    editRowIndex: data.editRowIndex ?? -1,
    isHeaderVisible: data.isHeaderVisible ?? true,
  };
};

export const LAST_UPDATE_TITLE = '最終更新日時';
export const MEMO = 'メモ';
