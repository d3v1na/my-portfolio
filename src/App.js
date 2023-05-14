import './App.css';
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
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 600]);
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
    <section className="heading"> 
        <motion.div style={{x:x}}>
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
    <section className="heading2"> 
        <motion.div style={{x:x1}}>
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
      <img src={require('./me.png')}/>
    </div>
      
    <motion.h4 style={{x: x2}}>about about about about about about</motion.h4>
    <motion.h4 style={{x: x3}}>about about about about about about</motion.h4>
    <h6 className='desc'>i’m a graphics and ui/ux Designer, currently working as design lead for niteouts.
‍
i'm pursuing a b.tech in computer science from shiv nadar university.

please scroll down to view some of the work i've done. :D</h6>

    </body>
    </div>
    </>
  );
}

export default App;
