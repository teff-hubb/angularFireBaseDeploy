## Proyecto deploy firebase angular 

-crear una aplicacion de gestion de alquileres 

    - vamos a crear una aplicacion que nos permite mostrar casas de alquiler, ver los datos de la casa y posteriormente situarla en un mapa en google maps.

    1- crear modelo de datos para las casas. inicialmente vamos a crear un array dentro del servicio que tenga 4 casas. 
    2- crear una interface que defina dicho modelo. 
            id: number, titulo: string, direccion: string, ciudad: string,  numerohabitaciones: number, propietario: string, disponibilidad: boolean, foto: string, : number

    3- en app componente crearemos un menu transversal con dos botones Listado y nueva casa.
    4- listado cargara componente home donde se visualizaran todas las casas a modo de cards
    5- cada casa tendra unn boton que me lleve a la vista de la casa, donde se visualizaran todos los datos y el mapa
    6- nueva casa tendra un formulario de tipo template sin validaciones, que guarden en mi array los datos del casa.

    // todo esto lo vamos hacer contra un array el servicio, cuando montemos firebase sistituremos las funciones de array del servicio por la peticion a firebase.
      1 tarea crear el servicio ,interface y generar rutas segun lo explicado arriba.
      2 crear los componentes para asignar a las rutas especificas