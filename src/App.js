import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import './App.css';
import Routes from './routes';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  const [cursorVariant, setCourserVariant] = useState('default')
  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', mouseMove);
    return () => { window.removeEventListener('mousemove', mouseMove) }
  }, [])
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    }
  }
  const textEnter = () => setCourserVariant('text')
  const textLeave = () => setCourserVariant('default')
  return (
    <div className="App">
      {/* <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>dghdgh</h1> */}
      <motion.div className='cursor' variants={variants} animate={cursorVariant} />
      <Routes textEnter={textEnter} textLeave={textLeave} />
    </div>
  );
}

export default App;
