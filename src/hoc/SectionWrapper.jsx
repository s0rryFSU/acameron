import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <motion.section
        onAnimationStart={() => console.log("Animation started")}
        onAnimationComplete={() => console.log("Animation completed")}
        variants={staggerContainer()} 
        initial='hidden'  // start from hidden state
        whileInView='show'  // transition to show when in view
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };


export default SectionWrapper;