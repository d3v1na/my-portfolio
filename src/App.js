import './App.css';
import{
  useScroll,
  useTransform,
  motion
} from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
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
    <h1 className="cool">Devina Bhatnagar</h1>
    <h2>nsfouk HVukxkj</h2>
    <h3>i'm a designer i also made this website</h3>
    <motion.h4 style={{x: x}}>me me me me me me me me me me me me</motion.h4>
    <motion.h4 style={{x: x1}}>me me me me me me me me me me me me</motion.h4>
    <img src={require('./me.png')}/>
    <motion.h4 style={{x: x2}}>about about about about about about</motion.h4>
    <motion.h4 style={{x: x3}}>about about about about about about</motion.h4>
    <h6>i’m a graphics and ui/ux Designer, currently working as design lead for niteouts.
‍
i'm pursuing a b.tech in computer science from shiv nadar university.

please scroll down to view some of the work i've done.</h6>

    </body>
  );
}

export default App;
