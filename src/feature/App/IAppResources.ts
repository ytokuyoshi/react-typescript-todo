import { IData } from 'entity/IData';

export interface IAppResources {
  data: IData;
  orderColName: string;
  isOrderAsc: boolean;
  isOpenConfirmDialog: boolean;
  isOpenFormDialogIns: boolean;
  isOpenFormDialogUpd: boolean;
  errorMsg: string;
  infoMsg: string;
  isHeaderVisible: () => boolean;
  setIsHeaderVisible: (isHeaderVisible: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleHeaderClick: (e: any) => void;
  handleRowDeleteClick: (rowIndex: number) => void;
  handleRowCopyClick: (rowIndex: number) => void;
  handleRowClick: (rowIndex: number) => void;
  handleDownload: (data: IData) => void;
  handleReset: (dataNumber: number) => void;
  handleDialogCancel: () => void;
  handleDialogOK: () => void;
  handleFormDialogInsOpen: () => void;
  handleFormDialogInsCancel: () => void;
  handleFormDialogInsOK: (row: string[]) => void;
  handleFormDialogUpdCancel: () => void;
  handleFormDialogUpdOK: (row: string[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChangeFile: (e: any) => void;
  handleChangeDeleteToggle: (isLocked: boolean) => void;
}
