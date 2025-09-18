import React from 'react'
import { useSelector } from 'react-redux'

export default function AboutIntro() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      style={{
        color: colorTheme.primaryText,
      }}
      className="text-center mt-4 max-w-[800px]"
    >
      <h1 className="text-4xl font-bold">Hi, I am Mubarak Basha</h1>
      <div className="mt-2">
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Developer
        </span>{' '}
        | {` `}
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          student
        </span>{' '}
        | {` `}
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Fresher
        </span>{' '}
        | {` `}
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          web developer
        </span>
      </div>
      <p className="text-xl mt-8">
        Hi there! {`I'm`} a front End web developer and a BCA student who loves
        to create awesome web applications. I am more confident in frontend ,but
        I am still learing about databases and concepts. As a developer I enjoy
        learning new technologies . {`I'm`} always looking for opportunities to
        improve my skills and work on exciting projects.Thanks for stopping by!
      </p>
    </div>
  )
}
