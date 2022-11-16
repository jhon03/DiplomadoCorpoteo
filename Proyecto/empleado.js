class empleado {

       nombre = String ;
       apellido = String;
       direccion = String;
       fechaNacimiento = Date;

    constructor(nombre, apellido, direccion, cargo, eps, 
        seguridad_social, fechaNacimiento){

        this._nombre = nombre; //cadena de valores alfanùmericos
        this._apellido = apellido;
        this._direccion = direccion;
        this._fechaNacimiento = fechaNacimiento; //DDMMAAA 

    /*Los Setters & Getters, son métodos de acceso lo que indica que son siempre declarados públicos,
     y nos sirven para dos cosas:

Setters: Del Inglés Set, que significa establecer,
 pues nos sirve para asignar un valor inicial a un atributo, pero de forma explícita,
  además el Setter nunca retorna nada (Siempre es void), 
  y solo nos permite dar acceso público a ciertos atributos que deseemos modificar. .

Getters: Del Inglés Get, que significa obtener, 
pues nos sirve para obtener (recuperar o acceder) 
el valor ya asignado a un atributo y utilizarlo para cierto método
*/
     }   

     get nombre(){
        return this._nombre;
    }

    /**
     * @param {any} nombre
     */
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    /**
     * @param {any} apellido
     */
    set apellido(apellido){
        this._apellido = apellido;
    }
/*

Un constructor es un elemento de una clase cuyo identificador coincide con 
el de la clase correspondiente y que tiene por objetivo obligar a 
y controlar cómo se inicializa una instancia de una determinada clase.

Para asignar valores a los campos o llamar a otro constructor.


*/
    toString(){
        return `idEmpleado: ${this._idEmpleado}, nombre: ${this._nombre}  `;
    }


    
     consultarEmpleado(){
        
        let producto1 = new Producto('Pantalón', 200);
        let producto2 = new Producto('Camisa', 100);
        console.log( producto1.toString() );
        console.log( producto2.toString() );
    
        console.log("Su turno es:2:00 a 10:00 p.m")
        } 
    }


