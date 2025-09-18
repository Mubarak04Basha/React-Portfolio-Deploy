import React, { useEffect } from 'react'
import { useInView, useAnimate } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'
import emojiPixel from '../../assets/pixel-emojis.jpg'
import jsonIcon from '../../assets/jsondb.jpg'
import morseWeb from '../../assets/morse-in-one.jpg'

import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  useEffect(() => {
    if (isInView) {
      //   console.log('in view')
      animate(
        aboutRef.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 0.2,
          delay: 0.2,
        },
      )
    } else {
      //   console.log('not in view')
      animate(aboutRef.current, { opacity: 0, x: 100 })
    }
  }, [isInView])

  return (
    <div
      className=" w-full min-h-screen flex flex-col items-center justify-center text-center gap-4 lg:gap-8 "
      id="projects"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl mb-4 font-bold">Projects</h1>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
          <ProjectCard
            title="Javascript Library"
            description="This is papa's Book store It's uses to store our description and also to click to add a title, Description content to save then store to view our content box and it's very usefull there are fundementals are use commonly."
            image={emojiPixel}
            link="http://papasbookstore.netlify.app"
            delay={0.2}
            
          />
          <ProjectCard
            title="Hotel Management"
            description="It's uses mainly purpose for we have to take with orders and currently we need to separate modules to be here on there Etc.."
            image={jsonIcon}
            link="https://almadinarestaurant.netlify.app/"
            delay={0.4}
          />
        </div>
        <div className="w-full flex justify-center mt-4"></div>
      </div>
    </div>
  )
}
