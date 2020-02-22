import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
class TaskBoard extends Component {
	openTask = () => {
		this.props.openTask()
	}
  render() {
  	var { classes } = this.props;
    return (
      <Container maxWidth="lg">
        <div className="App">
          <Button variant="contained" color="primary" onClick={this.openTask}><AddIcon/>&nbsp;Thêm công việc mới</Button>
          <Box component="div" mt={2}>
            <Grid container className={classes.root} spacing={1}>
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
              <Grid item md={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item lg={6}>
                        <Typography component="h2" className={classes.title} color="textSecondary">
                          PLAY FOOTBALL
                        </Typography>
                      </Grid>
                      <Grid item lg={6}>
                        <Typography component="h3" className={classes.title} color="textSecondary">
                          INPROCESS
                        </Typography>
                      </Grid>
                      <Grid item lg={12}>
                        <Typography className={classes.title} color="textSecondary">
                          Play with my Friends
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
              <Grid item md={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item lg={6}>
                        <Typography component="h2" className={classes.title} color="textSecondary">
                          SING A SONG
                        </Typography>
                      </Grid>
                      <Grid item lg={6}>
                        <Typography component="h3" className={classes.title} color="textSecondary">
                          COMPLATE
                        </Typography>
                      </Grid>
                      <Grid item lg={12}>
                        <Typography className={classes.title} color="textSecondary">
                          Sing with my Friends
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
            </Grid>
          </Box>
        </div>
      </Container>
    );
  }
}
export default withStyles(styles)(TaskBoard);