import { useRef, useState, useContext } from 'react';
import { motion, useInView } from 'framer-motion';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import s from './MyProjects.module.scss';

import Container from 'components/Container';
import Github from '../../images/svg/github.svg';
import Section from 'components/Section';
import PhonebookGif from '../../images/phonebookapp.gif';
import PhonebookStatic from '../../images/phonebook-static.jpg';
import MovieSearchGif from '../../images/moviesearchapp.gif';
import MovieSearchStatic from '../../images/movie-static.jpg';
import PortfolioStatic from '../../images/portfolio-static.jpg';
import PortfolioGif from '../../images/portfolio.gif';

import { ThemeContext } from 'components/BodyTheme/BodyTheme';

export default function MyProjects() {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [showGif, setShowGif] = useState(false);

  const toggleGif = () => {
    setShowGif(!showGif);
  };

  return (
    <section ref={ref} className={s.MyProjectsField} id="myprojects">
      <Container>
        <Section>
          <motion.h2
            style={{
              transform: isInView ? 'none' : 'translateX(50px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
            className={s.MyProjectsTitle}
          >
            My projects
          </motion.h2>
          <ul className={s.MyProjectsList}>
            <AnimatedListItem>
              <div className={classNames(s.CardField, s[theme])}>
                <h3>Phonebook app</h3>
                <p className={classNames(s.DescriptionText, s[theme])}>
                  Phonebook is a web application that allows users to register
                  and create their personal contact database. Access is
                  restricted to verified users only. Users can access their
                  personal phonebook at any time to add new contacts or delete
                  existing ones. User data is securely protected, and access is
                  granted only to the respective account holder. To use the
                  application, you need to register if you haven't done so
                  already.
                </p>
                <p className={s.TechnologiesText}>
                  <span>Technologies Used:</span> React, Redux Toolkit, React
                  Router DOM, Axios, Sass, React Bootstrap Components, Framer
                  Motion.
                </p>
                <div className={s.LinkField}>
                  <a
                    className={s.IconLink}
                    href="https://github.com/tonni004/phonebook-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ReactSVG src={Github} />
                  </a>
                  <a
                    className={s.DemoLink}
                    href="https://tonni004.github.io/phonebook-app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
                <div className={classNames(s.GifField)}>
                  {showGif ? (
                    <img
                      src={PhonebookGif}
                      onClick={toggleGif}
                      alt="Phonebook app gif"
                    />
                  ) : (
                    <img
                      src={PhonebookStatic}
                      alt="Phonebook static"
                      onClick={toggleGif}
                    />
                  )}
                </div>
              </div>
            </AnimatedListItem>

            <AnimatedListItem>
              <div className={classNames(s.CardField, s[theme])}>
                <h3>Movie Search app</h3>
                <p className={classNames(s.DescriptionText, s[theme])}>
                  A web application that allows users to search for movies, view
                  detailed information about them, explore cast details, read
                  user reviews, and check the ratings of the trending movies of
                  the week.
                </p>
                <p className={s.TechnologiesText}>
                  <span>Technologies Used:</span> React, Redux Toolkit, Axios,
                  React Router DOM, Framer Motion, NextUI.
                </p>

                <div className={s.LinkField}>
                  <a
                    className={s.IconLink}
                    href="https://github.com/tonni004/movie-search-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ReactSVG src={Github} />
                  </a>
                  <a
                    className={s.DemoLink}
                    href="https://tonni004.github.io/movie-search-app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>

                <div className={classNames(s.GifField)}>
                  {showGif ? (
                    <img
                      src={MovieSearchGif}
                      onClick={toggleGif}
                      alt="Movie search app gif"
                    />
                  ) : (
                    <img
                      src={MovieSearchStatic}
                      alt="Movie static"
                      onClick={toggleGif}
                    />
                  )}
                </div>
              </div>{' '}
            </AnimatedListItem>

            <AnimatedListItem>
              <div className={classNames(s.CardField, s[theme])}>
                <h3>Portfolio</h3>
                <p className={classNames(s.DescriptionText, s[theme])}>
                  The goal of the "Portfolio" project is to create a
                  user-friendly and attractive platform for presenting my
                  professional activities, skills, and achievements in the field
                  of programming. The website provides up-to-date information
                  about my skills and the technologies I use, making it easier
                  to explore new opportunities and collaborate with other
                  professionals in the programming and software development
                  industry.
                </p>
                <p className={s.TechnologiesText}>
                  <span>Technologies Used:</span> React, JavaScript, Sass,
                  Framer Motion.
                </p>

                <div className={s.LinkField}>
                  <a
                    className={s.IconLink}
                    href="https://github.com/tonni004/my-portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ReactSVG src={Github} />
                  </a>
                  <a
                    className={s.DemoLink}
                    href="https://sprightly-faun-7f2354.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>

                <div className={classNames(s.GifField)}>
                  {showGif ? (
                    <img
                      src={PortfolioGif}
                      onClick={toggleGif}
                      alt="Portfolio gif"
                    />
                  ) : (
                    <img
                      src={PortfolioStatic}
                      alt="Portfolio static"
                      onClick={toggleGif}
                    />
                  )}
                </div>
              </div>{' '}
            </AnimatedListItem>
          </ul>
        </Section>
      </Container>
    </section>
  );
}

function AnimatedListItem({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { rootMargin: '-50px' });

  return (
    <motion.li
      ref={ref}
      style={{
        transform: isInView ? 'scale(1)' : 'scale(0.5)',
        opacity: isInView ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s`,
      }}
    >
      {children}
    </motion.li>
  );
}
