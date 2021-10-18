import axios from 'axios';
import {API_BASE_URL} from '../constante';

/**
 * function to get all transaction 
 */
export const get_books = async () =>{  
  let response = await axios.get(API_BASE_URL+'/book')
  return response.data;
}

/**
 * function to delete book by id
 * @param {String} id 
 * @returns 
 */
export const delete_book = async (id) =>{  
    let response = await axios.delete(API_BASE_URL+'/book/'+id)
    return response.data;
}

/**
 * function to create new transaction
 * @param {String} account_number 
 * @param {Number} amount 
 * @param {String} name_product 
 * @param {String} note 
 * @returns 
 */
export const create_book = async (book) =>{ 
    const payload = book; 
    let response = await axios.post(API_BASE_URL+'/book', payload)
    return response;
}

/**
 * function to updtate transaction
 * @param {String} id
 * @param {String} account_number 
 * @param {Number} amount 
 * @param {String} name_product 
 * @param {String} note 
 * @returns 
 */
export const update_book = async (book) =>{ 
    const id = book.id;
    const payload = book;
    let response = await axios.put(API_BASE_URL+'/book/'+id, payload)
    return response;
}