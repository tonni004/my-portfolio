import { BarLoader } from "react-spinners";
import s from './Loader.module.scss';

export const Loader = () => {
    return (
        <div className={s.LoaderField}>
            <BarLoader color="#8f94fb" height={4} />
        </div >
    )
}