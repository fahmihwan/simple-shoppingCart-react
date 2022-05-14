import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const ModalKeranjang = (props) => {
    const { show, handleClose, onUpdate, currentQty, saveModal, cart } = props;

    const buttonStyle = {
        width: "30px",
        height: "30px",
        padding: "0px",
    };


    return (
        <Modal show={show} onHide={handleClose} size="sm" style={{
            marginTop: "130px",
        }}>
            <Modal.Header closeButton>
                <Modal.Title style={{
                    fontSize: "15px"
                }}>Update Quantity </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className='d-flex justify-content-center' >
                    <Button onClick={() => onUpdate(currentQty, 'minus')} className="rounded-pill " variant="danger" style={buttonStyle}>-</Button>
                    <p className='text-center' style={{ width: '40px' }}> {currentQty} </p>
                    <Button onClick={() => onUpdate(currentQty, 'plus')} className="rounded-pill" variant="danger" style={buttonStyle}>+</Button>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="sm" style={{
                    width: "47%",
                }} onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" size="sm" style={{
                    width: "47%",
                }}
                    onClick={() => saveModal(currentQty, cart)} >
                    Save
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default ModalKeranjang