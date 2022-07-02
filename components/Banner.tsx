import React from 'react';
import {
  createStyles,
  Container,
  Center,
  Title
} from '@mantine/core';

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

  const { classes } = useStyles();

  return (
    <>
      <Center  className='banner'>
        <Container data-aos='fade-up'>
          <Title order={1} className={classes.title}>"Why am I here again?"</Title>
          <Center><Title order={5} className={classes.subtitle} >Sicheng Chen</Title></Center>
        </Container>
      </Center>
    </>
  );
}