import { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import { ServiceItem } from './ServiceItem';

export const Services = () => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true });
  const ctrls = useAnimation();

  const titleAnimation = {
    hidden: {
      opacity: 0,
      y: `50%`,
    },
    visible: {
      opacity: 1,
      y: `0%`,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const services = [
    {
      id: '9dRe540S',
      title: 'Web design',
      description:
        'Donec nibh convallis quis nunc nisl iaculis ac. Gravida gravida euismod semper pretium, tristique odio accumsan mauris. Et viverra nibh et et nulla.',
    },
    {
      id: '0SwerDam',
      title: 'Web development',
      description:
        'Potenti cras congue elementum nec nibh. Nec tellus elementum pharetra fames fames sapien. Commodo lorem in tempor lectus non vel est. Sodales.',
    },
    {
      id: '12QWsldf',
      title: 'Interaction animation',
      description:
        'A erat nam sit nascetur quam elit. Faucibus mus at tortor elementum eu. Quam in dictumst faucibus consequat purus vitae praesent. Proin eu eget.',
    },
  ];

  useEffect(() => {
    if (isInView) {
      ctrls.start('visible');
    }
    if (!isInView) {
      ctrls.start('hidden');
    }
  }, [ctrls, isInView]);

  return (
    <section className='py-12 px-4 md:py-16 md:px-8 lg:py-24'>
      <div ref={sectionRef} className='mx-auto max-w-[32.5rem]'>
        <motion.h2
          initial='hidden'
          animate={ctrls}
          variants={titleAnimation}
          className='text-3xl font-bold text-stone-900 md:text-4xl'
        >
          Services
        </motion.h2>
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
