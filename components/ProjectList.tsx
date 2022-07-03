import React from 'react';
import { createStyles, Container, Center, Table, Image, Badge } from '@mantine/core';

const useStyles = createStyles(() => ({

  background: {
    height: 'calc(100vh - 242px)'
  },

  list: {
    marginTop: 100,
    textAlign: 'center'
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

  label: {
    textAlign: 'center'
  }
}));

const elements = [
  { 
    image: 'res/projects/img_app.png',
    name: 'Hash Generator', language: 'C#',
    type: 'application', date: '01/24/2022',
    status: 'Complete',
    link: 'https://github.com/StrykerPX/Hash-Generator'
  },

  { 
    image: 'res/projects/img_app.png',
    name: 'File Compressor', language: 'Java',
    type: 'application', date: '01/24/2022',
    status: 'Complete',
    link: 'https://github.com/StrykerPX/File-Compression'
  },

  { 
    image: 'res/projects/chroot.png',
    name: 'Chroot',
    language: 'Javascript',
    type: 'Bot',
    date: '01/24/2022',
    status: 'In progress',
    link: 'https://github.com/StrykerPX/Chroot'
  },
];

export function ProjectList() {

  const { classes } = useStyles();

  const rows = elements.map((element) => (
    
      <tr key={element.name} onClick={(e) => {e.preventDefault; location.href=element.link;}}>
        <td>
          <Center>
            <Image
              src={element.image}
              width={45}
              radius={5}
            />
          </Center>
        </td>
        <td style={{fontWeight: 'bold'}}>{element.name}</td>
        <td className={classes.hidecols850}>{element.language}</td>
        <td className={classes.hidecols650}>{element.type}</td>
        <td className={classes.hidecols550}>{element.date}</td>
        <td><Badge color={(element.status === 'Complete') ? 'teal' : 'blue'}>{element.status}</Badge></td>
      </tr>
  ));

  return (
    <>
      <Container className={classes.background}>
        <Table highlightOnHover className={classes.list} verticalSpacing={'xs'}>
          <thead>
            <tr>
            <th style={{textAlign: 'center'}}></th>
              <th style={{textAlign: 'center'}}>Name</th>
              <th className={classes.hidecols850} style={{textAlign: 'center'}}>Language</th>
              <th className={classes.hidecols650} style={{textAlign: 'center'}}>Type</th>
              <th className={classes.hidecols550} style={{textAlign: 'center'}}>Date</th>
              <th style={{textAlign: 'center'}}>Status</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
    </>
  );
}