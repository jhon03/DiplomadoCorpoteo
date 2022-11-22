class Empleado {
    constructor (nombres, apellidos, direccion, cargo, eps, seguridadSocial, fechaNacimiento)   {           
    
    this.nombres= String;
    this.apellidos= String;
    this.direccion= String;
    this.cargo= String; 
    this.eps= String; 
    this.seguridadSocial= String; 
    this.fechaNacimiento= Date; 

    
}

consultarTurno () {


    console.log("su turno es: 2:00 a 10:.00 p.m")
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
