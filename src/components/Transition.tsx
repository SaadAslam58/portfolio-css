'use client';
import React from 'react'
import {motion} from 'framer-motion'
const TransitionVarients = {
initial: {
    y:'100%',
    height:'100%'
},
animate: {
     y:'0%',
    height:'0%'
},
exit: {
    y: ['0%', '100%'],
    height: ['0%', '100%'],
}

}


const Transition = () => {
  return (
    <div>
    <motion.div 
    className='transition-1'
        variants={TransitionVarients}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}
        />
    <motion.div 
    className='transition-2'
        variants={TransitionVarients}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}
        />
    <motion.div 
    className='transition-3'
        variants={TransitionVarients}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}
        />
</div>
  )
}

export default Transition