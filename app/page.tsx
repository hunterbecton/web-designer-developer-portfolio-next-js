'use client';

import { MotionConfig } from 'framer-motion';
import {
  Nav,
  HomepageHero,
  Section,
  About,
  TagMarquee,
  Services,
  ProjectFeature,
  Email,
  Footer,
  ProjectModal,
  ImageSliderImage,
  DetailSectionProps,
  Cursor,
} from '../components';

export interface Project {
  projectId: string;
  title: string;
  description: string;
  images: ImageSliderImage[];
  features: ImageSliderImage[];
  details: DetailSectionProps[];
  link: string;
}

export default function Homepage() {
  const projects: Project[] = [
    {
      projectId: 'k3iZKEvW',
      title: 'Project one',
      description:
        'Vel iaculis ipsum accumsan nunc. Habitant nunc consequat, amet lorem convallis velit, amet dignissim.',
      images: [
        {
          id: 'QfX47eZF',
          src: '/projects/project-1-1.jpg',
          alt: 'Project one image',
        },
        {
          id: '2jsLmujW',
          src: '/projects/project-1-2.jpg',
          alt: 'Project one image',
        },
      ],
      features: [
        {
          id: 'QfSx7eZF',
          src: '/projects/project-1-1.jpg',
          alt: 'Project one image',
        },
        {
          id: '0LsLmujW',
          src: '/projects/project-1-2.jpg',
          alt: 'Project one image',
        },
      ],
      details: [
        { title: 'Tech', details: 'Lambda, Next.js' },
        { title: 'Role', details: 'Design, development' },
        { title: 'Year', details: '2020 – Present' },
      ],
      link: 'https://www.skillthrive.com',
    },
    {
      projectId: 'yZQfCT7t',
      title: 'Project two',
      description:
        'Vel iaculis ipsum accumsan nunc. Habitant nunc consequat, amet lorem convallis velit, amet dignissim.',
      images: [
        {
          id: 'WGGHV8tn',
          src: '/projects/project-2-1.jpg',
          alt: 'Project two image',
        },
        {
          id: 'nxjJy9db',
          src: '/projects/project-2-2.jpg',
          alt: 'Project two image',
        },
      ],
      features: [
        {
          id: 'PwS32eZF',
          src: '/projects/project-2-1.jpg',
          alt: 'Project two image',
        },
        {
          id: '32SLmudC',
          src: '/projects/project-2-2.jpg',
          alt: 'Project two image',
        },
      ],
      details: [
        { title: 'Tech', details: 'Figma, Next.js, Tailwind' },
        { title: 'Role', details: 'Design, development' },
        { title: 'Year', details: '2021' },
      ],
      link: 'https://www.skillthrive.com',
    },
    {
      projectId: '6phudXXs',
      title: 'Project three',
      description:
        'Vel iaculis ipsum accumsan nunc. Habitant nunc consequat, amet lorem convallis velit, amet dignissim.',
      images: [
        {
          id: 'gYVRuX2y',
          src: '/projects/project-3-1.jpg',
          alt: 'Project three image',
        },
        {
          id: 'p8Vy2gir',
          src: '/projects/project-3-2.jpg',
          alt: 'Project three image',
        },
      ],
      features: [
        {
          id: '1qP32eZF',
          src: '/projects/project-3-1.jpg',
          alt: 'Project three image',
        },
        {
          id: '8XSLpswC',
          src: '/projects/project-3-2.jpg',
          alt: 'Project three image',
        },
      ],
      details: [
        { title: 'Tech', details: 'Figma, Next.js, Tailwind' },
        { title: 'Role', details: 'Design, development' },
        { title: 'Year', details: '2021' },
      ],
      link: 'https://www.skillthrive.com',
    },
  ];

  return (
    <MotionConfig reducedMotion='user'>
      <Cursor />
      <Nav />
      <main>
        <HomepageHero projects={projects} />
        <Section title='About' subtitle='01' tag='about' />
        <About />
        <TagMarquee />
        <Services />
        <Section title='Work' subtitle='02' tag='work' />
        {projects.map((project) => (
          <ProjectFeature
            key={project.projectId}
            projectId={project.projectId}
            title={project.title}
            description={project.description}
            features={project.features}
          />
        ))}
        <Section title='Contact' subtitle='03' tag='contact' />
        <Email />
      </main>
      <Footer />
      {projects.map((project) => (
        <ProjectModal
          key={project.projectId}
          projectId={project.projectId}
          title={project.title}
          description={project.description}
          details={project.details}
          images={project.images}
          link={project.link}
        />
      ))}
    </MotionConfig>
  );
}
