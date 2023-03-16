'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Olá, eu sou Yuri, um webdesigner com experiência em HTML, CSS, React.js, Three.js, Three-Fiber, Angular e Java. Também sou habilidoso em design, utilizando ferramentas como Canvas, Photoshop, Illustrator e Adobe After Effects. Com minhas habilidades e experiência, posso criar designs e experiências interativas de alta qualidade para os usuários. Confira meu portfólio para ver exemplos do meu trabalho e entre em contato comigo para saber como posso ajudar em seu próximo projeto."
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="./arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
