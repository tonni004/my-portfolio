import { useContext, useRef } from 'react';
import s from './Form.module.scss';
import { motion, useInView } from 'framer-motion';
import classNames from 'classnames';
import Container from 'components/Container';
import AvatarGif from '../../images/avatar.gif';

import { ThemeContext } from 'components/BodyTheme/BodyTheme';

export default function Form() {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className={s.Section} id="mycontact">
      <Container>
        <div className={s.FormSection} ref={ref}>
          <div className={s.DecorateField}>
            <motion.div
              style={{
                opacity: isInView ? 1 : 0,
                transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s`,
              }}
            >
              <span className={s.Circle}></span>

              <motion.h3
                style={{
                  transform: isInView ? 'translateY(0)' : 'translateY(-40px)',
                  transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)`,
                }}
                className={s.RorateTitle}
              >
                Thank you
              </motion.h3>
              <p className={s.StaticText}>for investing your time in</p>
              <p className={s.PositionText}>reviewing my portfolio!</p>
            </motion.div>

            <motion.div
              className={s.InformationField}
              style={{
                opacity: isInView ? 1 : 0,
                transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s`,
              }}
            >
              <p>
                If my works resonates with you, fantastic! I'm open to the
                possibility of working together.
              </p>
              <img className={s.Avatar} src={AvatarGif} alt="Avatar" />
            </motion.div>
          </div>
          <form
            name="feedback"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
            netlify-honeypot="bot-field"
            style={{
              transform: isInView ? 'scale(1)' : 'scale(0.5)',
              opacity: isInView ? 1 : 0,
              transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s`,
            }}
          >
            <input type="hidden" name="form-name" value="feedback" />
            <div hidden>
              <input name="bot-field" />
            </div>
            <div className={classNames(s.Form, s[theme])}>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  required
                />
                <label htmlFor="name">Name </label>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <p>
              <textarea
                className={classNames(s.MessageField, s[theme])}
                name="message"
                placeholder="Your message.."
                required
              ></textarea>
            </p>
            <p>
              <button
                className={classNames(s.SubmitButton, s[theme])}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                type="submit"
              >
                Send
              </button>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
