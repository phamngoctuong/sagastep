import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
class TaskItem extends Component {
  render() {
  	var { classes } = this.props;
    return (
      <Grid item md={4}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item lg={6}>
                <Typography component="h2" className={classes.title} color="textSecondary">
                  PLAYGAME
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography component="h3" className={classes.title} color="textSecondary">
                  START
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography className={classes.title} color="textSecondary">
                  Play with my Friend
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.CardAction}>
            <Button variant="contained" size="small" color="primary"><EditIcon />&nbsp;Edit Task</Button>
            <Button variant="contained" size="small" color="secondary"><EditIcon />&nbsp;Delete Task</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
export default withStyles(styles)(TaskItem);