import { Dock, Navbar, Welcome } from '#components'
import React from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/draggable'
import { Safari, Terminal, Resume, Finder, Text } from '#windows'
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
   </main>
  )
}

export default App