import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import Experience from './components/Experience.jsx'
import AlsoMe from './components/AlsoMe.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

const snapWrap = {
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
}

export default function App() {
  return (
    <>
      <Nav />
      <div style={snapWrap}><Hero /></div>
      <div style={snapWrap}><Work /></div>
      <div style={snapWrap}><Experience /></div>
      <div style={snapWrap}><AlsoMe /></div>
      <div style={snapWrap}><Skills /></div>
      <div style={snapWrap}><Contact /></div>
    </>
  )
}
