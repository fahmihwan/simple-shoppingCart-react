import React from 'react'

export const Price = (props) => {
    const { price } = props
    return (
        <>
            <div className="d-flex bd-highlight ">
                <div className="me-auto bd-highlight">
                    <p >Sub Total </p>
                </div>
                <div className=" bd-highlight">
                    <p>Rp.{price.subTotal}</p>
                </div>
            </div >
            <div className="d-flex bd-highlight " >
                <div className="me-auto bd-highlight" >
                    <p >Tax Fee </p>
                </div >
                <div className=" bd-highlight" >
                    <p>Rp.{price.tax}</p>
                </div >
            </div >
            <div className="d-flex bd-highlight " >
                <div className="me-auto bd-highlight" >
                    <p >Total </p>
                </div >
                <div className=" bd-highlight" >
                    <p>Rp.{price.total}</p>
                </div >
            </div >
        </>
    )
}
