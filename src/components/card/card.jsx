import styles from './Card.module.css'
import cat01img from './../../img/categories/cat-01.jpg'
import arrowImg from './../../img/icons/arrow.svg'


const card = () => {
    return ( 
        <div className={styles.card}>
            <a href="#!" className={styles.card__link}></a>
            <img className={styles.card__img} src={cat01img} alt="photo" />

            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>Hoodies & Sweetshirt</div>
                    <div className={styles.card__muted}>Explore Now!</div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowImg} alt="arrow" />
                </div>
            </div>
        </div>
     );
}
 
export default card;