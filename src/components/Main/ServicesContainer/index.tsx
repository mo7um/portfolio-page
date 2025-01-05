import style from './ServicesContainer.module.css';
import Button from '../../Button';

function ServicesContainer() {
    return (
        <section className={style.servicesContainer}>
            <div className={style.title}>
                <div className={style.titleTextContent}>
                    <h3>Services</h3>
                    <h2>My Photography Services</h2>
                </div>

                <div className={style.titleButtonsContainer}>
                    <div className={style.turnButtonsContainer}>
                        <Button variant="turn" customClass={style.prevButton}></Button>
                        <Button variant="turn" customClass={style.nextButton}></Button>
                    </div>
                    <Button customClass={style.titleButton}>View All Services &rarr;</Button>
                </div>
            </div>

            <div className={style.content}>
                <div className={style.articlesContainer}>

                    <article className={style.events}>
                        <div className={style.eventsTitle}>
                            <h4>EVENTS</h4>
                            <Button variant="secondary" />
                        </div>
                        <p>
                            Our event photography service is dedicated to capturing the magic of your special occasions.
                            Whether it's a wedding, corporate event, or milestone celebration, we're there to document
                            every heartfelt moment. We blend into the background, ensuring natural and candid shots that
                            reflect the emotions of the day
                        </p>
                    </article>

                    <article className={style.serviceHighlights}>
                        <h5>Service Highlights</h5>
                        <div className={style.highlightsContainer}>
                            {/* Добавить заполнение элементами  с помощью map */}
                            <div className={style.highlightItem}>
                                <img src="" alt="" />
                                <span></span>
                            </div>
                        </div>
                    </article>
                </div>

                <img src="" alt="" className={style.myImage}/> {/* Изображение */}
            </div>
        </section>
    );
}

export default ServicesContainer;
