import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import TaskList from '../../components/TaskList';
class TaskBoard extends Component {
	openTask = () => {
		this.props.openTask()
	}
  render() {
    return (
      <Container maxWidth="lg">
        <div className="App">
          <Button variant="contained" color="primary" onClick={this.openTask}><AddIcon/>&nbsp;Thêm công việc mới</Button>
          <TaskList/>
        </div>
      </Container>
    );
  }
}
export default withStyles(styles)(TaskBoard);