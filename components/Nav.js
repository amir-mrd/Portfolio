import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { AiFillLinkedin} from 'react-icons/ai'
import {DiGithubFull} from 'react-icons/di'
import {CgDarkMode} from 'react-icons/cg'
const Nav = ({setDarkMode,darkMode}) => {
  return (
    <div>
      <nav className="py-10 mb-2 flex justify-between dark:text-white">
        <h1 className='text-2xl font-burtons'>Amir Mohammadi</h1>
        <ul className='flex items-center'>
          <li><CgDarkMode onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
          <li><a href="https://drive.google.com/file/d/1UOvVPnAENOzbUQo1Xi7wzU4RC5eVM2So/view?usp=sharing" target="_blank" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'>Resume</a></li>
          
          <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
            <a href="https://www.linkedin.com/in/amir-mohammadi-4238a4214/"><AiFillLinkedin/></a>
          </li>
          <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
            <a href="https://github.com/amir-mrd"><DiGithubFull/></a>
          </li>
          </ul>
        </nav>
    </div>
  )
}

export default Nav