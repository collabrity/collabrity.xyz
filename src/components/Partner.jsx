import { handshake, headphones, discord } from "../assets";
import styles, { layout } from '../style';

const Partner = () => (
  <section id="partner" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={headphones} alt="dvd" className="w-[40%] h-[80%] z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Interested in partnering?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Users who've solidified multiple tracks have the opportunity to partner with collabrity.
      </p>
      
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="/" target="_blank"><img src={handshake} alt='partner' className='w-[128px] h-[64px] object-contain mr-5 cursor-pointer bg-blue-gradient rounded-full' />
        </a>
        <a href="/" target="_blank"><img src={discord} alt='discord' className='w-[128px] h-[64px] object-contain cursor-pointer bg-blue-gradient rounded-full' /></a>
      </div>
    </div>
  </section>
)
export default Partner