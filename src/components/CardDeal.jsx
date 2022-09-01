import { card } from '../assets'
import styles, { layout } from "../style";
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet. In voluptatem quas et eligendi esse repellendus vero ut quod quas quo internos magni ut voluptate inventore qui tenetur animi. Est beatae voluptatem quo amet commodi est dignissimos molestiae vel totam corporis</p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )

export default CardDeal