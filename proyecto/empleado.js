class empleado  {

    constructor(nombre, apellido, direccion, cargo, eps, seguridad_social, fechaNacimiento){
    
        this.nombre = String; 
        this.apellido = String; 
        this.direccion = String;
        this.cargo = String; 
        this.eps = String;
        this.seguridad_social = String;
        this.fechaNacimiento = Date; 
        
        }
    
        ConsultarTurno()    {
    
    
    
            console.log("Su turno es: 2:00 p.m a 10:00 p.m ")
        }
    
    
    

    get nombre() {
        return this._nombre;
    }

/**
* @param {any} nombre
 */
set nombre(nombre) {
   this._nombre = nombre;
    }
get apellido() {
        return this._apellido;
    }
/**
         * @param {any} apellido
         */
set apellido(apellido) {
        this._apellido = apellido;
    }
get direccion() {
        return this._direccion;
    }
/**
         * @param {any} direccion
         */
set direccion(direccion) {
        this._direccion = direccion;
    }
get cargo() {
        return this._cargo;
    }
/**
         * @param {any} cargo
         */
set cargo(cargo) {
        this._cargo = cargo;
    }
get eps() {
        return this._eps;
    }
/**
         * @param {any} eps
         */
set eps(eps) {
        this._eps = eps;
    }
get seguridadSocial() {
        return this._seguridadSocial;
    }
/**
          * @param {any} seguridadSocial
          */
set seguridadSocial(seguridadSocial) {
        this._seguridadSocial = seguridadSocial;
    }
get fechaNacimiento() {
        return this._fechaNacimiento
    }
/**
          * @param {any} fechaNacimiento
          */

set fechaNacimiento(fechaNacimiento) {
        this._fechaNacimiento = fechaNacimiento;
    }

    toString(){
        return `idEmpleado: ${this._idEmpleado}, nombre: ${this._nombre}  `;
    }


 //Métodos   
     consultarEmpleado(){
        
        let empleado = new empleado('Juan Diego Aranda');// declaración de objetos
        console.log( empleado.toString() );
    
        console.log(empleado.nombre + "Su turno es:2:00 a 10:00 p.m")  //Impresión de los objetos
        } 
    }

  
        let el, i;
        let data = [
            { nombre: empleado.nombre, cedula: empleado.cedula, cargo: empleado.cargo },
            
          ];
        let panel = document.querySelector("#panel");

// limpiar campos del formulario
        function clearForm() {
          document.querySelector("#nombre").value = "";
          document.querySelector("#cedula").value = "";
          document.querySelector("#cargo").value = "";
        }  
        function renderItem() {

            panel.textContent = "";
            data.forEach(empleado => {
              el = document.createElement("option");
              el.innerText = `${empleado.nombre} ${empleado.cedula} ${empleado.cargo}`;
              panel.append(el);
            });
          }
          
          function create() {
            let fn = document.querySelector("#nombre").value;
            let ln = document.querySelector("#cedula").value;
            let lm = document.querySelector("#cargo").value;
            

            data = [...data, { nombre: fn, cedula: ln, cargo: lm }];
            clearForm();
            console.log(data)
            renderItem();
          }
          
          function panelClick() {
            i = panel.selectedIndex;
            document.querySelector("#nombre").value = data[i].nombre;
            document.querySelector("#cedula").value = data[i].cedula;
            document.querySelector("#cargo").value = data[i].cargo;
          }
    
         
//alerta
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('empleado! creado con éxito', 'success')
  })
}


 
    
