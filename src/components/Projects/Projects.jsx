import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../Home/ProjectCard'
import emojiPixel from '../../assets/pixel-emojis.jpg'
import jsonIcon from '../../assets/jsondb.jpg'
import morseIcon from '../../assets/morse-in-one.jpg'
import memeImg from '../../assets/meme.jpeg'
import testGif from '../../assets/teminal_test_your_luck2-min.gif'

import morseCodeGen from '../../assets/morse-code-generator.png'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      style={{
        color: colorTheme.primaryText,
      }}
      className="flex flex-col justify-center items-center gap-4  w-full min-h-screen text-center my-8"
    >
      {' '}
      <h1 className="text-4xl text-center font-bold text-[#FD8D14]">
        Projects Experience
      </h1>
      <div>
        <p className="text-center text-xl mt-4">
          Front End Developer with Hands on in HTML,CSS,JAVASCRIPT,REACTJS
          dedicated to designing and implementing responsive and scalable user
          interfaces created Dynamic React js and UI Components enhancing
          interactivity and user experience.
        </p>
        <p className="text-center text-xl mt-4">
          In Organized and Tracked project Milestones ensuring smooth
          Communication between technical teams Designed a Browser a Web
          Application This is a Food Website to Very Helpfull Site for Customers
          Peoples like there Time Consumtion will save for us Etc..
        </p>
        <p className="text-center text-xl mt-4">
          And Make Using React js Framework for create Todolist,Weather
          App,Personal Portfolio using API's and Fetching Data using
          Understandable Hooks Reusable Components To Create a UI interfaces
          Passing Props most of us makes to create a sample Application Etc....
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4"></div>
    </div>
  )
}
