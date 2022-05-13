
import React, { useState } from 'react'

import Cart from './Cart'
import Menu from './Menu'
import { Price } from './Price';


const Body = (props) => {
    const { api } = props;
    const [cartItems, setCartItems] = useState([]);

    const [price, setPrice] = useState({
        subTotal: 0,
        tax: 0,
        total: 0
    })

    const onAdd = (menu) => {
        const exist = cartItems.find(x => x.id === menu.id)
        if (exist) {
            setCartItems(
                cartItems.map((x) => x.id === menu.id ? { ...exist, qty: exist.qty + 1 } : x)
            )
        } else {
            setCartItems([...cartItems, { ...menu, qty: 1 }])
        }
    }

    const onRemove = (cart) => {
        let arr = [...cartItems];
        const index = arr.indexOf(cart)
        arr.splice(index, 1);
        setCartItems(arr);

    }

    return (
        <div className='container-fluid bg-light'>
            <div className='row'>
                <div className='col-md-9  d-flex flex-wrap'  >
                    {api.map((e) => {
                        return (
                            <Menu onAdd={onAdd} key={e.id} menu={e} ></Menu>
                        )
                    })}
                </div>
                <div className='col-md-3 2 border-left cart' >
                    <div style={{ position: 'sticky', top: 0 }}>
                        <div className='row text-center py-3 '>
                            <h3>Cart</h3>
                        </div >
                        {cartItems.length === 0 && <h1 className='text-danger'>Cart Empty</h1>}

                        <div className='row px-2'>
                            <ul className="list-group " >
                                {cartItems.map((x) => {
                                    return (<Cart onAdd={onAdd}
                                        onRemove={onRemove}
                                        cartItems={cartItems}
                                        setCartItems={setCartItems}
                                        cart={x}
                                        key={x.id}
                                    />)
                                })
                                }
                            </ul>
                        </div>
                        <hr className='mt-5' />
                        <Price
                            price={price}
                        />
                        <div className='row px-2 mt-5' >

                            <button type="button" className="btn btn-outline-danger mb-2">Vouchers & Points</button>
                            <button type="button" className="btn btn-danger mb-2">Checkout</button>
                        </div>
                        <p className='text-muted text-center mt-4'>Pizza Hut Madiun</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Body