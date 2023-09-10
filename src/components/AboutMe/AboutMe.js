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
    <section id="aboutme" className={s.AboutMeSection}>
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
                I embarked on my programming journey not too long ago, and I'm
                proud to say that I can center a{' '}
                <span className={s.BoldSpan}>&lt;div&gt; </span>
                without googling, haha..
              </p>
              <p className={s.AboutMeText}>
                I'd say I'm more of a frontend-focused person. Writing in{' '}
                <span className={s.BoldSpan}>JavaScript</span> and creating cool
                designs with <span className={s.BoldSpan}>Sass</span> is really
                satisfying for me. I derive immense pleasure from experimenting
                with animations and visual effects, and my enthusiasm for
                working with <span className={s.BoldSpan}>React.js</span> knows
                no bounds. I've earned all my coding knowledge through hard
                work, and I put in every effort to ensure that the final outcome
                satisfies my creative spirit. This hobby has blossomed into a
                dream that I'm determined to shape my future with.
              </p>

              <p className={s.AboutMeText}>
                While I'm looking forward to gaining experience in commercial
                projects, I focus on expressing my creativity through pet
                projects.
              </p>

              <div className={s.ContactsDiv}>
                <ul className={s.ContactList}>
                  <li className={classNames(s.ContactItem, s[theme])}>
                    <a
                      href="https://t.me/t_onni"
                      aria-label="Me on Telegram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ReactSVG className={s.ContactIcon} src={Telegram} />
                    </a>
                  </li>
                  <li className={classNames(s.ContactItem, s[theme])}>
                    <a
                      href="https://www.instagram.com/t.onni_/"
                      aria-label="Me on Instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ReactSVG className={s.ContactIcon} src={Instagram} />
                    </a>
                  </li>
                  <li className={classNames(s.ContactItem, s[theme])}>
                    <a
                      href="https://github.com/tonni004"
                      aria-label="Me on Github"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ReactSVG className={s.ContactIcon} src={Github} />
                    </a>
                  </li>
                  <li className={classNames(s.ContactItem, s[theme])}>
                    <a
                      href="https://www.linkedin.com/in/tanya-baletska-06377828a/"
                      aria-label="Me on LinkedIn"
                      target="_blank"
                      rel="noreferrer"
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
    </section>
  );
}
