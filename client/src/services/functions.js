import Swal from 'sweetalert2';

//function  before confirm choice
export const swalConfirm = async (title,icon) => {
    const result = await Swal.fire({
        title: title,
        icon: icon,
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:"Yes",
        cancelButtonText:'No'
    }) 
    return result;  
}


