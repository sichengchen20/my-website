import React from 'react';
import { createStyles, Container, Center,Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({

  text: {
    width: '100vw',
  },

  title: {
    textAlign: 'center',
    color: theme.white,
    marginBottom: 0,
  },

  subtitle: {
    textAlign: 'center',
    color: theme.white,
  }
}));

export function Banner() {

  const matches = useMediaQuery('(min-width: 410px)');
  const { classes } = useStyles();

  return (
    <>
      <Center  className='banner'>
        <Container data-aos='fade-up'>
          <Title order={matches? 1 : 2} className={classes.title}>&quot;Why am I here again?&quot;</Title>
          <Center><Title order={matches? 5 : 6} className={classes.subtitle} >Sicheng Chen</Title></Center>
        </Container>
      </Center>
    </>
  );
}