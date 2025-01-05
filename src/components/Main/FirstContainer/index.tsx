import style from './FirstContainer.module.css';
import Button from '../../Button';
import abstractDesign from '../../../assets/icons/iconAbstract.png';
import favoriteIcon from '../../../assets/icons/iconFavorites.png';
import favoritesData from '../../../data/favorites.json';


function FirstContainer() {
    return (
        <div className={style.firstContainer}>
            <section className={style.topSubContainer}>
                <div className={style.leftTextBlock}>
                    <h3>УЙО Photography by</h3>
                    <h2>Matvey Vidyasov</h2>
                </div>
                <img src={abstractDesign} alt="Abstract Design" />
                <div className={style.rightTextBlock}>
                    <span>Let’s</span>
                    <Button variant='secondary' customClass=''></Button> {/* НАСТРОИТЬ КНОПКУ ДЛЯ ИЗМЕНЕНИЯ ВНУТРИ РОДИТЕЛЬСКОГО КЛАССА */}
                    <p>Work Together</p>
                </div>
            </section>

            <div className={style.bottomSubContainer}>

                <div className={style.favoritesContainer}>
                    {favoritesData.favorites.map((favorite) => (
                    <div key={favorite.id} className={style.favoriteItem}>
                        <img src={favoriteIcon} alt="Star" />
                        <a href={favorite.link}>{favorite.name}</a>
                    </div>
                    ))}
                </div>

                <div className={style.collage}>
                    <div className={style.collageImage} id="foto1"></div>
                    <div className={style.collageImage} id="foto2"></div>
                    <div className={style.collageImage} id="foto3"></div>
                    <div className={style.collageImage} id="foto4"></div>
                    <div className={style.collageImage} id="foto5"></div>
                    <div className={style.collageImage} id="foto6"></div>
                </div>

            </div>
        </div>
    );
}

export default FirstContainer;
