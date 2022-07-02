import { Center } from '@mantine/core';
import type { NextPage } from 'next'
import { AuthenticationTitle } from '../components/Login';
import dynamic from "next/dynamic";

const Login: NextPage = () => {
  return (
    <>
      <Center>
        <AuthenticationTitle />
      </Center>
    </>
  )
}

export default dynamic(() => Promise.resolve(Login), {
  ssr: false,
});