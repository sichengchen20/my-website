import React, { useRef } from 'react';
import { createStyles, Container, Center, Table, Image, Badge, Modal, Grid, Skeleton, ThemeIcon, rem, Group, Button, Text, RingProgress } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';

const useStyles = createStyles(() => ({

  background: {
    height: 'calc(100vh - 242px)'
  },

  list: {
    marginTop: 100,
    textAlign: 'center'
  },

  hidecols850: {
    '@media (max-width: 850px)': {
      display: 'none',
    },
  },
  hidecols650: {
    '@media (max-width: 650px)': {
      display: 'none',
    },
  },
  hidecols550: {
    '@media (max-width: 550px)': {
      display: 'none',
    },
  },

  label: {
    textAlign: 'center'
  }
}));

const elements = [
  { 
    image: 'res/projects/img_app.png',
    name: 'Map Viewer', language: 'C#',
    type: 'application', date: '10/16/2021',
    status: 'Complete',
    link: 'https://github.com/StrykerPX/Map-Viewer'
  },

  { 
    image: 'res/projects/img_app.png',
    name: 'Project Name', language: 'N/A',
    type: 'N/A', date: '01/01/2023',
    status: 'In progress',
    link: 'https://github.com/StrykerPX/File-Compression'
  },

  { 
    image: 'res/projects/chroot.png',
    name: 'Chroot',
    language: 'Javascript',
    type: 'Bot',
    date: '01/24/2022',
    status: 'In progress',
    link: 'https://github.com/StrykerPX/Chroot'
  },
];

export function ProjectList() {
  
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const rows = elements.map((element) => (
    
      <tr style={{cursor: 'pointer'}} key={element.name} onClick={open}>
        <td>
          <Center>
            <Image
              src={element.image}
              width={45}
              radius={5}
            />
          </Center>
        </td>
        <td style={{fontWeight: 'bold'}}>{element.name}</td>
        <td className={classes.hidecols850}>{element.language}</td>
        <td className={classes.hidecols650}>{element.type}</td>
        <td className={classes.hidecols550}>{element.date}</td>
        <td><Badge color={(element.status === 'Complete') ? 'teal' : 'blue'}>{element.status}</Badge></td>
      </tr>
  ));

  return (
    <>
      <Container className={classes.background}>
        <Modal opened={opened} onClose={close} size="55%" title=" " centered>
          <Center>
            <Carousel 
              maw={425}
              slideGap="xs"
              height={300}
              loop
              >
              <Carousel.Slide>
                <div>
                  <Image
                    src='res/projects/acm_website.png'
                    height={300}
                    width={425}
                    alt="Norway"
                  />
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div>
                    <Image
                      src='res/projects/acm_website.png'
                      height={300}
                      width={425}
                      alt="Norway"
                    />
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div>
                    <Image
                      src='res/projects/acm_website.png'
                      height={300}
                      width={425}
                      alt="Norway"
                    />
                </div>
              </Carousel.Slide>
            </Carousel>
          </Center>
          <Group position="apart" mt="md" mb="xs" px="lg">
            <Text size="lg" weight={600}>Test Project</Text>
            <Badge size="md" color={'blue'}>
              In Progress
            </Badge>
            <Text size="sm" color="dimmed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              View Repository
            </Button>
        </Group>
        </Modal>

        <Table highlightOnHover className={classes.list} verticalSpacing={'xs'}>
          <thead>
            <tr>
            <th style={{textAlign: 'center'}}></th>
              <th style={{textAlign: 'center'}}>Name</th>
              <th className={classes.hidecols850} style={{textAlign: 'center'}}>Language</th>
              <th className={classes.hidecols650} style={{textAlign: 'center'}}>Type</th>
              <th className={classes.hidecols550} style={{textAlign: 'center'}}>Date</th>
              <th style={{textAlign: 'center'}}>Status</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
    </>
  );
}