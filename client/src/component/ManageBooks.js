import React, { useState,useEffect} from 'react';
import Book from './Book';
import {get_books} from '../services/request/bookRequest';
import {Button,Container, Row,Col} from 'react-bootstrap';
import{swalConfirm} from '../services/functions';
import ModalBook from './ModalBook';

function ManageBooks() {

  const [books,setBooks] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(async () => {

    if(show === false)
    {
      const books = await get_books();
      setBooks(books);
    }

  },[show])

  return (
    <Container>
      <Button variant="success" size="xs" onClick={()=>handleShow()}>
        Add Book
      </Button>{' '}
      <Button variant="success" size="xs" >
        Search book by name
      </Button>{' '}
      <hr />
      <Row>
        {books.map((book,index)=>{
          return(
            <Col>
            <Book key={index} book={book} show={show} setBooks={setBooks} ></Book>
            </Col>
          )
        })}
      </Row>
      <ModalBook show={show} handleClose={handleClose} ></ModalBook>
    </Container>
  );
}
 
export default ManageBooks;