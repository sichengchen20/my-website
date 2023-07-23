import type { NextPage } from 'next'
import { HeaderMenu } from '../components/HeaderMenu'
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
  { link: '/resume', label: 'Resume' },
  { link: '/contact', label: 'Contact' },
] as { link: string; label: string; links: { link: string; label: string }[] }[];

const Home: NextPage = () => {
  return (
    <>
      <HeaderMenu links={links} />
      <Banner />
      <About />
      <Fe_Prjects />
      <Donation />
      <Footer />
    </>
  )
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
