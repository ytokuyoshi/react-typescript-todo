import { ReactElement, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { buildEmptyStringList } from 'common/util/array';
import { LAST_UPDATE_TITLE } from 'entity/IData';

const useStyles = makeStyles(() => ({
  input: {
    margin: 5,
  },
  formControl: {
    minWidth: 120,
  },
}));

const CustomFormDialog = (props: {
  isOpen: boolean;
  onClickCancel: () => void;
  onClickOK: (row: string[]) => void;
  title: string;
  description?: string;
  colName: string[];
  editRow?: string[];
}): ReactElement => {
  const { isOpen, onClickCancel, onClickOK, title, description, colName, editRow } = props;
  const classes = useStyles();
  const [inputData, setInputData] = useState<string[]>(buildEmptyStringList(colName?.length));

  // inputDataはダイアログの開閉時に初期化する
  useEffect(() => {
    if (!colName) return;

    // Edit用データがそろっている場合はそちらを画面に反映する
    // 最終更新日は除外する
    if (editRow && Array.isArray(editRow)) {
      const tempRow = [];
      for (let index = 0; index < colName.length; index++) {
        const title = colName[index];
        if (title !== LAST_UPDATE_TITLE) {
          tempRow.push(editRow[index]);
        }
      }
      setInputData(tempRow);
    } else {
      let adjustLength = 0;
      if (colName.includes(LAST_UPDATE_TITLE)) {
        adjustLength = 1;
      }
      setInputData(buildEmptyStringList(colName.length - adjustLength));
    }
  }, [isOpen, colName, editRow]);

  const handleClickOk = (): void => {
    onClickOK(inputData);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChange = (e: any, index: number): void => {
    const value: string = e.target?.value ?? '';
    const tempData = [...inputData];
    tempData[index] = value;
    setInputData(tempData);
  };

  return (
    <div>
      <Dialog maxWidth="lg" open={isOpen} onClose={onClickCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {description ? <DialogContentText id="alert-dialog-description">{description}</DialogContentText> : null}
          {Array.isArray(colName) &&
            colName.map((col: string, index: number) => {
              // 最終更新日は除外する
              if (col === LAST_UPDATE_TITLE) return null;
              return (
                <TextField
                  key={index}
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  id={col}
                  label={col}
                  type=""
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e: any): void => handleOnChange(e, index)}
                  value={inputData[index]}
                />
              );
            })}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickCancel} variant="contained" color="default">
            キャンセル
          </Button>
          <Button onClick={handleClickOk} variant="contained" color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomFormDialog;
