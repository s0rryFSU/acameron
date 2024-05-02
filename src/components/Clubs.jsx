/* eslint-disable react/prop-types */
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { clubs } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ClubCard = ({ index, name, position, date, description, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    scale: 1,
                    speed: 450,
                    max: 45,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <a href={source_code_link} target="_blank" rel="noopener noreferrer">
                    <div className='relative w-full h-[230px]'>
                        <img
                            src={image}
                            alt='club image'
                            className='w-full h-full object-cover rounded-2xl'
                        />

                        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        </div>
                    </div>
                </a>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-1 text-secondary text-[14px]'>{position}</p>
                    <p className='mt-1 text-secondary text-[14px]'>{date}</p>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

            </Tilt>
        </motion.div>
    )
}

const Clubs = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Extracurricular Activity</p>
        <h2 className={`${styles.sectionHeadText}`}>Clubs.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("right", "spring", 0.1, 0.1)}
          className='mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]'
        >
            Here are some of the clubs that I am involved in. I am currently the Treasurer of the UNB Cybersecurity Club. I am also a member of the UNB Robotics Club Revival Project, where we are working to bring the club back to its former glory. I have been involved in organizing club meetings, workshops, and competitions, as well as recruiting new members and promoting the clubs on campus.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {clubs.map((project, index) => (
          <ClubCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

const WrappedClubs = SectionWrapper(Clubs, "club");
export default WrappedClubs