
const formulario = document.getElementById('agregar');
const form = document.getElementById('numeros');

class Interfaz {
    
     imprimirMensaje(mensaje, tipo) {
          const divMensaje = document.createElement('div');
          divMensaje.classList.add('text-center', 'alert');
          if(tipo === 'error') {
               divMensaje.classList.add('alert-danger');
          } else {
               divMensaje.classList.add('alert-success');
          }
          divMensaje.appendChild(document.createTextNode(mensaje));
         
          document.querySelector('.primario').insertBefore(divMensaje, formulario);

          setTimeout(function() {
               document.querySelector('.primario .alert').remove();
               formulario.reset();
          }, 3000);
     }
    
 
     
     agregar(numero) {
        
          const multiplicacion = document.querySelector('#multiplicacion ul');
          const div = document.querySelector('#div ul');
          var suma = document.querySelector('#suma ul');
          const resta = document.querySelector('#resta ul');
          

          
         
         
         
          for(var i = 1;i<=10;i++){
               const li = document.createElement('li');
               li.innerHTML = `
                ${numero + " x " + i + " = " + numero * i} 
               `;
               multiplicacion.appendChild(li);
          }
          for(var i = 1;i<=10;i++){
               const li = document.createElement('li');
               li.innerHTML = `
                ${numero + " / " + i + " = " + numero / i} 
               `;
               div.appendChild(li);
          }
          for(var i = 1;i<=10;i++){
               const li = document.createElement('li');
               li.innerHTML = `
                ${numero + " + " + i + " = " + (numero + i) } 
               `;
               suma.appendChild(li);
          }
          for(var i = 1;i<=10;i++){
               const li = document.createElement('li');
               li.innerHTML = `
                ${numero + " - " + i + " = " + (numero-i)} 
               `;
               resta.appendChild(li);
          }
         

          
     }
}

form.addEventListener('submit',(e)=>{
     e.preventDefault();
     let num = document.querySelector('#numero').value;
     num = parseInt(num);
     const ui = new Interfaz();

     if(num !=''){
         
          ui.agregar(num);
     }

})
;

