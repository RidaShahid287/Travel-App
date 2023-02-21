import React, {useEffect} from 'react'
import "./Main.scss"
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.webp'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Main = () => {
  const data = [
    {
      id : 1,
      imgSrc : img1,
      destTitle : 'Fairy Meadows',      
      location : "Pakistan",
      grade : 'CULTURAL RELAX',
      fees : '$700',
      description : 'Fairy Meadows, named by German climbers and locally known as Joot, is a grassland near one of the base camp sites of the Nanga Parbat, located in Diamer District, Gilgit-Baltistan, Pakistan.'
    },
    {
      id : 2,
      imgSrc : img2,
      destTitle : 'Machu Picchu',
      location : "Peru",
      grade : 'CULTURAL RELAX',
      fees : '$600',
      description : 'Huaynu Picchu is a mountain in peru, rising over Machu Picchu, the so called lost city Incas. This place is pouplar among tourists as the sunrise from the sun gate is simply spectacular'

    },
    {
      id : 3,
      imgSrc : img3,
      destTitle : 'Nathia Gali',
      location : "Pakistan",
      grade : 'CULTURAL RELAX',
      fees : '$800',
      description : 'Nathia Gali or Nathiagali is a hill station and mountain resort town located in the Abbottabad District of Khyber Pakhtunkhwa, Pakistan. It is located at the centre of the Galyat range, where several hill stations are situated'
    },
    {
      id : 4,
      imgSrc : img4,
      destTitle : 'Bora Bora',
      location : "New Zealand",
      grade : 'CULTURAL RELAX',
      fees : '$1000',
      description : 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventerous activities'
  
    },
    {
      id : 5,
      imgSrc : img5,
      destTitle : 'Hunza Valley',
      location : "Pakistan",
      grade : 'CULTURAL RELAX',
      fees : '$900',
      description : "The Hunza Valley is a mountainous valley in the northern part of the Gilgit-Baltistan region of Pakistan, formed by the Hunza River, bordering Ishkoman to the northwest, Shigar to the southeast, Afghanistan's Wakhan Corridor to the north, and the Xinjiang region of China to the northeast"
    },
    {
      id : 6,
      imgSrc : img6,
      destTitle : 'Rainbow Mountains',
      location : "Peru",
      grade : 'CULTURAL RELAX',
      fees : '$2000',
      description : "The Rainbow Mountains are cretaceous sandstones and siltstones that were deposited in China before the Himalayan Mountains were formed. The sand and silt was deposited with iron and trace minerals that provided it with the key ingredient to form the colors we see today."
    },
    {
      id : 7,
      imgSrc : img7,
      destTitle : 'Plitvice Lakes National Park',
      location : "Croatia",
      grade : 'CULTURAL RELAX',
      fees : '$3000',
      description : "Plitviče Lakes National Park is a 295-sq.-km forest reserve in central Croatia. It's known for a chain of 16 terraced lakes, joined by waterfalls, that extend into a limestone canyon."
    },
    {
      id : 8,
      imgSrc : img8,
      destTitle : 'Colosseum',
      location : "Italy",
      grade : 'Historical',
      fees : '$1000',
      description : "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age"
    },
    {
      id : 9,
      imgSrc : img9,
      destTitle : 'Cappadocia',
      location : "Turkey",
      grade : 'CULTURAL RELAX',
      fees : '$3000',
      description : "Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley, Göreme and elsewhere. Other notables sites include Bronze Age homes carved into valley walls by troglodytes (cave dwellers) and later used as refuges by early Christians."
    }, 
  ]
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="main container  section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
      </div>
      <div className="secContent grid">
        {
          data?.map(item => (
            <div data-aos="fade-up" className="singleDestination" key={item.id}>
              <div className="imgDiv">
                <img src={item.imgSrc} alt="" />
              </div>
              <div className="cardInfo">
                  <h4 className="destTitle">{item.destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{item.location}</span>
                  </span>
                  <div className="fees flex">
                      <span>{item.grade}<small>+1</small></span> <span><h5>{item.fees}</h5></span>
                  </div>
                  <div className="desc">
                    <p>{item.description}</p>
                  </div>
                  <button className="btn flex">DETAILS <HiOutlineClipboardCheck className='icon' /></button>
                </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
