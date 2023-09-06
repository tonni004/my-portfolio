import { useContext } from "react";
import classNames from "classnames";
import s from './AnchorButton.module.scss';

import { ThemeContext } from "components/BodyTheme/BodyTheme";


export default function AnchorButtons() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={s.AnchorButtonsField}>
            <ul>
                <li>
                    <a className={classNames(s.ButtonLink, s[theme])} href="#bio"><span>B</span></a>
                </li>
                <li>
                    <a className={classNames(s.ButtonLink, s[theme])}
                        href="#aboutme"><span>A</span></a>
                </li>
                <li>
                    <a className={classNames(s.ButtonLink, s[theme])} href="#myskills"><span>S</span></a>
                </li>
                <li>
                    <a className={classNames(s.ButtonLink, s[theme])} href="#myprojects"><span>P</span></a>
                </li>
            </ul>

        </div>
    )
}