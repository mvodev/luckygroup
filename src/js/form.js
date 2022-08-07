const form  = document.querySelector('.js-form');
const input = form.querySelector('input[name="form-input"]');

const handlerForm = (event)=>{
  event.preventDefault();
  // console.log(form["form-input"].value.length);

  const inputDataIsValid =  
    form["form-input"].value.match(/[!@#$%^&*()]/)===null;
  if(inputDataIsValid){
    form.submit();
  } else input.classList.add("form__input_error");
}

form.addEventListener('submit',handlerForm);