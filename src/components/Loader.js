
import React from 'react';
import ReactLoading from 'react-loading';


const Loader = ({ color }) => (
  <ReactLoading type={'spinningBubbles'} color={color} height={1000} width={100} className='loader' />
);


export default Loader;