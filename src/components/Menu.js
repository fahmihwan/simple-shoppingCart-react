import React, { useState } from 'react'

const Menu = (props) => {
    const { menu, onAdd } = props;

    return (
        <div className="card-menus card m-2 " style={{ width: '13.5rem' }} key={menu.id}>
            <img src={'./img/pizza/' + menu.gambar} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{menu.nama}</h5>
                <p className="card-text ">{menu.deskripsi}</p>
                <div className='py-4'>
                    <button onClick={() => onAdd(menu)} className="btn d-block text-light btn-order " style={{ position: 'absolute', bottom: '10px', right: '10px', left: '10px', backgroundColor: '#da291c' }} >
                        <div className="d-flex bd-highlight ">
                            <div className="me-auto bd-highlight">add</div>
                            <div className="bd-highlight">Rp {menu.harga}</div>
                        </div>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Menu