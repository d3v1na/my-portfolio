import React from 'react'
import '../Styles/About.css'

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

function About() {
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
    <div id = 'About'>
      <section className="heading">
              <motion.div className= "scroller" style={{x}}>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
                  <motion.span>about </motion.span>
              </motion.div>
          </section>
      <div>
          <h6 className='desc'>i'm a web developer and ux designer based in india,
  ‍
          currently pursuing a b.tech in computer science from shiv nadar university.

          please scroll down to view some of the work i've done :D</h6>
      </div>
    </div>
  )
}

export default About