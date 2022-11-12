import { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';

export const About = () => {
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

  const descriptionAnimation = {
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
        delay: 0.2,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      ctrls.start('visible');
    }
    if (!isInView) {
      ctrls.start('hidden');
    }
  }, [ctrls, isInView]);

  return (
    <section className='mx-auto max-w-6xl py-12 px-4 md:py-16 md:px-8 lg:py-24'>
      <header className='flex flex-wrap place-content-center lg:justify-between'>
        <motion.h3
          ref={sectionRef}
          initial='hidden'
          animate={ctrls}
          variants={titleAnimation}
          className='w-full max-w-[32.5rem] text-2xl font-bold text-stone-900 md:text-4xl lg:w-max lg:max-w-[28.75rem]'
        >
          Creative engineer with a passion for new tech
        </motion.h3>
        <motion.div
          initial='hidden'
          animate={ctrls}
          variants={descriptionAnimation}
          className='mt-4 w-full max-w-[32.5rem] text-left text-sm font-normal text-stone-700 md:mt-8 md:text-lg lg:mt-0 lg:w-max lg:max-w-[28.75rem]'
        >
          <p>
            Vitae viverra arcu quis sit proin nec et lorem. Et, aliquam posuere
            ultricies odio adipiscing tempus sit blandit nibh. Tincidunt id
            interdum quisque nisl. Lacus, velit a ut facilisis accumsan mi
            blandit turpis.
          </p>
          <p className='mt-[1.5rem] md:mt-[1.75rem]'>
            Lacus, fusce ut congue tristique risus in aliquet id lobortis.
            Ultrices egestas at aliquet praesent nunc, venenatis posuere egestas
            in. Eget non id vel facilisis mauris.
          </p>
        </motion.div>
      </header>
    </section>
  );
};
