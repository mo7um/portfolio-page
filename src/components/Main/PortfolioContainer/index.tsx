import style from './PortfolioContainer.module.css';
import Button from '../../Button';

function PortfolioContainer() {
    return (
        <section className={style.portfolioContainer}>

            <div className={style.title}>
                <div className={style.titleTextContent}>
                    <h3>Portfolio</h3>
                    <h2>Explore My photography work.</h2>
                </div>

                <div className={style.titleButtonsContainer}>
                    <div className={style.turnButtonsContainer}>
                        <Button variant="turn" customClass={style.prevButton}></Button>
                        <Button variant="turn" customClass={style.nextButton}></Button>
                    </div>
                    <Button customClass={style.titleButton}>View All Works &rarr;</Button>
                </div>

                <div className={style.content}>

                    {/* Заполнить по шаблону с помощью map */}
                    <article className='contentItem'>
                        <img src="" alt="" />
                        <div className={style.infoContainer}>
                            <div className={style.textInfo}>
                                <h5>{}</h5>
                                <p>{}</p>
                            </div>
                            <div className={style.linkInfo}>
                                <a href="">View project</a>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}

export default PortfolioContainer;