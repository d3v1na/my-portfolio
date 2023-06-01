import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Me.css'

import{
    useScroll,
    useTransform,
    motion
  } from "framer-motion";
  
  import{
    useEffect,
    useState
  } from "react";



function Me(props) {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const x1 = useTransform(scrollYProgress, [0, 1], [0, 600]);
    return (
        <>
        
        <section className="heading">
            <motion.div style={{ x: x }}>
                <ul>
                    <li>me</li>
                    <li>me</li>
                    <li>me</li>
                    <li>me</li>
                    <li>me</li>
                    <li>me</li>
                    <li>me</li>
                    <li>me</li>
                    <li>me</li>
                    <li>me</li>
                    <li>me</li>
                </ul>
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


