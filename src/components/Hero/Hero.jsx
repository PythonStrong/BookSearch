import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { book } from '../../assets';
import Card from '../Card/Card';
import axios from 'axios';

function Hero() {
  const [search, setSearch] =useState("")
  const [bookdata, setData] = useState([])
  const searchBook =(evt)=>{
    if(evt.key==="Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyC9cnoeBkkczR31TjRhiKvcwfwzzO4POHE'+'&maxResults=40')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err))
    }
  }
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>Bu Yerda O'zingiz Hohlagan Kitobni <br /> Topasz faqat ingliz tilida</h1>
        </div>
        <div className="row2">
          <h2>Find your book</h2>
          <div className="search">
            <input type="text" placeholder='Enter Your Name Book' value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
            <button> <CiSearch /></button>
          </div>
          <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-bookworm-librarian-carl-spitzweg.jpg"   alt="" />
        </div>
      </div>
        <div className="container">
          {
            <Card book={bookdata}/>
          }
        </div>
    </>
  )
}

export default Hero