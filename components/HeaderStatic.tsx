import { createStyles, Header, Menu, Group, Center, Burger, Container, Image, rem, Drawer, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: '#396dbc',
    WebkitTransition: 'all 0.2s',
    position: 'fixed',
    borderBottom: 0,
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

  hiddenDesktop: {
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

  burg_link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[8],
    fontSize: theme.fontSizes.sm,
    fontWeight: 'bold',

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#3064b2',
      color: "#ffffff"
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function HeaderStatic({ links }: HeaderSearchProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  
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
    <Header className={classes.header} height={56} mb={120}>
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
      <Drawer
        opened={opened}
        onClose={close}
        size={'100%'}
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.3'} />
        <Link href="/">
          <a className={classes.burg_link}>
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a className={classes.burg_link}>
            Projects
          </a>
        </Link>
        <Link href="/resume">
          <a className={classes.burg_link}>
            Resume
          </a>
        </Link>
        <Link href="/contact">
          <a className={classes.burg_link}>
            Contact
          </a>
        </Link>
      </Drawer>
    </Header>
  );
}