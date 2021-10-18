import React, {useState,useEffect} from 'react';
import {Button,Card} from 'react-bootstrap';
import{swalConfirm} from '../services/functions';
import {delete_book,get_books} from '../services/request/bookRequest';
import ModalBook from './ModalBook';


function Book(props) {
    
    const [show, setShow] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const book = props.book;
    
    useEffect(async () => {

        if(show === false || isDelete)
        {
          const books = await get_books();
          props.setBooks(books);
        }
    
    },[show,isDelete])

    const deleteBook = async() => {
        const result = await swalConfirm('Are you sure you want to delete a book ?',
        'warning');
        if(result.isConfirmed)
        {
          await delete_book(book._id);
          setIsDelete(true);
        }
        else
        {
          return false;
        }
    }
    
    return(
        <div className="mb-4">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Header>{book.title} ({book.year_publication})</Card.Header>
                <Card.Title>{book.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
                <Card.Text>
                
                </Card.Text>
                <Button variant="warning" onClick={()=>handleShow()}>Update</Button>
                <Button variant="danger" onClick={deleteBook}>Delete</Button>
            </Card.Body>
            </Card>
            <ModalBook book={props.book} show={show} handleClose={handleClose} ></ModalBook>
        </div>
    );
  
}
 
export default Book;