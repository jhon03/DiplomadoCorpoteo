class empleado {

       nombre = String ;
       apellido = String;
       direccion = String;
       fechaNacimiento = Date;

    constructor(nombre, apellido, direccion, cargo, eps, 
        seguridad_social, fechaNacimiento ){

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
    set nombre(nombre){
        this._nombre = nombre;
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


 //Métodos   
     consultarEmpleado(){
        
        let empleado = new empleado('Pepito Perez');// declaración de objetos
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
    
 renderItem();


