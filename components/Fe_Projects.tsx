import React from 'react';
import { createStyles, Center, Container, Grid, Paper, Group, Badge, Button, Card, Image, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

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

export function Fe_Prjects() {

  const { classes } = useStyles();

  return (
    <>
      <div>
        <Container className={classes.container}>
          <Carousel 
            slideSize="70%" height={350} slideGap="xl"
            styles={{
              control: {
                '&[data-inactive]': {
                  opacity: 0,
                  cursor: 'default',
                },
              },
            }}
          >
            <Carousel.Slide>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                  alt="Norway"
                  />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                  activities on and around the fjords of Norway
                </Text>

                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                  Book classic tour now
                </Button>
              </Card>
            </Carousel.Slide>
            <Carousel.Slide>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                  alt="Norway"
                  />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                  activities on and around the fjords of Norway
                </Text>

                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                  Book classic tour now
                </Button>
              </Card>
            </Carousel.Slide>
            <Carousel.Slide>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                  alt="Norway"
                  />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                  activities on and around the fjords of Norway
                </Text>

                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                  Book classic tour now
                </Button>
              </Card>
            </Carousel.Slide>
          </Carousel>
        </Container>
      </div>  
    </>
  );
}