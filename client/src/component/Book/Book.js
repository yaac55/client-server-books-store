import React, { useState, useCallback } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { swalConfirm } from '../../services/functions';
import { delete_book, get_books } from '../../services/request/bookRequest';
import ModalBook from './../ModalBook';
import InfoBook from './../InfoBook/InfoBook';
import './Book.css';


const Book = ({ book,fetchBooks }) => {

  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const toogleShow = useCallback(() => {
    setShow(!show)},
    []
  );

  const toogleShowInfo = useCallback(() => {
      setShowInfo(!showInfo)},
      []
    );



  const deleteBook = async () => {
    const result = await swalConfirm('Are you sure you want to delete a book ?',
      'warning', true);
    if (result.isConfirmed) {
      await delete_book(book._id);
      await fetchBooks();
    }
    else {
      return false;
    }
  }

  return (
    <div className="mb-4">
      <div className="card">
        <div className="card-body">
          <div className="card-title">{book.title} ({book.year_publication})</div>
          <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
          <Card.Text>
            {book.description}
            <br></br>
            <span className="bold"> {book.type} </span>
            <br></br>
            <span className="bold"> {book.price}$ </span>
          </Card.Text>
          <Row>
            <Col xs={3}>
              <Button variant="info" onClick={() => toogleShowInfo()}>Info</Button>
            </Col>
            <Col xs={4}>
              <Button variant="warning" onClick={() => toogleShow()}>Update</Button>
            </Col>
            <Col xs={4}>
              <Button variant="danger" onClick={deleteBook}>Delete</Button>
            </Col>
          </Row>
        </div>
      </div>
      <ModalBook book={book} show={show} toogleShow={toogleShow} fetchBooks={fetchBooks} ></ModalBook>
      <InfoBook id={book._id} show={showInfo} toogleShowInfo={toogleShowInfo}></InfoBook>
    </div>
  );

}

export default Book;