import type { NextPage } from 'next'
import { HeaderStatic } from '../components/HeaderStatic'
import { ProjectList } from '../components/ProjectList'
import { Footer } from '../components/Footer';

const links = [
  { link: '/', label: 'Home' },
  { link: '#', label: 'Projects' },
  { link: '/contact', label: 'Contact' },
  { link: '/login', label: 'Login' }
] as { link: string; label: string; links: { link: string; label: string }[] }[];

const Projects: NextPage = () => {
  return (
    <>
      <HeaderStatic links={links} />
      <ProjectList />
      <Footer />
    </>
  )
}

export default Projects