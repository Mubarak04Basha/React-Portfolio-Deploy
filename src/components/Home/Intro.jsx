import React from 'react'
import PropTypes from 'prop-types'
import Mubarak from '../../assets/Mubarak.png'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import './../../css/fonts.css'

export default function Intro() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  // const theme = useSelector((state) => state.mode.darkMode)

  function BounceSpan({ children }) {
    return (
      <motion.span
        whileHover={{ y: -10 }}
        style={{ color: colorTheme.mainHeading }}
        className=""
      >
        {children}
      </motion.span>
    )
  }

  BounceSpan.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
      className="w-full flex flex-col items-center text-center gap-4 lg:gap-8 max-w-[600px]  h-screen"
      style={{ color: colorTheme.primaryText }}
    >
      <span id="intro" className=" h-[4rem]"></span>
      <div className="max-w-[300px] w-full">
        <motion.img
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          src={Mubarak}
          alt="Mubarak"
          className="w-full rounded-full"
        />
      </div>
      <div className="flex flex-col gap-3 items-center  ">
        <div
          className="text-4xl font-bold font-['Borel']  "
          style={{ fontFamily: 'Raleway,sans-serif' }}
        >
          <BounceSpan>M</BounceSpan>
          <BounceSpan>U</BounceSpan>
          <BounceSpan>B</BounceSpan>
          <BounceSpan>A</BounceSpan>
          <BounceSpan>R</BounceSpan>
          <BounceSpan>A</BounceSpan>
          <BounceSpan>K</BounceSpan>
          <BounceSpan>B</BounceSpan>
          <BounceSpan>A</BounceSpan>
          <BounceSpan>S</BounceSpan>
          <BounceSpan>H</BounceSpan>
          <BounceSpan>A</BounceSpan>
        </div>
        <h3 className="text-2xl">REACT JS DEVELOPER</h3>
        <p className="text-xl">
          I am a Front End Developer computer application student. I love to
          code and learn new technologies Like How to start a project and to
          finish with designing deploying on there web applications and find
          best for there. Looking for good opportunities to work with a team of
          developers.
        </p>
      </div>
    </motion.div>
  )
}
