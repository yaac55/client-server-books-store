import React, { useState, useEffect } from 'react';
import { Row, Modal, Container } from 'react-bootstrap';
import { BsInfoCircleFill } from "react-icons/bs";
import { get_book } from "../../services/request/bookRequest"
import './InfoBook.css';


const InfoBook = ({ show, id , toogleShowInfo }) => {

    const [book, setBook] = useState({});
  
    
    useEffect(() => {
        if (show) {
            fetchbook();
        }
    }, [show])

    const fetchbook = async () =>{
        const book = await get_book(id);
        setBook(book);
    }

    return (
        <Modal show={show} onHide={() => toogleShowInfo()} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>{book.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center mb-2">
                    <BsInfoCircleFill color="lightseagreen" size={50}></BsInfoCircleFill>
                </div>
                <Container>
                    <Row className="field">
                        Author : {book.author}
                    </Row>
                    <Row className="field">
                        Year of Publication : {book.year_publication}
                    </Row>
                    <Row className="field">
                        Description : {book.description}
                    </Row>
                    <Row className="field">
                        Type : {book.type}
                    </Row>
                    <Row className="field">
                        Price : {book.price}$
                    </Row>
                </Container>


            </Modal.Body>
        </Modal>
    );

}

export default InfoBook;