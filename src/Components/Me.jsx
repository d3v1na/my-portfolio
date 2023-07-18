import React, { Children } from 'react'
import PropTypes from 'prop-types'
import '../Styles/Me.css'

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

function Me(props) {
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
        

        <section className="heading">
            <motion.div className= "scroller" style={{x}}>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
                <motion.span>me </motion.span>
            </motion.div>
        </section>
            <div className='me'>
                <h3 className='sideText'>me</h3>
                <img src={require('../Assets/me.png')} />
            </div></>
  )
}

Me.propTypes = {}

export default Me


