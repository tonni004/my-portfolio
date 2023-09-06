import s from './Section.module.scss';

export default function Section({ children }) {
    return (
        <div className={s.Section}>
            {children}
        </div>
    )
}