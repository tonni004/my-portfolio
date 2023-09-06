import { useRef, useContext } from 'react';
import { motion, useInView } from 'framer-motion';
import classNames from 'classnames';
import s from './AboutMe.module.scss';
import Container from 'components/Container';
import Section from 'components/Section';
// svg icon
import { ReactSVG } from 'react-svg';
import Arrow from '../../images/svg/swirl-arrow-top-right-icon.svg';
import Instagram from '../../images/svg/instagram.svg';
import Telegram from '../../images/svg/telegram.svg';
import Github from '../../images/svg/github.svg';
import LinkedIn from '../../images/svg/linkedin.svg';
import CardPhoto from '../../images/card-photo.png';
import Meme from '../../images/meme.jpeg';

import { ThemeContext } from 'components/BodyTheme/BodyTheme';

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { theme } = useContext(ThemeContext);

  return (
    <div id="aboutme" className={s.AboutMeSection}>
      <Container>
        <Section>
          <motion.h2
            className={s.SectionTitle}
            style={{
              transform: isInView ? 'none' : 'translateY(-60px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
          >
            About me
          </motion.h2>

          <motion.div ref={ref} className={s.AboutMeField}>
            <motion.div
              style={{
                transform: isInView ? 'scale(1)' : 'scale(0.5)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
              }}
              className={s.AboutMeInfoField}
            >
              <p className={s.AboutMeText}>
                I started my journey in programming not so long ago, but I know
                how to center a <span className={s.BoldSpan}>&lt;div&gt; </span>
                without googling, haha..
              </p>
              <p className={s.AboutMeText}>
                {' '}
                I'd say I'm more of a frontend-focused person. Writing in{' '}
                <span className={s.BoldSpan}>JavaScript</span> and creating cool
                designs with <span className={s.BoldSpan}>Sass</span> is really
                satisfying for me. It gives me pleasure to experiment with
                animations and visual effects. I enjoy working with{' '}
                <span className={s.BoldSpan}>React.js</span>. All my coding
                knowledge, I earned through hard work. I do everything in my
                power to ensure the final result satisfies my creative soul.
                It's a hobby that has grown into a dream with which I want to
                shape my future life.
              </p>

              <p className={s.AboutMeText}>
                Unfortunately, I haven't participated in commercial projects
                yet, but I really want to do that. For now, I have to express my
                creativity through my own pet projects.
              </p>

              <div className={s.ContactsDiv}>
                <ul className={s.ContactList}>
                  <li className={classNames(s.ContactItem, s[theme])}>
                    <a href="https://t.me/t_onni" aria-label="Me on Telegram">
                      <ReactSVG className={s.ContactIcon} src={Telegram} />
                    </a>
                  </li>
                  <li className={classNames(s.ContactItem, s[theme])}>
                    <a
                      href="https://www.instagram.com/t.onni_/"
                      aria-label="Me on Instagram"
                    >
                      <ReactSVG className={s.ContactIcon} src={Instagram} />
                    </a>
                  </li>
                  <li className={classNames(s.ContactItem, s[theme])}>
                    <a
                      href="https://github.com/tonni004"
                      aria-label="Me on Github"
                    >
                      <ReactSVG className={s.ContactIcon} src={Github} />
                    </a>
                  </li>
                  <li className={classNames(s.ContactItem, s[theme])}>
                    <a
                      href="https://www.linkedin.com/in/tanya-baletska-06377828a/"
                      aria-label="Me on LinkedIn"
                    >
                      <ReactSVG className={s.ContactIcon} src={LinkedIn} />
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.article
              style={{
                transform: isInView ? 'scale(1)' : 'scale(0.5)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
              }}
              className={s.CardFlipArticle}
            >
              <div className={s.AboutMeCard}>
                <div className={classNames(s.FlipCardFront, s[theme])}>
                  {isInView ? (
                    <div className={s.TypingDiv}>
                      {' '}
                      <p className={s.CardText}>
                        Last year have changed my life..
                      </p>
                    </div>
                  ) : null}

                  <img
                    className={s.CardPhoto}
                    src={CardPhoto}
                    width="180"
                    height="180"
                    alt="CardPhoto"
                  ></img>

                  <ReactSVG
                    className={classNames(s.CardImage, s[theme])}
                    src={Arrow}
                    alt="Arrow"
                  />
                </div>

                <div className={s.FlipCardBack}>
                  <img
                    className={s.MemeImg}
                    src={Meme}
                    width="180"
                    height="180"
                    alt="Meme"
                  ></img>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </Section>

        <Section>
          <motion.div
            style={{
              opacity: isInView ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
            className={s.SkillsField}
          >
            <div className={s.LanguageField}>
              <h3 className={s.DivTitle}>Languages</h3>
              <ul className={s.LanguageList}>
                <li>
                  <p>Ukrainian</p>
                  <p className={classNames(s.GrayText)}>Native language</p>
                </li>

                <li>
                  <p>English</p>
                  <p className={s.GrayText}>Limited working proficiency</p>
                </li>
              </ul>
            </div>
            <div className={s.EducationField}>
              <h3 className={s.DivTitle}>Education</h3>
              <p className={s.DivText}>
                {' '}
                Odesa National Polytechnic University
              </p>
              <p className={s.GrayText}>
                Master's degree, Chemical technology and engineering
              </p>
              <p className={s.YearsText}>2014 - 2019</p>
            </div>
          </motion.div>
        </Section>
      </Container>
    </div>
  );
}
