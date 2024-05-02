// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';







const ImgItem = ({img, title, figcaption, alt, width}) => {
  ImgItem.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    figcaption: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  };
  return (
    <div className='  h-auto w-fit shadow-xl shadow-gray-400 rounded-xl'>
     <figure className='relative justify-center   m-auto'>
      <img src={img} alt= {alt} width={width} className='m-auto'/>
         <figcaption  className='m-auto' >
               {figcaption}
         </figcaption> 
      </figure>
     
   
   
   
   
        <h3 className='text-2xl font-bold text-white tracking-wider text-center '>
          {title}
        </h3>
      
         
          
       
       </div>


   
  )
}

export default ImgItem