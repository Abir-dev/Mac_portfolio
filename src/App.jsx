import { Dock, Home, Navbar, Welcome } from '#components'
import React from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/all'
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, Photo } from '#windows'
gsap.registerPlugin(Draggable)

const App = () => {
  return (
   <main>
    <Navbar />
    <Welcome />
    <Dock />
    
    <Terminal />
    <Safari />
    <Resume />
    <Finder />
    <Text />
    <Image />
    <Contact />
    <Home />
    <Photo />
   </main>
  )
}

export default App