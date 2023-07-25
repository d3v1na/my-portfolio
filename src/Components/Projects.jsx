import React from 'react'
import '../Styles/Projects.css'
import Project from './Project';

import{
    useScroll,
    useTransform,
    motion,
    useSpring,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap
  } from "framer-motion";

  import{
    useEffect,
    useState,
    useRef
  } from "react";

function Projects() {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 300 });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

    const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * -5 * (delta / 1000);
        if (velocityFactor.get() <0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        if (velocityFactor.get() !== 0) {
            moveBy += directionFactor.current * moveBy * velocityFactor.get();
            baseX.set(baseX.get() + moveBy);
        }
    });
  return (
    <>
        <section className='proj'>
            <motion.div className= "scroller" style={{x}}>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
                <motion.span>projects </motion.span>
            </motion.div>
        </section>
        <div>
                <Project name = 'PointX' description = 'PointX is a single app for collecting and redeeming loyalty points, that can be exchanged between stores, helping brands with customer loyalty.'/>
                {/*project*/}
                {/*project*/}
                {/*project*/}
                {/*project*/}
        </div>
    </>
    
  )
}

export default Projects