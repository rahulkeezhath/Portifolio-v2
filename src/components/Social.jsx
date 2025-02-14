import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { textVariant1, textVariant }  from '../utils/motion';

import { SectionWrapper } from '../hoc'
import { facebook, github, instagram, linkedin, twitter } from '../assets'

const Social = () => {
  return (
    <>
      <motion.div variants={textVariant1()}>
      <h2 className="text-white font-black  md:text-[35px] sm:text-[50px] xs:text-[40px] text-[30px]"
        >Social Profiles</h2>
      </motion.div>
      <p className="border-b-2 border-[#70ebc0] "></p>
      <br />


    <motion.div
    className="flex"
    variants={textVariant()}
    >
    <a  href='https://github.com/rahulkeezhath' target=' ' ><img className="h-[40px]" src={github} alt="" /></a>
    <a  href='https://www.linkedin.com/in/rahulkeezhath' target=' ' ><img className="h-[40px]" src={linkedin} alt="" /></a>
    <a  href='https://www.instagram.com/rahul_kuttu_' target=' ' ><img className="h-[40px]" src={instagram} alt="" /></a>
    <a  href='https://www.facebook.com/rahul.keezath'  target=' '><img className="h-[40px]" src={facebook} alt="" /></a>
    </motion.div>
      <br />

      <footer className="text-center max-sm:mt-20">
        Made with SleepLess Nights 🙂
      </footer>


    </>
  )
}

export default SectionWrapper(Social, "social")