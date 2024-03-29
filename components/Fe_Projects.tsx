import React from 'react';
import { createStyles, Container, Group, Badge, Button, Card, Image, Text, CardSection } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Link from 'next/link';

const useStyles = createStyles(() => ({

  container: {
    marginTop: 100,
    paddingBottom: 150,
  },

  h2: {
    textAlign: 'center',
    fontSize: '28px',
  },

  title: {
    paddingBottom: 10,
  },

  col: {
    margin: 5
  },

  carousel: {
    paddingTop: 16,
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

}));

const elements = [
  { 
    image: 'res/projects/MapViewer.png',
    name: 'Map Viewer',
    status: 'Complete',
    description: 'A Windows application that takes CSV file as an input and draw out a map using QuadTree data structure.',
    link: 'https://github.com/StrykerPX/Map-Viewer'
  },

  { 
    image: 'res/projects/chroot.png',
    name: 'Chroot',
    language: 'Javascript',
    type: 'Bot',
    status: 'In progress',
    description: 'Personal Discord bot with programmer-friendly features. It uses Github API to fetch repository information, etc.',
    link: 'https://github.com/StrykerPX/Chroot'
  },

  { 
    image: 'res/projects/acm_website.PNG',
    name: 'ACM Website',
    status: 'Complete',
    description: 'Offical Association for Computing Machinery (ACM) website for the Kansas State University.',
    link: 'https://acm.cs.ksu.edu/'
  },
];

export function Fe_Prjects() {

  const { classes } = useStyles();

  const projects = elements.map((element) => (
    <Carousel.Slide key={element.name}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <CardSection>
        <Image
          src={element.image}
          height={160}
        />
        </CardSection>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{element.name}</Text>
          <Badge className={classes.hidecols850} color={(element.status === 'Complete') ? 'teal' : 'blue'}>
            {element.status}
          </Badge>
        </Group>

        <Text className={classes.hidecols850} size="sm" color="dimmed">
          {element.description}
        </Text>
          <Link
            href={element.link}
          >
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              View project
            </Button>
          </Link>
      </Card>
    </Carousel.Slide>
  ));

  return (
    <>
      <div>
        <Container className={classes.container}>
        <h2 className={classes.h2}>Featured Projects</h2>
          <Carousel 
            className={classes.carousel}
            slideSize="50%"
            height={350}
            slideGap="xl" loop
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
            ]}
          >
            {projects}
          </Carousel>
        </Container>
      </div>  
    </>
  );
}