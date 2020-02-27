import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import TaskItem from '../TaskItem';
import styles from './styles';
class TaskList extends Component {
	render() {
		var { classes } = this.props;
		return (
			<Box component="div" mt={2}>
        <Grid container className={classes.root} spacing={1}>
        	<TaskItem />
        </Grid>
      </Box>
		);
	}
}
export default withStyles(styles)(TaskList);