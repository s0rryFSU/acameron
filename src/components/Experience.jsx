/* eslint-disable react/prop-types */

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement 
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    // date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text[24px] font-bold">
        {experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0}}>
          {experience.company_name}
        </p>
        {/* i moved experience from the bottom to the top of each experience block */}
        <p className='text-white text[16-px] font-bold'>
          {experience.date}
        </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='text-white text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I've done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience. <a href="https://www.linkedin.com/in/alexander-cameron-pfp-8b4b3333/" className='text-blue-500 underline'>LinkedIn</a></h2>
      </motion.div>
      
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={`experience-${index}`} 
              experience={experience}
              />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

// export default Experience;
const WrappedExperience = SectionWrapper(Experience, "experience");
export default WrappedExperience;