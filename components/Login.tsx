import React from 'react';
import {
  TextInput,
  PasswordInput,
  Anchor,
  Center,
  Title,
  Button,
} from '@mantine/core';

export function AuthenticationTitle() {
  return (
    <Center sx={
      {
        height: '90vh'
      }
    }>
      <div>
        <Title order={2}
          align="center"
          sx={
            {
              marginBottom: 25,
              fontFamily: `Arial`,
              fontWeight: 'bold',
           }
          }>
          Login
        </Title>
        <TextInput sx={{width: 300,}} placeholder="Username" required />
        <PasswordInput placeholder="Password" required mt="md" />
        <Button fullWidth mt="xl" sx={
          { 
            backgroundColor: '#517dbe',
            transition: '0.05s',
            '&:hover': {
              backgroundColor: '#476ba0'
            }
          }
        }>
          Sign in
        </Button>
        <Center sx={
          {
            marginTop: 16
          }
        }>
          <Anchor sx={
            {
              color: 'black',
              '&:hover': {
                color: '#294b5f'
              }
            }
          }
          href="https://sichengchen.com/" size="sm">
            Forgot password?
          </Anchor>
        </Center>
      </div>
    </Center>
  );
}