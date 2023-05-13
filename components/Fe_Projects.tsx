import React from 'react';
import { createStyles, Center, Container, Grid, Paper, Group, Badge, Button, Card, Image, Text, CardSection } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Link from 'next/link';

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

const elements = [
  { 
    image: 'res/projects/MapViewer.png',
    name: 'Map Viewer',
    status: 'Complete',
    link: 'https://github.com/StrykerPX/Map-Viewer'
  },

  { 
    image: 'res/projects/chroot.png',
    name: 'Chroot',
    language: 'Javascript',
    type: 'Bot',
    status: 'In progress',
    link: 'https://github.com/StrykerPX/Chroot'
  },

  { 
    image: 'res/projects/acm_website.png',
    name: 'ACM Website',
    status: 'Complete',
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
          <Badge  color={(element.status === 'Complete') ? 'teal' : 'blue'}>
            {element.status}
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
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
          <Carousel 
            slideSize="50%"
            height={350}
            slideGap="xl" loop
          >
            {projects}
          </Carousel>
        </Container>
      </div>  
    </>
  );
}