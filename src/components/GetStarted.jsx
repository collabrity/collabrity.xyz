import styles from '../style';
import { start } from '../assets';

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-dimWhite w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <span className='text-black'>Get</span>
        </p>
        <img src={start} alt="arrow" className="w-[20px] h-[20px] object-contain"/>
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-black'>Started</span>
        </p>
    </div>
  </div>
)

export default GetStarted