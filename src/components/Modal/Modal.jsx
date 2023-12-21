import React from 'react'
import { IoMdClose } from "react-icons/io";
import { back } from '../../assets';

export default function Modal({show, item,onclose}) {
    if(!show){
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
   <>
   <div className="overlay">
    <div className="overlay-inner">
        <button className='close' onClick={onclose} style={{fontSize:'30px', cursor:'pointer'}}><IoMdClose /></button>
        <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
                <h1>{item.volumeInfo.title}</h1>
                <h3>{item.volumeInfo.authors}</h3>
                <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h4>
              <a href={item.volumeInfo.previewLink}> <button>more</button></a>
            </div>
        </div>
        <h4 className="description">{item.volumeInfo.description}</h4>
    </div>
   </div>
   </>
  )
}
