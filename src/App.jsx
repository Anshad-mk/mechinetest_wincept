import { useEffect,useState } from 'react'
import './App.css'

function App() {
  const [red, setRed] = useState('red');
  const [green, setGreen] = useState('');
  const [yellow, setYellow] = useState('');

  useEffect(() => {
    const colorSelect = () => {
      setTimeout(() => {
        setRed('red');
        setYellow('');
        setGreen('');

        setTimeout(() => {
          setRed('');
          setRed('red');
        }, 5000); 

        setTimeout(() => {
          setRed('');
          setYellow('yellow');
        }, 5000); 

        setTimeout(() => {
          setYellow('');
          setGreen('green');
        }, 7000); 
      }, 0); // Initial delay

      return colorSelect;
    };

    const interval = setInterval(() => {
      colorSelect();
    }, 13000); 

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

// 10


 
  return (
    
     <div className="outer-box">
        <div className="blackbox">
          <div className="row">
            <div className="circle" style={{ position: "relative", background:red }}>

         {/* red */}
            </div>
          </div>
          <div className="row">
            <div className="circle" style={{background:yellow}}>
      {/* yellow */}
            </div>
          </div>
          <div className="row">
            <div className="circle" style={{background:green}}>
          {/* green */}
            </div>
          </div>
          </div>
          </div>
    
  )
}

export default App
