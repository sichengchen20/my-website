import { createStyles, Header, Menu, Group, Center, Burger, Container, Image, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from "react";
import { useState } from "react";
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: 'transparent',
    WebkitTransition: 'all 0.2s',
    position: 'fixed',
    borderBottom: 0,
  },

  active: {
    backgroundColor: '#396dbc',
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#3064b2',
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function HeaderMenu({ links }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(1);
  const { classes, cx } = useStyles();

  useEffect(() => {
    window.onscroll = function(){
      var top = window.scrollY;

      if(top >= 200){
        setActive(0)
      }else{
        setActive(1)
      }
    }
  }, [])

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.link}
      >
        <a className={classes.link}>{link.label}</a>
      </Link>
    );
  });

  return (
    <Header className={cx(classes.header, { [classes.active]: active === 0 })} height={56} mb={120}>
      <Container>
        <div className={classes.inner}>
            <Link href="/">
              <div>
                <Image
                  width={37}
                  src="logo.svg"
                  alt="Logo"
                />
              </div>
            </Link>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" color='#ffffff' />
        </div>
      </Container>
    </Header>
  );
}