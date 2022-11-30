class empleado  {

   Primernombre = String;
   Segundonombre = String;
   Primerapellido = String;
   Segundoapellido = String; 
   documentodeidentidad = String;
   Numerodeidentidad = String;
   direccion = String;
   correo = String;
   eps = String;


    constructor(Primernombre, Segundonombre, Primerapellido, Segundoapellido, documentodeidentidad, Numerodeidentidad, direccion, correo, eps ){
    
        this.Primernombre = String; 
        this.Segundonombre = String; 
        this.Primerapellido = String;
        this.Segundoapellido = String; 
        this.documentodeidentidad= String;
        this.Numerodeidentidad = String;
        this.direccion = String; 
        this.correo = String;
        this.eps = String; 
        
        }
    
        ConsultarTurno()    {
    
    
    
            console.log("Su turno es: 2:00 p.m a 10:00 p.m ")
        }
    
    
    

    get primernombre() {
        return this._Primernombre;
    }

/**
* @param {any} Primernombre
 */
set primernombre(nombre) {
   this._Primernombre = primernombre;
    }
get primerapellido() {
        return this._Primerapellido;
    }
/**
         * @param {any} primerapellido
         */
set primerapellido(apellido) {
        this._Primerapellido = primerapellido;
    }
get Segundoapellido() {
        return this._segundoapellido;
    }
/**
         * @param {any} Segundoapellido
         */
set Segundoapellido(Segundoapellido) {
        this._segundoapellido = Segundoapellido;
    }
get documentodeidentidad() {
        return this._documentodeidentidad;
    }
/**
         * @param {any} documentodeidentidad
         */
set documentodeidentidad(documentodeidentidad) {
        this._documentodeidentidad = documentodeidentidad;
    }
get Numerodeidentidad() {
        return this._numerodeidentidad;
    }
/**
         * @param {any} Numerodeidentidad
         */
set Numerodeidentidad(Numerodeidentidad) {
        this._numerodeidentidad = Numerodeidentidad;
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
get correo() {
        return this._correo 
    }
/**
          * @param {any} correo
          */

set correo(correo) {
        this._correo = correo;
    }

    get eps() {
        return this._eps
    }
/**
          * @param {any} eps
          */

set eps(eps) {
        this._eps = eps;
    }

    toString(){
        return `primernombre: ${this._Primernombre}, segundonombre: ${this._Segundonombre},primerapellido: ${this._Primerapellido}, segundoapellido: ${this._segundoapellido}, documentodeidentidad: ${this._documentodeidentidad}, nuemrodeidentidad: ${this._numerodeidentidad}, direccion: ${this._direccion}, correo: ${this._correo}, eps: ${this._eps}, `;        
    }


 //Métodos   
     consultarEmpleado(){
        
        let empleado = new empleado('Pepito Perez');// declaración de objetos
        console.log( empleado.toString() );
    
        console.log(empleado.primernombre + "Su turno es:2:00 a 010:0 p.m")  //Impresión de los objetos
        console.log(empleado.Segundonombre + "Su turno es:2:00 a 010:0 p.m")
        console.log(empleado.primerapellido + "Su turno es:2:00 a 010:0 p.m")
        console.log(empleado.Segundoapellido + "Su turno es:2:00 a 010:0 p.m")
        console.log(empleado.documentodeidentidad+ "Su turno es:2:00 a 010:0 p.m")
        console.log(empleado.Numerodeidentidad + "Su turno es:2:00 a 010:0 p.m")
        console.log(empleado.direccion + "Su turno es:2:00 a 010:0 p.m")
        console.log(empleado.correo + "Su turno es:2:00 a 010:0 p.m")
        console.log(empleado.eps + "Su turno es:2:00 a 010:0 p.m")
        } 
    }

  
        let el, i;
        let data = [
            {primernombre: empleado.primernombre, Segundonombre: empleado.Segundonombre, primerapellido: empleado.primerapellido, Segundoapellido: empleado.Segundoapellido, documentodeidentidad: empleado.documentodeidentidad, Numerodeidentidad: empleado.Numerodeidentidad, direccion: empleado.direccion, correp: empleado.correo, eps: empleado.eps },
            
          ];
        let panel = document.querySelector("#panel");

// limpiar campos del formulario
        function clearForm() {
          document.querySelector("#primernombre").value = "";
          document.querySelector("segundonombre").value = "";
          document.querySelector("#primerapellido").value = "";
          document.querySelector("#segundoapellido").value = "";
          document.querySelector("#documentodeidentidad").value = "";
          document.querySelector("#nuemrodeidentidad").value = "";
          document.querySelector("#direccion").value = "";
          document.querySelector("#correo").value = "";
          document.querySelector("#eps").value = "";

        }  
        function renderItem() {

            panel.textContent = "";
            data.forEach(empleado => {
              el = document.createElement("option");
              el.innerText = `${empleado.primernombre} ${empleado.Segundonombre} ${empleado.primerapellido} ${empleado.Segundoapellido} ${empleado.documentodeidentidad} ${empleado.Numerodeidentidad} ${empleado.direccion} ${empleado.correo} ${empleado.eps} `;
              panel.append(el);
            });
          }
          
          function create() {
            let fn = document.querySelector("#primernombre").value;
            let ln = document.querySelector("#segundonombre").value;
            let lb = document.querySelector("#primerapellido").value;
            let lv = document.querySelector("#segundopellido").value;
            let lc = document.querySelector("#documentodeidentidad").value;
            let lx = document.querySelector("#numerodeidentidad").value;
            let lz = document.querySelector("#direccion").value;
            let lk = document.querySelector("#correo").value;
            let lj = document.querySelector("#eps").value;





            

            data = [...data, { primernombre: fn, Segundonombre: ln, primerapellido: lb, Segundoapellido: lv, documentodeidentidad: lc, Numerodeidentidad: lx, direccion: lz, correo: lk, eps: lj }];
            clearForm();
            console.log(data)
            renderItem();
          }
          
          function panelClick() {
            i = panel.selectedIndex;
            document.querySelector("#primernombre").value = data[i].primernombre;
            document.querySelector("#segundonombre").value = data[i].Segundonombre;
            document.querySelector("#primerapellido").value = data[i].primerapellido;
            document.querySelector("#segundoapellido").value = data[i].Segundoapellido
            document.querySelector("#documentodeidentidad").value = data[i].documentodeidentidad;
            document.querySelector("#numerodeidentidad").value = data[i].Numerodeidentidad;
            document.querySelector("#direccion").value = data[i].direccion;
            document.querySelector("#correo").value = data[i].correo;
            document.querySelector("#eps").value = data[i].eps;





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

renderItem();
 
    
