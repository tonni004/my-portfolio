import s from './Bio.module.scss';
import BioBackgroundAnimation from '../BioBackgroundAnimation/BioBackgroundAnimation';
// image
import Photo from '../../images/portfolio-photo.JPG';

export default function Bio() {
    return (
        <div id="bio">
            <BioBackgroundAnimation>
                <div className={s.BioField}>
                    <div>
                        <img className={s.Photo} src={Photo} width="130" height="130" alt="PortfolioPhoto" />
                    </div>
                    <p className={s.InfoText}>Hi! I'm Tanya. A Front-end Developer and a
                        <span className={s.FlipContainer}>
                            <span> mother of cats </span>
                            <span> book lover </span>
                            <span> chemical engineer </span>
                        </span>
                        from the freest country in the world.
                        Welcome to my portfolio!</p></div>
            </BioBackgroundAnimation>

        </div>
    )
}