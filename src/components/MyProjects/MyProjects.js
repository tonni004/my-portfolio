import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import s from './MyProjects.module.scss';

import Container from 'components/Container';
import Section from 'components/Section';
import ProjectCard from 'components/ProjectCard';

// images and gif
import PhonebookGif from '../../images/phonebookapp.gif';
import PhonebookStatic from '../../images/phonebook-static.jpg';
import MovieSearchGif from '../../images/moviesearchapp.gif';
import MovieSearchStatic from '../../images/movie-static.jpg';
import PortfolioStatic from '../../images/portfolio-static.jpg';
import PortfolioGif from '../../images/portfolio.gif';

export default function MyProjects() {
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
              <ProjectCard
                pojectTitle="Phonebook app"
                projectDescription={`Phonebook is a web application that allows users to register
                  and create their personal contact database. Access is
                  restricted to verified users only. Users can access their
                  personal phonebook at any time to add new contacts or delete
                  existing ones. User data is securely protected, and access is
                  granted only to the respective account holder. To use the
                  application, you need to register if you haven't done so
                already.`}
                technologies="React, Redux Toolkit, React
                  Router DOM, Axios, Sass, React Bootstrap Components, Framer
                  Motion."
                githubLink="https://github.com/tonni004/phonebook-app"
                demoLink="https://tonni004.github.io/phonebook-app/"
                showGif={showGif}
                toggleGif={toggleGif}
                gif={PhonebookGif}
                staticImage={PhonebookStatic}
                gifFieldPosition="odd"
              />
            </AnimatedListItem>

            <AnimatedListItem>
              <ProjectCard
                pojectTitle="Movie Search app"
                projectDescription={`A web application that allows users to search for movies, view
                  detailed information about them, explore cast details, read
                  user reviews, and check the ratings of the trending movies of
                  the week.`}
                technologies="React, Redux Toolkit, Axios,
                  React Router DOM, Framer Motion, NextUI."
                githubLink="https://github.com/tonni004/movie-search-app"
                demoLink="https://tonni004.github.io/movie-search-app/"
                showGif={showGif}
                toggleGif={toggleGif}
                gif={MovieSearchGif}
                staticImage={MovieSearchStatic}
                gifFieldPosition="even"
              />
            </AnimatedListItem>

            <AnimatedListItem>
              <ProjectCard
                pojectTitle="Portfolio"
                projectDescription={`The goal of the "Portfolio" project is to create a
                  user-friendly and attractive platform for presenting my
                  professional activities, skills, and achievements in the field
                  of programming. The website provides up-to-date information
                  about my skills and the technologies I use, making it easier
                  to explore new opportunities and collaborate with other
                  professionals in the programming and software development
                  industry.`}
                technologies="React, JavaScript, Sass,
                  Framer Motion."
                githubLink="https://github.com/tonni004/my-portfolio"
                demoLink="https://portfolio-tonni004.netlify.app/"
                showGif={showGif}
                toggleGif={toggleGif}
                gif={PortfolioGif}
                staticImage={PortfolioStatic}
                gifFieldPosition="odd"
              />
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
