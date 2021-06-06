import { ReactElement } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddCircleOutline';

import CustomTable from 'common/component/CustomTable';
import CustomDialog from 'common/component/CustomDialog';
import CustomFormDialog from 'common/component/CustomFormDialog';
import CusstomToggleButtons from 'common/component/CusstomToggleButtons';

import { useStyles } from './styles';
import { useResource } from './hooks';

const App = (): ReactElement => {
  const {
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
  } = useResource();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">{data.pageTitle}</Typography>
      {Array.isArray(data.pageDescription) &&
        data.pageDescription.map((description, index) => (
          <Typography key={index} variant="body1">
            - {description}
          </Typography>
        ))}
      <br />
      <input className={classes.button} type="file" accept=".json" onChange={(e): void => handleChangeFile(e)} />
      <Button className={classes.button} variant="contained" color="default" onClick={(): void => handleDownload(data)}>
        ダウンロード
      </Button>
      <Button className={classes.button} variant="contained" color="default" onClick={(): void => handleReset(1)}>
        サンプルデータ読込
      </Button>
      <Button className={classes.button} variant="contained" color="default" onClick={(): void => handleReset(2)}>
        サンプルデータ読込2
      </Button>
      <CusstomToggleButtons onChange={handleChangeDeleteToggle} />
      <AddIcon className={classes.icon} color="action" fontSize={'large'} onClick={handleFormDialogInsOpen} />
      <Typography variant="body1" color="error">
        {errorMsg}
      </Typography>
      <Typography variant="body1">{infoMsg}</Typography>
      <br />
      <CustomTable
        header={data.colName}
        rows={data.rows}
        handleHeaderClick={handleHeaderClick}
        handleRowDeleteClick={handleRowDeleteClick}
        handleRowCopyClick={handleRowCopyClick}
        handleRowClick={handleRowClick}
        orderColName={orderColName}
        isOrderAsc={isOrderAsc}
      />
      <CustomDialog
        isOpen={isOpenConfirmDialog}
        onClickCancel={handleDialogCancel}
        onClickOK={handleDialogOK}
        title={'注意'}
        description={'サンプルデータ読込を実行するとデータは初期化されます。実行する場合はOKを押してください。'}
      />
      <CustomFormDialog
        isOpen={isOpenFormDialogIns}
        onClickCancel={handleFormDialogInsCancel}
        onClickOK={(row: string[]): void => handleFormDialogInsOK(row)}
        title={'データ登録'}
        description={''}
        colName={data.colName}
      />
      <CustomFormDialog
        isOpen={isOpenFormDialogUpd}
        onClickCancel={handleFormDialogUpdCancel}
        onClickOK={(row: string[]): void => handleFormDialogUpdOK(row)}
        title={'データ更新'}
        description={''}
        colName={data.colName}
        editRow={data.rows[data.editRowIndex]}
      />
    </div>
  );
};

export default App;
