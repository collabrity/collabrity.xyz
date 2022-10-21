import { collaborate } from '../constants';
import styles from '../style';

const Collaborate = () => (
  <section className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6`}>
    {collaborate.map((collab) => (

      <div key={collab.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
          <img src={collab.icon} className='w-[43px] h-[32px] p-[5px] bg-blue-gradient rounded-full' />{collab.title}
        </h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 mt-8'>{collab.content}</p>
      </div>
    ))}
  </section>
)

export default Collaborate