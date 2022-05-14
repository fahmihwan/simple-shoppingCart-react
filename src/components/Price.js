import React from 'react'

export const Price = (props) => {
    const { subTotal, taxPrice, totalPrice } = props


    return (
        <>
            <div className="d-flex bd-highlight ">
                <div className="me-auto bd-highlight">
                    <p >Sub Total </p>
                </div>
                <div className=" bd-highlight">
                    <p>Rp.{subTotal}</p>
                </div>
            </div >
            <div className="d-flex bd-highlight " >
                <div className="me-auto bd-highlight" >
                    <p >Tax Fee </p>
                </div >
                <div className=" bd-highlight" >
                    <p>Rp.{taxPrice}</p>
                </div >
            </div >
            <div className="d-flex bd-highlight " >
                <div className="me-auto bd-highlight" >
                    <p >Total </p>
                </div >
                <div className=" bd-highlight" >
                    <p>Rp.{totalPrice}</p>
                </div >
            </div >
            {/* 
            <div className="d-flex bd-highlight ">
                <div className="me-auto bd-highlight">
                    <p >Sub Total </p>
                </div>
                <div className=" bd-highlight">
                    <p>Rp.0</p>
                </div>
            </div >
            <div className="d-flex bd-highlight " >
                <div className="me-auto bd-highlight" >
                    <p >Tax Fee </p>
                </div >
                <div className=" bd-highlight" >
                </div >
            </div >
            <div className="d-flex bd-highlight " >
                <div className="me-auto bd-highlight" >
                    <p >Total </p>
                </div >
                <div className=" bd-highlight" >
                </div >
            </div > */}
        </>
    )
}
