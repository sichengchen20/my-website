import React from 'react';
import { createStyles, Center, Container, Grid, Paper, Image, Text } from '@mantine/core';

const useStyles = createStyles(() => ({

  container: {
    marginTop: 100,
    paddingBottom: 150,
  },

  title: {
    paddingBottom: 10,
  },

  col: {
    margin: 5
  }

}));

export function Fe_Prjects() {

  const { classes } = useStyles();

  return (
    <>
      <div>
        <Container className={classes.container}>
          <Center><h2 className={classes.title}>Featured Projects</h2></Center>
          <Grid grow justify='center'>
            <Grid.Col data-aos='fade-up' md={6} lg={3} className={classes.col}>
              <a href={'https://github.com/StrykerPX/Chroot'}>
                <Paper shadow={'sm'} radius={'md'} p={'xl'}>
                  <Center>
                    <Image
                      src='res/projects/chroot.png'
                      width={75}
                      radius={5}
                    />
                  </Center>
                  <Center><h3>Chroot</h3></Center>
                  <Center><Text color={'dimmed'} align={'center'}>Discord bot with many tools and features to help you build your own sever!</Text></Center>
                </Paper>
              </a>
            </Grid.Col>
            <Grid.Col data-aos='fade-up' data-aos-delay={100} md={6} lg={3} className={classes.col}>
              <a href={'https://github.com/StrykerPX/Hash-Generator'}>
                <Paper shadow={'sm'} radius={'md'} p={'xl'}>
                  <Center><Image
                    src='res/projects/img_app.png'
                    width={75}
                    radius={5}
                  /></Center>
                  <Center><h3>Hash Genterator</h3></Center>
                  <Center><Text color={'dimmed'} align={'center'}>A test software that uses different algorithms to generate hash of an input.</Text></Center>
                </Paper>
              </a>
            </Grid.Col>
            <Grid.Col data-aos='fade-up' data-aos-delay={200} md={6} lg={3} className={classes.col}>
              <a href={'https://github.com/StrykerPX/File-Compression'}>
                <Paper shadow={'sm'} radius={'md'} p={'xl'}>
                  <Center><Image
                    src='res/projects/img_app.png'
                    width={75}
                    radius={5}
                  /></Center>
                  <Center><h3>File Compressor</h3></Center>
                  <Center><Text color={'dimmed'} align={'center'}>A test software that uses OutputStream class pakage to compress a given file.</Text></Center>
                </Paper>
              </a>
            </Grid.Col>
          </Grid>
        </Container>
      </div>  
    </>
  );
}