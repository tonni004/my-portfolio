import React, { useState, useEffect, useRef, useContext, useCallback } from "react";
import classNames from 'classnames';
import s from './Navigate.module.scss';
import Container from 'components/Container';
import { ThemeContext } from 'components/BodyTheme/BodyTheme';
import SwitchThemeButton from 'components/SwitchThemeButton';

export default function Navigate() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const { theme } = useContext(ThemeContext);

    const burgerMenuRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
        if (isOpen && burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }, [isOpen, setIsOpen, burgerMenuRef]);


    useEffect(() => {

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen, handleClickOutside]);
    // 
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    return (
        <nav className={classNames(s.NavigationField, s[`${scrollPosition > 690 ? `FixedNav` : null}`], s[theme])} role="navigation">
            <Container>

                <div className={classNames(s.NavBar, s[isOpen])} ref={burgerMenuRef}>
                    <input type="checkbox"
                        checked={isOpen}
                        onChange={() => setIsOpen(!isOpen)} />
                    <span></span>
                    <span></span>
                    <span></span>
                    <div
                        className={classNames(s.BurgerMenu, s[isOpen])} ref={burgerMenuRef}>

                        <SwitchThemeButton />

                        <ul className={classNames(s.NavigateList)}>
                            <li className={s.NavItem}><a className={s.NavLink} href="https://www.linkedin.com/in/tanya-baletska-06377828a/">LinkedIn</a></li>
                            <li className={s.NavItem}><a className={s.NavLink} href="https://github.com/tonni004">Github</a></li>
                            <li className={s.NavItem}><a className={s.NavLink} href="# ">Resume</a></li>
                        </ul>
                    </div>


                </div>

            </Container>

        </nav>
    )
}









