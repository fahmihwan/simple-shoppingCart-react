import React, { useState } from 'react'
import ModalKeranjang from './ModalKeranjang';

const Cart = (props) => {
    const { cart, onRemove, cartItems, setCartItems } = props

    const [state, setState] = useState({
        showModal: false,
        count: 0,
    })

    const handleShow = (qty) => {
        setState({
            showModal: true,
            count: qty
        })
    }

    const handleClose = () => {
        setState({
            showModal: false,
            count: 0
        })
    }

    const onUpdate = (currentQty, operator) => {
        if (operator === 'plus') {
            setState({
                showModal: true,
                count: currentQty + 1
            })
        }
        if (operator === 'minus') {
            if (currentQty === 1) {
                setState({
                    showModal: true,
                    count: 1
                })
            } else {
                setState({
                    showModal: true,
                    count: currentQty - 1
                })
            }
        }
    }

    const saveModal = (currentQty, cart) => {

        setState({
            showModal: false,
            count: currentQty
        })

        const exist = cartItems.find(x => x.id === cart.id)
        if (exist) {
            setCartItems(
                cartItems.map((x) => x.id === cart.id ? { ...exist, qty: currentQty } : x)
            )
        } else {
            setCartItems([...cartItems])
        }
    }

    return (
        <>
            <li className="list-group-item d-flex bd-highlight" key={cart.id}>
                <div className="me-auto bd-highlight cart-group">{cart.nama}</div>
                <div className=" bd-highlight">
                    <span onClick={() => handleShow(cart.qty)} className="badge bg-danger rounded-pill me-2" style={{ "cursor": 'pointer' }}>{cart.qty}</span>
                </div>
                <div className=" bd-highlight me-2">Rp.{cart.harga}</div>
                <div className=" bd-highlight">
                    <a onClick={() => onRemove(cart)}
                        className='text-secondary' style={{ "cursor": "pointer" }} >
                        <i className="bi bi-x-circle"></i>
                    </a>
                </div>
            </li>

            <ModalKeranjang handleClose={handleClose}
                onUpdate={onUpdate}
                cartItems={cartItems}
                show={state.showModal}
                cart={cart}
                currentQty={state.count}
                saveModal={saveModal}
            />
        </>



    )
}

export default Cart