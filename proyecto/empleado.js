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
   this._Primernombre = Primernombre;
    }
get primerapellido() {
        return this._Primerapellido;
    }
/**
         * @param {any} Primerapellido
         */
set primerapellido(apellido) {
        this._Primerapellido = Primerapellido;
    }
get Segundoapellido() {
        return this._Segundoapellido;
    }
/**
         * @param {any} Segundoapellido
         */
set Segundoapellido(Segundoapellido) {
        this._Segundoapellido = Segundoapellido;
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
        return this._Numerodeidentidad;
    }
/**
         * @param {any} Numerodeidentidad
         */
set Numerodeidentidad(Numerodeidentidad) {
        this._Numerodeidentidad = Numerodeidentidad;
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
        return `Primernombre: ${this._Primernombre}, Segundonombre: ${this._Segundonombre},Primerapellido: ${this._Primerapellido}, Segundoapellido: ${this._Segundoapellido}, documentodeidentidad: ${this._documentodeidentidad}, Nuemrodeidentidad: ${this._Numerodeidentidad}, direccion: ${this._direccion}, correo: ${this._correo}, eps: ${this._eps}, `;        
    }


 //Métodos   
     consultarEmpleado(){
        
        let empleado = new empleado('Pepito Perez');// declaración de objetos
        console.log( empleado.toString() );
    
        console.log(empleado.Primernombre + "Su turno es:2:00 a 010:0 p.m")  //Impresión de los objetos
        console.log(empleado.Segundonombre + "Su turno es:2:00 a 010:0 p.m")
        console.log(empleado.Primerapellido + "Su turno es:2:00 a 010:0 p.m")
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
            {Primernombre: empleado.Primernombre, Segundonombre: empleado.Segundonombre, Primerapellido: empleado.Primerapellido, Segundoapellido: empleado.Segundoapellido, documentodeidentidad: empleado.documentodeidentidad, Numerodeidentidad: empleado.Numerodeidentidad, direccion: empleado.direccion, correo: empleado.correo, eps: empleado.eps },
            
          ];
        let panel = document.querySelector("#panel");

// limpiar campos del formulario
        function clearForm() {
          document.querySelector("#Primernombre").value = "";
          document.querySelector("Segundonombre").value = "";
          document.querySelector("#Primerapellido").value = "";
          document.querySelector("#Segundoapellido").value = "";
          document.querySelector("#documentodeidentidad").value = "";
          document.querySelector("#Nuemrodeidentidad").value = "";
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
            let fn = document.querySelector("#Primernombre").value;
            let ln = document.querySelector("#Segundonombre").value;
            let lb = document.querySelector("#Primerapellido").value;
            let lv = document.querySelector("#Segundopellido").value;
            let lc = document.querySelector("#documentodeidentidad").value;
            let lx = document.querySelector("#Numerodeidentidad").value;
            let lz = document.querySelector("#direccion").value;
            let lk = document.querySelector("#correo").value;
            let lj = document.querySelector("#eps").value;





            

            data = [...data, { Primernombre: fn, Segundonombre: ln, Primerapellido: lb, Segundoapellido: lv, documentodeidentidad: lc, Numerodeidentidad: lx, direccion: lz, correo: lk, eps: lj }];
            clearForm();
            console.log(data)
            renderItem();
          }
          
          function panelClick() {
            i = panel.selectedIndex;
            document.querySelector("#Primernombre").value = data[i].Primernombre;
            document.querySelector("#Segundonombre").value = data[i].Segundonombre;
            document.querySelector("#Primerapellido").value = data[i].Primerapellido;
            document.querySelector("#Segundoapellido").value = data[i].Segundoapellido
            document.querySelector("#documentodeidentidad").value = data[i].documentodeidentidad;
            document.querySelector("#Numerodeidentidad").value = data[i].Numerodeidentidad;
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
 
    
