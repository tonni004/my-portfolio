import { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import s from './AnchorButton.module.scss';

import { ThemeContext } from 'components/BodyTheme/BodyTheme';

const sections = [
  { id: 'bio', label: 'Bio', short: 'B' },
  { id: 'aboutme', label: 'About me', short: 'A' },
  { id: 'myskills', label: 'Skills', short: 'S' },
  { id: 'myprojects', label: 'Projects', short: 'P' },
  { id: 'mycontact', label: 'Contacts', short: 'C' },
];

export default function AnchorButtons() {
  const { theme } = useContext(ThemeContext);
  const [currentSection, setCurrentSection] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleScroll = () => {
    const sectionsElements = document.querySelectorAll('section');
    const headerHeight = 94;

    sectionsElements.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setCurrentSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={s.AnchorButtonsField}>
      <ul>
        {sections.map(({ id, label, short }) => (
          <li
            key={id}
            onMouseEnter={() => setHoveredSection(id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {hoveredSection === id && (
              <motion.div
                className={s.Tooltip}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                transition={{ duration: 0.3 }}
              >
                {label}
              </motion.div>
            )}
            <a
              className={classNames(s.ButtonLink, s[theme], {
                [s.active]: currentSection === id,
              })}
              href={`#${id}`}
            >
              <span>{short}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
