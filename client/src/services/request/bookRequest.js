//functions to send requests to server 

import axios from 'axios';
import {API_BASE_URL} from '../constante';

axios.defaults.baseURL = API_BASE_URL;

export const get_books = async () =>{  
  let response = await axios.get('/book')
  return response.data;
}

export const get_book = async (id) =>{  
    let response = await axios.get('/book/'+id)
    return response.data;
}

export const delete_book = async (id) =>{  
    let response = await axios.delete('/book/'+id)
    return response.data;
}

export const create_book = async (book) =>{ 
    const payload = book; 
    let response = await axios.post('/book', payload)
    return response;
}

export const update_book = async (book) =>{ 
    const id = book.id;
    const payload = book;
    let response = await axios.put('/book/'+id, payload)
    return response;
}

export const book_filter = async (filter) =>{ 
    const payload = filter;
    let response = await axios.post('/book/filter',payload)
    return response.data;
}