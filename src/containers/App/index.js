import React, { Component, } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import TaskBoard from '../TaskBoard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import configureStore from '../../redux/configureStore';
import { Provider } from 'react-redux';
var store = configureStore();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  openTask = () => {
    this.setState({
      open: true
    });
  }
  handleClose = () => {
   this.setState({
      open: false
    }); 
  }
  render() {
    var { classes } = this.props;
    var {open} = this.state;
    return (
      <React.Fragment>
        <Provider store={store}>
          <TaskBoard openTask = {this.openTask}/>
          <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title">
              Thêm công việc mới
            </DialogTitle>
            <DialogContent dividers>
              <Grid container>
                <Grid item lg={12}>
                  <TextField id="standard-helperText" fullWidth label="Name" className={classes.textfield} />
                </Grid>
                <Grid item lg={12}>
                  <TextField id="standard-multiline-flexible" fullWidth className={classes.textfield} label="Multiline" multiline rowsMax="4"/>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" autoFocus color="secondary" onClick={this.handleClose}>Cancel</Button>
              <Button variant="contained" autoFocus color="primary" onClick={this.handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
        </Provider>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(App);