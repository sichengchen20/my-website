import React from 'react';
import { createStyles, Center, Container, Grid, Text, Progress } from '@mantine/core';

const useStyles = createStyles((theme) => ({

  section: {
    backgroundColor: theme.colors.gray[0]
  },

  container: {
    paddingTop: 25,
    paddingBottom: 125,
  },

  title: {
    paddingBottom: 10,
  },

  text: {
    fontWeight: 'bold',
  },

  col: {
    marginLeft: 50,
    marginRight: 50,
  },

  prgress: {
    marginBottom: 10,
  }
}));

export function Skills() {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.section}>
        <Container className={classes.container}>
          <div>
            <Center><h2 className={classes.title}>Technical Skills</h2></Center>
            <Grid grow justify='center'>
              <Grid.Col span={4} className={classes.col}>
                <Text color={'gray'} className={classes.text}>C</Text>
                <div className="progress">
                  <div className="progress-bar" data-aos="bar-c" data-aos-duration="500" role="progressbar" data-aos-delay="50"></div>
                </div>
              </Grid.Col>
              <Grid.Col span={4} className={classes.col}>
                <Text color={'gray'} className={classes.text}>HTML</Text>
                <div className="progress">
                    <div className="progress-bar" data-aos="bar-html" data-aos-duration="500" role="progressbar" data-aos-delay="50"></div>
                </div>
              </Grid.Col>
            </Grid>
            <Grid grow justify='center'>
              <Grid.Col span={4} className={classes.col}>
              <Text color={'gray'} className={classes.text}>C#</Text>
              <div className="progress">
                <div className="progress-bar" data-aos="bar-cs" data-aos-duration="500" role="progressbar" data-aos-delay="50"></div>
              </div>
              </Grid.Col>
              <Grid.Col span={4} className={classes.col}>
                <Text color={'gray'} className={classes.text}>CSS</Text>
                <div className="progress">
                  <div className="progress-bar" data-aos="bar-css" data-aos-duration="500" role="progressbar" data-aos-delay="50"></div>
                </div>
              </Grid.Col>
            </Grid>
            <Grid grow justify='center'>
              <Grid.Col span={4} className={classes.col}>
              <Text color={'gray'} className={classes.text}>Java</Text>
              <div className="progress">
                <div className="progress-bar" data-aos="bar-java" data-aos-duration="500" role="progressbar" data-aos-delay="50"></div>
              </div>
              </Grid.Col>
              <Grid.Col span={4} className={classes.col}>
                <Text color={'gray'} className={classes.text}>Javascript</Text>
                <div className="progress">
                  <div className="progress-bar" data-aos="bar-javascript" data-aos-duration="500" role="progressbar" data-aos-delay="50"></div>
                </div>
              </Grid.Col>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}