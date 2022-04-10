import {useRef,useEffect} from 'react'

const useMousePosition = () => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const setFromEvent = (e) => { 
      position.current.x= e.clientX
      position.current.y= e.clientY 
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
}

export default useMousePosition