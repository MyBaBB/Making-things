// eslint-disable-next-line no-unused-vars
import React from 'react';
import ImgItem from './ImgItem';
import Corn from './Corn.jpg';

 





 
const ImgComponent = () => {
  return (
    <div className='relative flex '>
     
              
  <ImgItem img={Corn} className title={'Custom Websites'} figcaption={'Hello World'} width={200}   />
  <ImgItem img={Corn} className title={'Custom Websites'} figcaption={'Hello World'} width={200}   />
  <ImgItem img={Corn} className title={'Custom Websites'} figcaption={'Hello World'} width={200}   />

    </div>
  );
};

export default ImgComponent;