import React, { useState,useEffect} from 'react';
import Book from './Book/Book';
import {get_books} from '../services/request/bookRequest';
import {Button,Container, Row,Col} from 'react-bootstrap';
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
        Filter Book
      </Button>{' '}
      <hr />
      <Row>
        {books.map((book,index)=>{
          return(
            <Col  key={index} xs={4}>
              <Book book={book} show={show} setBooks={setBooks} ></Book>
            </Col>
          )
        })}
      </Row>
      <ModalBook show={show} handleClose={handleClose} ></ModalBook>
    </Container>
  );
}
 
export default ManageBooks;