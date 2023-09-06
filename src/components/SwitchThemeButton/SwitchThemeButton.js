import { useContext } from "react";
import { motion } from "framer-motion";
import s from "./SwitchThemeButton.module.scss";

import { ThemeContext } from "components/BodyTheme/BodyTheme";

export default function SwitchThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={s.Switch} data-ison={theme} onClick={toggleTheme}>
            <motion.div className={s.Handle} />
        </div>
    );
}
