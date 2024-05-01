import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What Programs do I have Experience With?</p>
    <h2 className={styles.sectionHeadText}>Tech.</h2>
    </motion.div>

    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  )
}

const WrappedTech = SectionWrapper(Tech, "tech");
export default WrappedTech;