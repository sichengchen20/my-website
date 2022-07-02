import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  Center,
  Container
} from '@mantine/core';

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    background: {
      height: 'calc(100vh - 142px)'
    },

    wrapper: {
      width: 500
    },

    container: {
      height: '85vh'
    },

    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg - 2,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid transparent',
      padding: theme.spacing.xl,
      flex: '0 0 280px',

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      backgroundColor: '#517dbe',
      transition: '0.05s',
      '&:hover': {
        backgroundColor: '#476ba0'
      },
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export function ContactForm() {
  const { classes } = useStyles();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_50t33gf', 'template_r1vovzw', e.target, '_rLNYos94lW5lqTi5')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className={classes.background}>
      <Center className={classes.container}>
        <div className={classes.wrapper}>
          <form className={classes.form} onSubmit={sendEmail}>
              <Center>
                <Text size="lg" weight={700} className={classes.title}>
                  Get in touch!
                </Text>
              </Center>

              <div className={classes.fields}>
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                  <TextInput name='name' label="Name" placeholder="Name" />
                  <TextInput name='email' label="Email" placeholder="example@pogmail.com" required />
                </SimpleGrid>

                <TextInput mt="md" name='subject' label="Subject" placeholder="Subject" required />

                <Textarea
                  mt="md"
                  name='message'
                  label="Your message"
                  placeholder="Please include all relevant information"
                  minRows={3}
                />

                <Group position="right" mt="md">
                  <Button type="submit" className={classes.control}>
                    Send message
                  </Button>
                </Group>
              </div>
            </form>
        </div>
      </Center>
    </div>
  );
}

