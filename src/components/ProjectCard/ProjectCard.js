import { useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './ProjectCard.module.scss';

import { ThemeContext } from 'components/BodyTheme/BodyTheme';

// svg
import Github from '../../images/svg/github.svg';
import PlayBtn from '../../images/svg/play-arrow-svgrepo-com.svg';
import StopBtn from '../../images/svg/stop-button-svgrepo-com.svg';

export default function ProjectCard({
  pojectTitle,
  projectDescription,
  technologies,
  githubLink,
  demoLink,
  gif,
  staticImage,
  gifFieldPosition,
}) {
  const { theme } = useContext(ThemeContext);
  const [showGif, setShowGif] = useState(false);

  const toggleGif = () => {
    setShowGif(!showGif);
  };

  return (
    <div className={classNames(s.CardField, s[theme])}>
      <h3>{pojectTitle}</h3>
      <p className={classNames(s.DescriptionText, s[theme])}>
        {projectDescription}
      </p>
      <p className={s.TechnologiesText}>
        <span>Technologies Used:</span> {technologies}
      </p>

      <div className={s.LinkField}>
        <a
          className={s.IconLink}
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <ReactSVG src={Github} />
        </a>
        <a
          className={s.DemoLink}
          href={demoLink}
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
      </div>

      <div className={classNames(s.GifField, s[gifFieldPosition])}>
        <div className={s.GifOverlay}>
          {showGif ? <ReactSVG src={StopBtn} /> : <ReactSVG src={PlayBtn} />}
        </div>
        {showGif ? (
          <img src={gif} onClick={toggleGif} alt={`${pojectTitle} gif`} />
        ) : (
          <img
            src={staticImage}
            alt={`${pojectTitle} static`}
            onClick={toggleGif}
          />
        )}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  pojectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  gifFieldPosition: PropTypes.string,
};
