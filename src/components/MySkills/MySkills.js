import { useEffect, useState, useRef, useContext } from 'react';
import { motion, useInView } from 'framer-motion';
import s from './MySkills.module.scss';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
// components
import Container from 'components/Container';
import Section from 'components/Section';
// icons
import Wave from '../../images/svg/wave.svg';
import React from '../../images/svg/react.svg';
import JavaScript from '../../images/svg/java-script.svg';
import Bootstrap from '../../images/svg/bootstrap.svg';
import Css from '../../images/svg/css.svg';
import Figma from '../../images/svg/figma.svg';
import Git from '../../images/svg/git.svg';
import Github from '../../images/svg/github.svg';
import Html from '../../images/svg/html.svg';
import Redux from '../../images/svg/redux.svg';
import ResponsiveDesign from '../../images/svg/responsive-design.svg';
import RestApi from '../../images/svg/rest-api.svg';
import Sass from '../../images/svg/sass.svg';
import ReactRouter from '../../images/svg/react-router.svg';
import VsCode from '../../images/svg/vs-code.svg';
import Cursor from '../../images/svg/cursor.svg';
import Avatar from '../../images/card-photo2.png';

import { ThemeContext } from 'components/BodyTheme/BodyTheme';

const skills = [
  { icon: React, name: 'React', size: 'Large' },
  { icon: JavaScript, name: 'JavaScript', size: 'Large' },
  { icon: Bootstrap, name: 'Bootstrap', size: 'Small' },
  { icon: Css, name: 'CSS', size: 'Large' },
  { icon: Figma, name: 'Figma', size: 'Small' },
  { icon: Git, name: 'Git', size: 'Small' },
  { icon: Github, name: 'Github', size: 'Small' },
  { icon: Html, name: 'HTML5', size: 'Large' },
  { icon: Redux, name: 'Redux', size: 'Medium' },
  { icon: ResponsiveDesign, name: 'Responsive Design', size: 'Medium' },
  { icon: RestApi, name: 'REST Api', size: 'Medium' },
  { icon: Sass, name: 'Sass', size: 'Medium' },
  { icon: ReactRouter, name: 'ReactRouter', size: 'Medium' },
  { icon: VsCode, name: 'VsCode', size: 'Medium' },
];

export default function MySkills() {
  const { theme } = useContext(ThemeContext);
  const [isClicked, setIsClicked] = useState(false);
  const [animation, setAnimation] = useState('animate');
  const [waveAnimation, setWaveAnimation] = useState('animate');
  const [bigField, setBigField] = useState('beforeAnimate');
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleClick = () => {
    setIsClicked(true);
    setBigField('afterAnimate');
    setWaveAnimation('animate');
    setAnimation('animate');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation('pulse');
    }, 7000);

    return () => clearTimeout(timer);
  }, [animation]);

  return (
    <section id="myskills">
      <Section>
        <div className={classNames(s.MySkillsSection, s[bigField])}>
          {isClicked ? (
            <>
              <div
                className={classNames(s.Wave, s[waveAnimation], s[theme])}
              ></div>
              <div className={classNames(s.WaveImgField, s[waveAnimation])}>
                <ReactSVG src={Wave} />
              </div>
              <Container>
                <h2 className={s.AnimationTitle}>
                  Skills, Tools & Technologies
                </h2>
                <ul
                  className={classNames(
                    s.IconSkillsList,
                    s[animation],
                    s[theme]
                  )}
                >
                  {skills.map(({ icon, name, size }) => (
                    <li
                      key={name}
                      className={classNames(s[`${size}SkillItem`])}
                    >
                      <ReactSVG src={icon} />
                      <h5>{name}</h5>
                    </li>
                  ))}
                </ul>
              </Container>
            </>
          ) : (
            <Container>
              <motion.div
                ref={ref}
                style={{
                  transform: isInView ? 'scale(1)' : 'scale(0.9)',
                  opacity: isInView ? 1 : 0.4,
                  transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
                }}
                className={s.BeforeAnimationField}
              >
                <img
                  className={s.AvatarImg}
                  src={Avatar}
                  width="250"
                  height="190"
                  alt="Avatar of the developer"
                />
                <span className={s.FirstSpan}>Who I am?</span>
                <span className={s.SecondSpan}>What I can do?</span>
                <div className={classNames(s.ButtonField, s[theme])}>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={handleClick}
                    className={classNames(s.MySkillsButton, s[theme])}
                  >
                    Just do it
                  </motion.button>
                  <ReactSVG src={Cursor} />
                </div>
              </motion.div>
            </Container>
          )}
        </div>
      </Section>
    </section>
  );
}
