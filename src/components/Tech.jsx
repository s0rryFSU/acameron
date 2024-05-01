import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

const WrappedTech = SectionWrapper(Tech, "tech");
export default WrappedTech;