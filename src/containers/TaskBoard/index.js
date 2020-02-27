import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import TaskList from '../../components/TaskList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as taskActions from './../../actions/task';
class TaskBoard extends Component {
	openTask = () => {
		this.props.openTask()
	}
	componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
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
const mapStateToProps = state => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch)
  };
};
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(TaskBoard));