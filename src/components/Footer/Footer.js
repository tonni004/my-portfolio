import { useContext } from "react";
import classNames from "classnames";
import s from "./Footer.module.scss";
import Container from "components/Container";

import { ThemeContext } from "components/BodyTheme/BodyTheme";

export default function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={classNames(s.Footer, s[theme])}>
            <div className={classNames(s.DecorationLine, s[theme])}></div>
            <div className={s.FooterBackground}>
                <Container>
                    <p><span>&copy;</span> 2023 Portfolio. Designed & coded by Tanya Baletska</p>
                </Container>
            </div>
        </footer>

    )
}