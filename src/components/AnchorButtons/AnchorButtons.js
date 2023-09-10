import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames';
import s from './AnchorButton.module.scss';

import { ThemeContext } from 'components/BodyTheme/BodyTheme';

export default function AnchorButtons() {
  const { theme } = useContext(ThemeContext);
  const [currentSection, setCurrentSection] = useState(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const headerHeight = 94;
    sections.forEach(section => {
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
        <li>
          <a
            className={classNames(s.ButtonLink, s[theme], {
              [s.active]: currentSection === 'bio',
            })}
            href="#bio"
          >
            <span>B</span>
          </a>
        </li>
        <li>
          <a
            className={classNames(s.ButtonLink, s[theme], {
              [s.active]: currentSection === 'aboutme',
            })}
            href="#aboutme"
          >
            <span>A</span>
          </a>
        </li>
        <li>
          <a
            className={classNames(s.ButtonLink, s[theme], {
              [s.active]: currentSection === 'myskills',
            })}
            href="#myskills"
          >
            <span>S</span>
          </a>
        </li>
        <li>
          <a
            className={classNames(s.ButtonLink, s[theme], {
              [s.active]: currentSection === 'myprojects',
            })}
            href="#myprojects"
          >
            <span>P</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
