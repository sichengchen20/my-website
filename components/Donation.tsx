import React from 'react';
import { createStyles, Center, Container, Button } from '@mantine/core';

const useStyles = createStyles(() => ({

  container: {
    justifyContent: 'center',
  },

  title: {
    color: '#ffffff',
    marginBottom: 0,
    marginTop: 0,
  },

  text: {
    color: '#ffffff',
    textAlign: 'center'
  }
}));

export function Donation() {
  const { classes } = useStyles();

  return (
    <>
      <Center className='background'>
        <Container>
          <Center><h2 className={classes.title}>Support</h2></Center>
          <p className={classes.text}>Your contribution will help me survive another day.</p>
          <a target={'_blank'} rel={'noreferrer'} href={'https://www.paypal.com/paypalme/StrykerPX2'}><Center><Button variant="outline">SUPPORT ME BY DONATING</Button></Center></a>
        </Container>
      </Center>
    </>
  );
}