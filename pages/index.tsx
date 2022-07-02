import type { NextPage } from 'next'
import { HeaderMenuColored } from '../components/Header'
import { Banner } from '../components/Banner'
import { About } from '../components/About'
import { Skills } from '../components/Skills';
import { Fe_Prjects } from '../components/Fe_Projects';
import { Footer } from '../components/Footer';
import { Donation } from '../components/Donation';
import dynamic from "next/dynamic";

const links = [
  { link: '#', label: 'Home' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact' },
  { link: '/login', label: 'Login' }
] as { link: string; label: string; links: { link: string; label: string }[] }[];

const Home: NextPage = () => {
  return (
    <>
      <HeaderMenuColored links={links} />
      <Banner />
      <About />
      <Skills />
      <Fe_Prjects />
      <Donation />
      <Footer />
    </>
  )
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
