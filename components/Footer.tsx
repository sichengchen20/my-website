import React from 'react';
import { createStyles, Container, Anchor, Group, ActionIcon, Center } from '@mantine/core';
import { BrandYoutube, BrandTwitter, BrandGithub } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({

  section: {
    backgroundColor: theme.colors.dark[6],
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.lg,
    borderBottom: '1px solid #3a3a3a',
  },

  links: {
    marginLeft: 10,
    marginRight: 10,
  },

  text: {
    color: '#6c757d',
    paddingBottom: 10
  }
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.section}>
      <div>
        <Container className={classes.inner}>
          <Center>
            <Group spacing={0} position="right" noWrap>
              <a>
                <ActionIcon variant='transparent' className={classes.links} size="lg">
                  <BrandTwitter size={25} />
                </ActionIcon>
              </a>
              <a>
                <ActionIcon variant='transparent' className={classes.links} size="lg">
                  <BrandYoutube size={25} />
                </ActionIcon>
              </a>
              <a target={'_blank'} rel="noreferrer" href={'https://github.com/StrykerPX'}>
                <ActionIcon variant='transparent' className={classes.links} size="lg">
                  <BrandGithub size={25} />
                </ActionIcon>
              </a>
            </Group>
          </Center>
        </Container>
      </div>
      <div className={classes.text}>
        <Center>
          <p>© 2022 Sicheng Chen. All rights reserved.</p>
        </Center>
      </div>
    </div>
  );
}