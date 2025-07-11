import Swal from 'sweetalert2';

export const successWindow = (titulo) => {
  return Swal.fire({
    title: titulo,
    icon: 'success',
    // backdrop: false,         
    // allowOutsideClick: false,
    customClass: {
      confirmButton: 'button__ok'
    },
  });
};

export const errorWindow = (titulo, errors) => {
  return Swal.fire({
    title: titulo,
    text: errors[0].message,
    icon: 'error',
    // backdrop: false,         
    // allowOutsideClick: false,
    customClass: {
      confirmButton: 'button__ok'
    },
  });
};