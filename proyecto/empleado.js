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

    
}