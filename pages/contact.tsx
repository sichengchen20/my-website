import type { NextPage } from 'next'
import { HeaderStatic } from '../components/HeaderStatic'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer';
import dynamic from "next/dynamic";

const links = [
  { link: '/', label: 'Home' },
  { link: '/projects', label: 'Projects' },
  { link: '/resume', label: 'Resume' },
  { link: '#', label: 'Contact' },
] as { link: string; label: string; links: { link: string; label: string }[] }[];

const Contact: NextPage = () => {
  return (
    <>
      <HeaderStatic links={links} />
      <ContactForm />
      <Footer />
    </>
  )
}

export default dynamic(() => Promise.resolve(Contact), {
  ssr: false,
});