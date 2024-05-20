import React from 'react'

function Card({imgSrc , title , link , creator , desc}) {
  
  
  return(
    <>
        <div className="card">
            <div className="img-box">
                <img src={imgSrc} alt="sample movies" />
            </div>
            <div className="text-box">
                <h2 className='text-capitalize fw-700 semi-md-heading'>{title.length > 20 ? `${title.slice(0 , 20)}...` : title}</h2>
                <p className="desc small-text fw-300">{desc?.length > 100 ? `${desc.slice(0 , 101)}.....` : desc}</p>
                <div className="creator">
                  <p className='small-text fw-300'>Creator : <span className='fw-600 small-text'>{creator}</span></p>
                  <a href={link} target="_parth" className='text-capitalize fw-300'>explore</a>
                </div>
            </div>
        </div>
    </>
  );
}

export default Card;
