// eslint-disable-next-line no-unused-vars
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '../assets/css/Carousel.css'
import Frank from '../assets/Images/Frank.jpg'
import Corn from '../assets/Images/Corn.jpg'
import Chill from '../assets/Images/Chill.jpg'


export function EmblaCarousel() {
  
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  return (

    <div className="justify-center content-center flex">
    <div className="embla " ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide relative justify-center flex mx-0 mx-auto" ><img src={Chill} alt="Chill"   /></div>
        <div className="embla__slide relative justify-center flex mx-0 mx-auto"><img src={Frank} alt="Frank"   /></div>
        <div className="embla__slide relative justify-center flex mx-0 mx-auto"><img src={Corn} alt="Corn"  /></div>
      </div>
    </div>
    </div>
  )
}
export default EmblaCarousel