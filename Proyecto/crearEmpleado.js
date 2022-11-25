class crearEmpleado {

    nombres = String ;
    apellidos = String;
    tipoDocumento= String; 
    númeroDocumento= Number;
    fechaNacimiento = Date;
    direccion= String;
    cargo= String; 
    eps= String;
    seguridadSocial=String;
    correoElectronico=String;
    contraseña= String;
    
    constructor (nombres, apellidos, tipoDocumento, númeroDocumento, fechaNacimiento, direccion, cargo, eps, 
    seguridadSocial, correoElectronico, contraseña ){
    
     this._nombres = nombres; //cadena de valores alfanùmericos
     this._apellidos = apellidos;
     this._tipoDocumento= tipoDocumento;
     this._númeroDocumento= númeroDocumento;
     this._fechaNacimiento= fechaNacimiento; //DDMMAAAA
     this._direccion = direccion;
     this._cargo = cargo;
     this._eps = eps;
     this._seguridadSocial = seguridadSocial;
     this._correoElectronico = correoElectronico;
     this._contraseña = contraseña; //cadena de valores alfanumericos
    } 
    

    
        get nombres (){
          return this._nombres;
      }
    
    /**
    * @param {any} nombres
     */
    set nombre(nombres) {
     this._nombres = nombres;
      }
    get apellidos() {
          return this._apellidos;
      }
    
    /**
           * @param {any} apellidos
           */
     set apellido(apellidos){
          this._apellidos = apellidos;
      }

      get tipoDocumento () {
        return this._tipoDocumento;
    }
  /**
         * @param {any} tipoDocumento
         */
  set tipoDocumento(tipoDocumento) {
        this._tipoDocumento = tipoDocumento;
    }
    get númeroDocumento () {
        return this._númeroDocumento;
    }
  /**
         * @param {any} númeroDocumento
         */
  set _númeroDocumento(_númeroDocumento) {
        this._númeroDocumento = númeroDocumento;
    }
    get fechaNacimiento () {
        return this._fechaNacimiento;
    }
  /**
         * @param {any} fechaNacimiento
         */
  set fechaNacimiento(fechaNacimiento) {
        this._fechaNacimiento = fechaNacimiento;
    }

     get direccion () {
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
      get correoElectronico () {
        return this._correoElectronico;
    }
  /**
         * @param {any} correoElectronico
         */
  set correoElectronico(correoElectronico) {
      this._correoElectronico = correoElectronico;
    }
    get contraseña () {
       return this._contraseña;
    }
  /**
         * @param {any} contraseña
         */
  set contraseña(contraseña) {
     this._contraseña = contraseña;
    }


    toString(){
    return `idEmpleado: ${this._idEmpleado}, nombre: ${this._nombres}, apellidos: ${this._apellidos}, tipoDocumento: ${this._tipoDocumento}, númeroDocumento: ${this._númeroDocumento}, fechaNacimiento: ${this._fechaNacimiento}, direccion: ${this._direccion}, cargo: ${this._cargo}, eps: ${this._eps}, seguridadSocial: ${this._seguridadSocial}, correoElectronico: ${this._correoElectronico}, contraseña: ${this._contraseña}  `;
     }
        
        //Métodos   
     crearEmpleado(){
         
       let empleado = new empleado('Pepito Perez');// declaración de objetos
         console.log( empleado.toString() );
        console.log(empleado.nombre + "Su turno es:2:00 a 10:00 p.m")  //Impresión de los objetos
        } 
        }
        
         
         let el, i;
         let data = [
         { nombres: empleado._nombres, apellidos: empleado._apellidos, tipoDocumento: empleado._tipoDocumento,  númeroDocumento: empleado._númeroDocumento, fechaNacimiento: empleado._fechaNacimiento, direccion: empleado._direccion, cargo: empleado._cargo, eps: empleado._eps, seguridadSocial: empleado._seguridadSocial, correoElectronico: empleado._correoElectronico, contraseña: empleado._contraseña}
         
         ];
         let panel = document.querySelector("#panel");
        
         // limpiar campos del formulario
         function clearForm() {
         document.querySelector("#nombres").value = "";
         document.querySelector("#apellidos").value= "";
         document.querySelector("#tipoDocumento").value= "";
         document.querySelector("#númeroDocumento").value = "";
         document.querySelector("#fechaNaciemiento").value= "";
         document.querySelector("#direccion").value= "";
         document.querySelector("#cargo").value = "";
         document.querySelector("#eps").value="";
         document.querySelector("#seguridadSocial").value="";
         document.querySelector("#correoElectronico").value="";
         document.querySelector("#contraseña").value="";
         } 
         function renderItem() {
        
         panel.textContent = "";
         data.forEach(empleado => {
         el = document.createElement("option");
         el.innerText = `${empleado.nombres} ${empleado.apellidos} ${empleado.tipoDocumento} ${empleado.númeroDocumento} ${empleado.fechaNacimiento} ${empleado.direccion}${empleado.cargo}${empleado.eps}${empleado.seguridadSocial}${empleado.correoElectronico}${empleado.contraseña}`;
         panel.append(el);
         });
         }
        
         function guardarEmpleado() {
         let fn = document.querySelector("#nombres").value;
         let fa = document.querySelector("#apellidos").value;
         let fd = document.querySelector("#tipoDocumento").value; 
         let ln = document.querySelector("#númeroDocumento").value;
         let fc = document.querySelector("#fechaNacimiento").value;
         let fv = document.querySelector("#direccion").value;
         let lm = document.querySelector("#cargo").value;
         let fe = document.querySelector("#eps").value;
         let fs = document.querySelector("#seguridadSocial").value;
         let fm = document.querySelector("#correoElectronico").value;
         let fp = document.querySelector("#contraseña").value;
        
        
        
     data = [...data, { nombres: fn, apellidos: fa, tipoDocumento: fd, númeroDocumento: ln, fechaNacimiento: fc, direccion: fv, cargo: lm, eps: fe, seguridadSocial: fs, correoElectronico: fm, contraseña: fp }];
        clearForm();
         console.log(data)
         renderItem();
         }
        
         function panelClick() {
        i = panel.selectedIndex;
         document.querySelector("#nombres").value = data[i].nombres;
         document.querySelector("#apellidos").value = data[i].apellidos;
         document.querySelector("#tipoDocumento").value = data[i].tipoDocumento;
         document.querySelector("#númeroDocumento").value = data[i].númeroDocumento;
         document.querySelector("#fechaNacimeinto").value = data[i].fechaNacimiento;
         document.querySelector("#direccion").value = data[i].direccion;
         document.querySelector("#cargo").value = data[i].cargo;
         document.querySelector("#eps").value = data[i].eps;
         document.querySelector("#seguridadSocial").value = data[i].seguridadSocial;
         document.querySelector("#correoElectronico").value = data[i].correoElectronico; 
         document.querySelector("#contraseña").value = data[i].contraseña;
         }
         

        //alerta
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        
        const alert = (message, type) => {
         const wrapper = document.createElement('div')
         wrapper.innerHTML = [
         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
         ` <div>${message}</div>`,
         ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
         '</div>'
         ].join('')
        
         alertPlaceholder.append(wrapper)
        }
        
        const alertTrigger = document.getElementById('liveAlertBtn')
        if (alertTrigger) {
         alertTrigger.addEventListener('click', () => {
         alert('empleado! creado con éxito', 'success')
         alert('empleado! creado con éxito', 'success')
         alert('empleado! creado con éxito', 'success')
          })
        }
          renderItem();
        
        
       

