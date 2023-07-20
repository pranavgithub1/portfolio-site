import './App.css'
import { useState } from 'react'
import pfp1 from './assets/linkedin_pfp.jpg'
import pfp2 from './assets/website_pfp.jpg'
function App() {
  const [themeState, setThemeState] = useState("dark")
  const handleClick = () => {
    if(themeState === "dark"){
      setThemeState('light');
      return;
    }
    setThemeState("dark");
  }
  const displayThemeState = (state) => {
    if(state === "dark") return "Light";
    return "Dark";
  }
  return (
    <div className={`w-full h-full ${themeState}`}>
      <div className=' bg-white border-black dark:bg-[#121212] dark:text-slate-50  dark:border-white'>
        <div className='fixed top-0 h-auto w-full pt-4 bg-white dark:bg-[#121212] border-inherit'>
          <div  className='w-full border-t border-b border-inherit py-2 px-8 flex'>
            <p className='text-3xl font-serif grow'>Pranav Jadhav</p>
            <a href="https://github.com/pranavgithub1" target="_blank" rel="noopener noreferrer" className='pt-3 px-8'>Github</a>
            <button className='pt-3' onClick={handleClick}>{displayThemeState(themeState)}</button>
          </div>
        </div>
        
        {/* <div className='lg:fixed top-[90px] left-8'>
          <ul>
            <li className='hover:underline cursor-pointer decoration-dotted underline-offset-2'>
              Home
            </li>
            <li className='hover:underline cursor-pointer decoration-dotted underline-offset-2'>
              Projects
            </li>
            <li className='hover:underline cursor-pointer decoration-dotted underline-offset-2'>
              Github
            </li>
            <li className='hover:underline cursor-pointer decoration-dotted underline-offset-2'>
              <button onClick={handleClick}>{displayThemeState(themeState)}</button>
            </li>
          </ul>
        </div> */}

        <div className='px-8 pt-[100px] border-inherit pb-8'>
          <img src={pfp2} alt="" className='w-[200px] mx-auto'/>

          <p  className='mx-auto max-w-2xl mt-8 text-xl font-sans'>
            Hey there! I am a freshman computer science student at Purdue University interested in studying artificial intelligence. 
            In my free time I enjoy practicing my tenor saxophone, listening to music (jazz, prog rock, country), and spending time outdoors (hiking, fishing).
          </p>

          <div className='max-w-2xl mx-auto mt-8 border-t border-inherit pt-8'>
            <p className='text-2xl font-serif'>
              Work Experience
            </p>
            <div className='grid grid-cols-1 mt-6 space-y-4 text-lg'>
              <div>
                <p className='font-bold'>(2022) LSU Research Internship</p>
                <p>
                  I worked at LSU full time during the summer as a paid research assistant under Dr. Craig Plaisance
                  in the chemical engineering department. My work involved using machine learning algorithms to improve the efficiency
                  of quantum mechanical calculations in VASP. I studied scientific literature, self taught quantum chemistry concepts,
                  and wrote programs that will continue to be used by the research group.
                </p>
              </div>
            </div>
          </div>

          <div className='max-w-2xl mx-auto mt-8 border-t border-inherit pt-8'>
            <p className='text-2xl font-serif'>
              Projects
            </p>
            <div className='grid grid-cols-1 mt-6 space-y-4 text-lg'>
              <div>
                <p className='font-bold'><a className="hover:underline decoration-dotted underline-offset-4" href="https://github.com/pranavgithub1/Multiplayer-Wordle-Frontend" target="_blank" rel="noopener noreferrer">(2022) Multiplayer Wordle</a></p>
                Online multiplayer Wordle game, created in 12 hours for the MIT Blueprint Hackathon. Won 3rd place overall.
              </div>
              <div>
                <p className='font-bold'><a className="hover:underline decoration-dotted underline-offset-4" href="https://pranavgithub1.github.io/puzzle_game/" target="_blank" rel="noopener noreferrer">(2022) Browser Puzzle</a></p>
                Final project for AP Computer Science Principles course. Browser jigsaw puzzle game with custom jigsaw generation algorithm.
              </div>
              <div>
                <p className='font-bold'><a className="hover:underline decoration-dotted underline-offset-4" href="https://pranavgithub1.github.io/Find-My-Competition/" target="_blank" rel="noopener noreferrer">(2022) Find My Competition</a></p>
                Market research webapp I made for the microhacks hackathon. Won 1st Place.
              </div>
              <div>
                <p className='font-bold'><a className="hover:underline decoration-dotted underline-offset-4" href="https://github.com/pranavgithub1/discord-bot" target="_blank" rel="noopener noreferrer">(2022) Discord Lunch Bot</a></p>
                A discord bot I made to scrape my school's lunch menus off the web and display them for my classmates and I in our discord server.
              </div>
              <div>
                <p className='font-bold'><a className="hover:underline decoration-dotted underline-offset-4" href="https://github.com/pranavgithub1/Flood-Prediction-Project" target="_blank" rel="noopener noreferrer">(2022) ML Flood Forecasting</a></p>
                I applied machine learning techniques to forecast river streamflow given a large-scale dataset of meteorological observations.
                Presented a poster at the 2021 Louisiana State of the Coast conference.
              </div>
              <div>
                <p className='font-bold'><a className="hover:underline decoration-dotted underline-offset-4" href="https://github.com/pranavgithub1/eth-dashboard" target="_blank" rel="noopener noreferrer">(2021) Ethereum Dashboard and Dataset</a></p>
                I created a custom dataset of various Ethereum data, indicators, and on-chain metrics that updated based on a variety of free APIs.
                To view this data I also created a web-based dashboard.
              </div>
            </div>
          </div>

          
        </div>
      
      </div>
    </div>
  )
}

export default App
