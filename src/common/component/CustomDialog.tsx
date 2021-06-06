import { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CustomDialog = (props: {
  isOpen: boolean;
  onClickCancel: () => void;
  onClickOK: () => void;
  title: string;
  description: string;
}): ReactElement => {
  const { isOpen, onClickCancel, onClickOK, title, description } = props;
  return (
    <>
      <Dialog open={isOpen} onClose={onClickCancel} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickCancel} variant="contained" color="default">
            キャンセル
          </Button>
          <Button onClick={onClickOK} variant="contained" color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomDialog;
