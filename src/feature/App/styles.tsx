import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  icon: {
    verticalAlign: 'bottom',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    marginLeft: 0,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
  },
}));
