import style from './AboutContainer.module.css';
import star from '../../../assets/icons/iconStar.png'
import image from '../../../assets/images/meAnd.jpg'
import Button from '../../Button';
import SocialsButtons from '../../SocialsButtons';


function AboutContainer() {
    return (
        <section className={style.aboutContainer}>
            <div className={style.title}>
                <div className={style.titleTextContent}>
                    <h3>About</h3>
                    <h2>I am Matvey</h2>
                </div>
                <Button customClass={style.titleButton}>Know More &rarr;</Button>
            </div>

            <div className={style.content}>

                <div className={style.imageContainer}>
                    <img src={image} alt="Мое изображение" />
                </div>

                <div className={style.articlesContainer}>
                    <article className={style.introduction}>
                        <div className={style.title}>
                            <img src={star} alt="" />
                            <h4>Introduction</h4>
                        </div>
                        <p>
                            My journey as a photographer has been a lifelong quest to capture the extraordinary in the
                            ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it.
                            Based in the enchanting landscapes of the USA, I find inspiration in every corner of this
                            diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph
                            tells a story, and every frame is a piece of my heart.
                        </p>
                    </article>

                    <article className={style.contactInfo}>
                        <div className={style.title}>
                            <img src={star} alt="" />
                            <h4>Contact Information</h4>
                        </div>
                        <div className={style.infoContainer}>
                            <div className={style.email}>
                                <h5>Email</h5>
                                <a href="mailto:kicksukoh@gmail.com">kicksukoh@gmail.com</a>
                            </div>
                            <div className={style.phoneNumber}>
                                <h5>Phone Number</h5>
                                <a href="tel:+70000000000">+7 0000000000</a>
                            </div>
                        </div>
                        <div className={style.interaction}>
                            <SocialsButtons customClass={style.socials}/>
                            {/* <div className={`globalSocials ${style.socials}`} >
                                <button className="fb"></button>
                                <button className="x"></button>
                                <button className="in"></button>
                            </div> */}
                            <div className={style.actionButtonsContainer}>
                                <Button customClass={style.actionButton}>Let’s Work</Button>
                                <Button customClass={style.actionButton}>Download CV</Button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default AboutContainer;
