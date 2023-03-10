import React, {useEffect} from 'react'
import "./Footer.scss"
import video2 from '../../Assets/beach.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
      <video src={video2} muted autoPlay loop  type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter your email' />
            <button data-aos="fade-up" className="btn flex" type='submit'>SEND<FiSend className='icon' /></button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <MdOutlineTravelExplore className='icon' />Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore autem voluptatem culpa omnis earum fuga provident, ullam recusandae totam veritatis. Veniam, repudiandae odio voluptatum autem quas voluptatem rem ex iusto maiores officia. Voluptatibus optio, dicta ex corrupti totam iste distinctio.
            </div>
            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>
          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                Our Agency
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Pyment
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                Partners
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HosteWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
               Last Minute
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Skardu
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>Best Traveling Website</small>
            <small>?? Copyright Reserved - ZorexTech 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}
