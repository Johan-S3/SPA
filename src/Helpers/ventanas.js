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

export const confirmWindow = (accion) => {
    return Swal.fire({
        title: "Precaución",
        text: `¿Está seguro de ${accion}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí"
        })
}

export const errorWindow = (titulo, errors) => {  
  if(errors != null){
    return Swal.fire({
      title: titulo,
      text: errors[0].message ,
      icon: 'error',
      // backdrop: false,         
      // allowOutsideClick: false,
      customClass: {
        confirmButton: 'button__ok'
      },
    });
  }
  return Swal.fire({
      title: titulo,
      icon: 'error',
      // backdrop: false,         
      // allowOutsideClick: false,
      customClass: {
        confirmButton: 'button__ok'
      },
    });
};