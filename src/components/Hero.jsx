import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas'; 
import { Suspense, useEffect, useState } from 'react';

const Hero = () => {
  
  const [loadCanvas, setLoadCanvas] = useState(false);

  useEffect(() => {
    // Timeout to delay the rendering of ComputersCanvas
    const timer = setTimeout(() => {
      setLoadCanvas(true); // This will enable the rendering of ComputersCanvas
    }, 500); // Delay of 500 milliseconds; adjust as necessary

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Welcome, I'm <span className='text-[#915eff]'>Alexander Cameron</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am making a website so I can get a job. <br className='sm:block hidden'/> Tap the scroll wheel below to check out my resume! 
          </p>
        </div>
      </div>
      <span> &nbsp; </span>

      {loadCanvas && (
      <Suspense fallback={<div>Loading...</div>}>
          <ComputersCanvas />
      </Suspense>
      )}

      <div className='absolute xs:bottom-5 bottom-5 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero