import './App.css';
import Me from './Components/Me.jsx';
import About from './Components/About.jsx';
import{
  useScroll,
  useTransform,
  motion
} from "framer-motion";

import{
  useEffect,
  useState
} from "react";

function App() {
  const { scrollYProgress } = useScroll();
   
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  
  return (
    <>
    <div className="App">
    <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
    <body>
    <title>Devina Bhatnagar</title>
    <nav>
        <ul>
            <li><a href="#">ME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">PROJECTS</a></li>
            <li><a href="#">CONTACT ME</a></li>
        </ul>
    </nav>
    
    <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Devina Bhatnagar</h1>
    <h2 onMouseEnter={textEnter} onMouseLeave={textLeave}>nsfouk HVukxkj</h2>
    <h3>i'm a designer i also made this website</h3>
    
    <Me/> 
    <About/>

    </body>
    </div>
    </>
  );
}

export default App;
