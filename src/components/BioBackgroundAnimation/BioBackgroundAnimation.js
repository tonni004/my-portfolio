import { useContext } from 'react';
import classNames from 'classnames';
import s from './BioBackgroundAnimation.module.scss';
import { ThemeContext } from "components/BodyTheme/BodyTheme";


export default function BioBackgroundAnimation({ children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            {children}
            <div className={classNames(s.BackgroundField, s[theme])} >
                <div className={s.BlurOverlay}></div>
                <div className={classNames(s.DecorateLine, s[theme])}></div>
                <ul className={s.Circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </div>
    )
}