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
    paddingBottom: 100,
  },

  h2: {
    fontSize: '28px',
  },

  profile: {
    paddingTop: 50
  },

  introduction: {
    paddingRight: 70
  },

  text: {
    color: theme.colors.dark[3],
    fontSize: '16px',
    lineHeight: 2,
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
              <MediaQuery smallerThan={'md'} styles={profileStyle}>
                <Grid.Col className={classes.introduction} md={6} lg={6}>
                  <h2 className={classes.h2}>Introduction</h2>
                  <Text align='left' className={classes.text}>
                    <p>Hi, I&rsquo;m Sicheng Chen, A senior pursuing his degree in Computer Science at Kansas State University.
                    Throughout my academic journey, I&rsquo;ve had the opportunity to work on several personal and internship projects that honed my skills and expertise.
                    As graduation approaches, I hope to find new opportunities which can kickstart my career in the industry.</p>
                  </Text>
                </Grid.Col>
              </MediaQuery>
          </Grid>
        </Container>
      </div>  
    </>
  );
}