import React from 'react';
import Photo from "../assets/ibra-dev.png";
import img1 from "../assets/ervo-rocks-Zam8TvEgN5o-unsplash.jpg";
import img2 from "../assets/sahand-babali-gavODTHG36Y-unsplash.jpg";
import img3 from "../assets/jackson-so-_t-l5FFH8VA-unsplash.jpg";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillLinkedin,
   AiFillYoutube,
    AiFillTwitterCircle} 
    from "react-icons/ai";
import { useState } from 'react';

function Home() {

  const [darkMode, setDarkMode] = useState(false);
    return (
  
<div className={darkMode ? "dark" : ""}>
     
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-medium leading-normal font-burtons uppercase  dark:text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-green-500'>developedbyibra</h1>
            <ul className='flex items-center'>
              <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
               className='cursor-pointer text-2xl dark:text-slate-300' />
              
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-green-500'>Ibrahim Mussa</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-slate-300'>Software Developer</h3>
            {/* <h1 className='custom-h1'>Helloooo</h1> */}


            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-slate-500'>A passionate and dedicated sofware developer with a keen interest in crafting robust and efficient solutions. <br />Join me down below and let's get cracking! </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-300'>

            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
            
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <img src={Photo} alt="image" layout="fill" objectFit="cover"  />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-slate-300'>Services I offered</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi vero totam fugit, blanditiis quos in? Voluptate neque rem possimus ad consequatur, hic aliquam cumque illum 
            <span className='text-teal-500'>
               &nbsp; agencies
            </span> consulted for <span className='text-md py-2 leading-8 text-teal-500'> startups &nbsp;</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, autem perferendis obcaecati ratione itaque soluta earum consectetur dicta impedit temporibus ad quisquam error reprehenderit? Eius nulla doloremque qui consequatur blanditiis!

            </p>

            </div>

            <div className='lg:flex gap-10'>
              
              
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-300'>
                <img src={img3} alt="image3" width={100} height={100} className='mx-auto rounded-lg shadow-lg' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p>
                  Creating elegant designs suited for your needs based on exceptional design theory.
                </p>
                <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p>Figma</p>

              </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-300'>
                <img src={img2} alt="image3" width={100} height={100} className='mx-auto rounded-lg shadow-lg' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p>
                  Creating elegant designs suited for your needs based on exceptional design theory.
                </p>
                <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p>Figma</p>

              </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-300'>
                <img src={img1} alt="image3" width={100} height={100} className='mx-auto rounded-lg shadow-lg' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p>
                  Creating elegant designs suited for your needs based on exceptional design theory.
                </p>
                <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p>Figma</p>

              </div>
            </div>
          
        </section>

        {/* <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
          </div>
        </section> */}
      </main>
      
    </div>
  ) 
}

export default Home