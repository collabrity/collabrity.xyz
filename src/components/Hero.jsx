import styles from '../style';
import { discount, wave } from "../assets";
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-1 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          Limited time <b><span className='text-white'>
            50%
          </span></b> discount on <span className='text-white'><a href='/'>Premium</a></span>
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[48px] text-[42px] text-white ss:leading-[90px] leading-[75px]'>
          <span className='text-gradient ss:text[30px]'>COLLABORATE</span>
          <br className='sm:block hidden' /> {" "}
          MUSICALLY
        </h1>

        <div className='ss:flex hidden md:mr-4 mr-0 ml-4'>
          <GetStarted />
        </div>
      </div>
      <br></br>
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-dimWhite ss:leading-[100px] leading-[75px] w-full'>
        About Us
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We are a collaborative website built to allow artists, producers, musicians, and labels to find each other, work together, and build something beautiful.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={wave} alt="music" className='w-[80%] h-[80%] relative z-[5] ml-1 object-contain' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'>
      </div>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'>
      </div>
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </div>
  </section>
)

export default Hero