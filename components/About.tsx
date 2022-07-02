import React from 'react';
import { 
  createStyles,
  MediaQuery,
  Container,
  CSSObject,
  Center,
  Image,
  Grid,
  Text,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({

  section: {
    backgroundColor: theme.colors.gray[0]
  },

  container: {
    paddingTop: 100,
    paddingBottom: 25,
  },

  profile: {
    paddingTop: 50
  },

  introduction: {
    paddingRight: 70
  },

  text: {
    color: theme.colors.dark[3],
  },
}));

export function About() {
  const { classes } = useStyles();
  const profileStyle: CSSObject = {
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 25
  }

  return (
    <>
      <div className={classes.section}>
        <Container className={classes.container}>
          <Grid grow justify='center'>
            <Grid.Col md={6} lg={3}>
              <Center>
                <Image className={classes.profile}
                  width={150}
                  src="profile.png"
                  alt="Profile"
                  radius={150}
                  />
              </Center>
            </Grid.Col>
            <MediaQuery smallerThan={'md'} styles={profileStyle}><Grid.Col className={classes.introduction} md={6} lg={6}>
              <h2>Introduction</h2>
              <Text align='justify' className={classes.text}>
                <p>I am an undergraduate junior at Kansas State University studying Computer Science.
                  Although there is nothing that I particularly excel at aside from coding, I am willing to dedicate my time towards fixing any flaws that I may have.</p>
                <p>I spend the majority of my free time on personal projects, trying to improve upon what I’ve learned throughout the years.</p>
              </Text>
            </Grid.Col></MediaQuery>
          </Grid>
        </Container>
      </div>  
    </>
  );
}