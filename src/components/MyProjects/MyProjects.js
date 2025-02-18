import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import s from './MyProjects.module.scss';

import Container from 'components/Container';
import Section from 'components/Section';
import ProjectCard from 'components/ProjectCard';

// images and gif
import ExBookChangeStatic from '../../images/ex-book-change-static.png';
import ExBookChangeGif from '../../images/ex-book-change.gif';
import PhonebookGif from '../../images/phonebookapp.gif';
import PhonebookStatic from '../../images/phonebook-static.jpg';
import MovieSearchGif from '../../images/moviesearchapp.gif';
import MovieSearchStatic from '../../images/movie-static.jpg';
import PortfolioStatic from '../../images/portfolio-static.jpg';
import PortfolioGif from '../../images/portfolio.gif';
import ReactProductCatalogStatic from '../../images/react-product-catalog.png';
import ReactProductCatalogGif from '../../images/react-product-catalog.gif';

export default function MyProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref);

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
                pojectTitle="ex-book change"
                projectDescription={
                  <>
                    Ex-Book Change is a mobile version of a web application for
                    book exchange and sale, designed for the convenience and
                    efficiency of book enthusiasts. Utilizing modern Firebase
                    technologies, including Realtime Database, Storage, and
                    Authentication, I have created an intuitive and functional
                    application that will help you free up your bookshelves and
                    find new connections with people who share your love for
                    books.
                    <br />
                    <br />
                    Login Credentials:
                    <br />
                    Email: test2@mail.com
                    <br />
                    Password: reporepo
                  </>
                }
                technologies="React, Firebase, React
                  Router DOM, Sass, NextUI, Framer
                  Motion, Mobile first version."
                githubLink="https://github.com/tonni004/ex-book-change-app"
                demoLink="https://ex-book-change.netlify.app/"
                gif={ExBookChangeGif}
                staticImage={ExBookChangeStatic}
                gifFieldPosition="odd"
              />
            </AnimatedListItem>

            <AnimatedListItem>
              <ProjectCard
                pojectTitle="React Product Catalog"
                projectDescription={`React Product Catalog is a project developed as part of the Mate Academy course. It represents a basic version of an online store built according to a provided design. The application includes functionality for browsing a product catalog, adding items to the shopping cart or favorites, and interacting with detailed product information.

The homepage features a dynamic image slider, sections showcasing hot deals and new arrivals, as well as dedicated categories for phones, tablets, and accessories. Category pages allow users to sort products by various criteria, use pagination, and view available items. If no products are found or there are loading errors, appropriate messages are displayed.

The product details page enables users to select available colors, memory capacities, and view alternative images of the product. It also includes a "You may also like" section with recommended products. For better navigation, breadcrumbs are implemented at the top of the page. Shopping cart functionality allows users to add or remove items, adjust quantities, and see the total price and quantity updated automatically. Cart data, along with the favorites list, is saved in localStorage to persist across sessions.`}
                technologies="React, React
                  Router, Sass, JavaScript, Responsive Design."
                githubLink="https://github.com/tonni004/react_phone-catalog"
                demoLink="https://tonni004.github.io/react_phone-catalog/"
                gif={ReactProductCatalogGif}
                staticImage={ReactProductCatalogStatic}
                gifFieldPosition="even"
              />
            </AnimatedListItem>

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
                  Motion, Responsive Design."
                githubLink="https://github.com/tonni004/phonebook-app"
                demoLink="https://tonni004.github.io/phonebook-app/"
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
                  Framer Motion, Responsive Design."
                githubLink="https://github.com/tonni004/react_phone-catalog"
                demoLink="https://tonni004.github.io/react_phone-catalog/"
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
  const isInView = useInView(ref, { rootMargin: '-30px' });

  return (
    <motion.li
      ref={ref}
      style={{
        transform: isInView ? 'scale(1)' : 'scale(0.8)',
        opacity: isInView ? 1 : 0.6,
        transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s`,
      }}
    >
      {children}
    </motion.li>
  );
}
