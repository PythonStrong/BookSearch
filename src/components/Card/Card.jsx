import React, { useState } from 'react'
import { back } from '../../assets'
import Modal from '../Modal/Modal';

function Card({ book }) {
    const [show, setShow] = useState(false)
    const [bookItem, setItem] = useState()
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if (thumbnail != undefined && amount != undefined) {
                        return (
                            <div>
                                <div className='card' onClick={() => { setShow(true); setItem(item) }}>
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className='title'>{item.volumeInfo.title}</h3>
                                        <center><p className="amount">&#8377;{amount}</p></center>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onclose={() => setShow(false)} />
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default Card