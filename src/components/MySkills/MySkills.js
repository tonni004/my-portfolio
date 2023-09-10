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
    if (animation === 'animate') {
      setTimeout(() => {
        setAnimation('pulse');
      }, 7000);
    }
  });

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
                {' '}
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
                  <li className={s.LargeSkillItem}>
                    <ReactSVG src={React} />
                    <h5>React</h5>
                  </li>

                  <li className={s.LargeSkillItem}>
                    <ReactSVG src={JavaScript} />
                    <h5>JavaScript</h5>
                  </li>

                  <li className={s.SmallSkillItem}>
                    <ReactSVG src={Bootstrap} />
                    <h5>Bootstrap</h5>
                  </li>
                  <li className={s.LargeSkillItem}>
                    <ReactSVG src={Css} />
                    <h5>Css</h5>
                  </li>
                  <li className={s.SmallSkillItem}>
                    <ReactSVG src={Figma} />
                    <h5>Figma</h5>
                  </li>
                  <li className={s.SmallSkillItem}>
                    <ReactSVG src={Git} />
                    <h5>Git</h5>
                  </li>

                  <li className={s.SmallSkillItem}>
                    <ReactSVG src={Github} />
                    <h5>Github</h5>
                  </li>
                  <li className={s.LargeSkillItem}>
                    <ReactSVG src={Html} />
                    <h5>HTML5</h5>
                  </li>
                  <li className={s.MediumSkillItem}>
                    <ReactSVG src={Redux} />
                    <h5>Redux</h5>
                  </li>
                  <li className={s.MediumSkillItem}>
                    <ReactSVG src={ResponsiveDesign} />
                    <h5>Responsive Design</h5>
                  </li>
                  <li className={s.MediumSkillItem}>
                    <ReactSVG src={RestApi} />
                    <h5>REST Api</h5>
                  </li>
                  <li className={s.MediumSkillItem}>
                    <ReactSVG src={Sass} />
                    <h5>Sass</h5>
                  </li>
                  <li className={s.MediumSkillItem}>
                    <ReactSVG src={ReactRouter} />
                    <h5>ReactRouter</h5>
                  </li>

                  <li className={s.MediumSkillItem}>
                    <ReactSVG src={VsCode} />
                    <h5>VsCode</h5>
                  </li>
                </ul>
              </Container>
            </>
          ) : (
            <Container>
              <motion.div
                ref={ref}
                style={{
                  transform: isInView ? 'scale(1)' : 'scale(0.6)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
                }}
                className={s.BeforeAnimationField}
              >
                <img
                  className={s.AvatarImg}
                  src={Avatar}
                  width="250"
                  height="190"
                  alt="avatar"
                />
                <span className={s.FirstSpan}>Who I am?</span>
                <span className={s.SecondSpan}>What I can do?</span>
                <div className={classNames(s.ButtonField, s[theme])}>
                  <button
                    className={classNames(s.MySkillsButton, s[theme])}
                    onClick={handleClick}
                    type="button"
                  >
                    Just do it
                  </button>
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
