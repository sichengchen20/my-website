import React from 'react';
import { createStyles, Header, Menu, Group, Center, Burger, Drawer, Container, Image } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { useEffect } from "react";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: 'transparent',
    WebkitTransition: 'all 0.2s',
    position: 'fixed',
    borderBottom: 0,
  },

  active: {
    backgroundColor: '#4870ac',
  },

  inner: {
    height: 60,
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
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 'bold',

    '&:hover': {
      color: '#d3d3d3',
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  title: {
    color: theme.white,
    margin: 'auto',
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function HeaderMenuColored({ links }: HeaderSearchProps) {
  
  const [opened, toggleOpened] = useBooleanToggle(false);
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
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
              </Center>
            </a>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => toggleOpened()}
        sx={
          {
            textAlign: 'center'
          }
        }
        styles={{
          drawer: { backgroundColor: '#25262b' },
          closeButton: { 
            color: 'white',
            '&:hover':{
              color: 'gray',
              backgroundColor: '#25262b'
            }
          },
        }}
        position="right"
        padding="xl"
        size="sm"
      >
        {items}
      </Drawer>
      <Header height={60} className={cx(classes.header, { [classes.active]: active === 0 })}>
        
        <Container>
          <div className={classes.inner}>
            <a href="#">
              <div>
                <Image
                  width={37}
                  src="logo.svg"
                  alt="Logo"
                />
              </div>
            </a>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            <Burger
              opened={opened}
              onClick={() => toggleOpened()}
              className={classes.burger}
              size="sm"
              color="#fff"
            />
          </div>
        </Container>
      </Header>
    </>
  );
}