import { ReactElement } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

export const SORT_MARK_ASC = ' ▲';
export const SORT_MARK_DESC = ' ▼';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
  },
  icon: {
    marginLeft: 5,
  },
}));

const Row = (props: {
  row: string[];
  rowIndex?: number;
  isHeader?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleHeaderClick?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleRowDeleteClick?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleRowCopyClick?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleRowClick?: any;
  orderColName?: string;
  isOrderAsc?: boolean;
}): ReactElement => {
  const { row, rowIndex, isHeader, handleHeaderClick, handleRowDeleteClick, handleRowCopyClick, handleRowClick, orderColName, isOrderAsc } = props;
  const classes = useStyles();
  const handleClickDummy = (): void => {
    // 未設定の場合、何もしないためのダミーメソッド
  };
  const orderMark = isOrderAsc ? SORT_MARK_ASC : SORT_MARK_DESC;
  return (
    <>
      <TableRow>
        {isHeader ? (
          <StyledTableCell align="right" key={-100} onClick={handleClickDummy}>
            {'#'}
          </StyledTableCell>
        ) : (
          <TableCell align="right" key={-100}>
            {(rowIndex ?? 0) + 1}
          </TableCell>
        )}
        {Array.isArray(row) &&
          row.map((item, index) => {
            return isHeader ? (
              // header
              <StyledTableCell align="left" key={index} onClick={handleHeaderClick ?? handleClickDummy}>
                {item}
                {item === (orderColName ?? '') ? orderMark : ''}
              </StyledTableCell>
            ) : (
              // detail
              <TableCell align="left" key={index} onClick={handleRowClick ? (): void => handleRowClick(rowIndex ?? -1) : handleClickDummy}>
                {item}
              </TableCell>
            );
          })}
        {isHeader ? (
          <StyledTableCell align="center" key={-1} onClick={handleClickDummy}>
            {'コピー / 削除'}
          </StyledTableCell>
        ) : (
          <>
            <TableCell align="center" key={-1}>
              <Tooltip title="コピー">
                <FileCopyOutlinedIcon
                  className={classes.icon}
                  color="action"
                  onClick={handleRowCopyClick ? (): void => handleRowCopyClick(rowIndex ?? -1) : handleClickDummy}
                />
              </Tooltip>
              <Tooltip title="削除">
                <DeleteIcon
                  className={classes.icon}
                  color="action"
                  onClick={handleRowDeleteClick ? (): void => handleRowDeleteClick(rowIndex ?? -1) : handleClickDummy}
                />
              </Tooltip>
            </TableCell>
          </>
        )}
      </TableRow>
    </>
  );
};

const CustomTable = (props: {
  header: string[];
  rows: string[][];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleHeaderClick: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleRowDeleteClick: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleRowCopyClick: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleRowClick: any;
  orderColName: string;
  isOrderAsc: boolean;
}): ReactElement => {
  const { header, rows, handleHeaderClick, handleRowDeleteClick, handleRowCopyClick, handleRowClick, orderColName, isOrderAsc } = props;
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <Row row={header} isHeader={true} handleHeaderClick={handleHeaderClick} orderColName={orderColName} isOrderAsc={isOrderAsc} />
          </TableHead>
          <TableBody>
            {Array.isArray(rows) &&
              rows.map((row, index) => {
                return (
                  <Row
                    row={row}
                    key={index}
                    rowIndex={index}
                    handleRowDeleteClick={handleRowDeleteClick}
                    handleRowCopyClick={handleRowCopyClick}
                    handleRowClick={handleRowClick}
                  />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomTable;
