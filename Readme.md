# README

## VERSION SWAPI -  NESTJS + TYPESCRIPT + RXJS
Por un mal consejo, no aplique Typescript y nestjs que es donde tengo mas experiencia. 
Actualice para demo personal como lo haria usando NEST + Serverless + Typescript

Por ahora tengo solo los planetas

!! Observaciones .  A pesar de consumir un poco mas RAM. La velocidad de respuesta es mayor a las version de JS   anteriores.

El peso logre bajarlo bastante usando netamente el CORE de NEST + algunas configuraciones y el plugin **serverless-plugin-optimize**.

**Opinion personal -- este plugin para debbuging en la nube no es buena idea.... solo usarlo para ambientes productivos.**

A falta de aumentar mas modulos, SWAGGER y mas TESTs.

PLanets:

- LISTA PAGINADA DE PLANETAS :  https://npmy9oafel.execute-api.us-east-1.amazonaws.com/dev/planetas/
- BUSQUEDA DE PLANETAS por nombre y paginado :https://npmy9oafel.execute-api.us-east-1.amazonaws.com/dev/planetas/?pagina=1&buscar=Corellia
- BUSQUEDA DE PLANETAS POR ID : https://npmy9oafel.execute-api.us-east-1.amazonaws.com/dev/planetas/10



---


## Test Swapi Serverless , solo con  JAVASCRIPT

Desarrolle 2 proyectos serverless distintos, cumpliendo con lo requerido

Para desplegar cualquier proyecto basta con ingresar al proyecto y correr el comando:
```
sls deploy
```

Obviamente teniendo instalado serverless  y registrado las credenciales de AWS por default. No se mencionó si querian que se ajustara la configuración para desplegarse usando un ROL, VPC, u otras configuraciones especificas  . Si se necesita se puede actualizar.

Para el Proyecto **dynamo-pokekex**, si se desea  correr en local es necesario instalar el pluging **serverless-dynamodb-local**, esta configurado  para correr en el puerto 8000
```
sls install serverless-dynamodb-local
```

## Proyecto 1 - StarWars
Tiene los endpoint GET que usa SWAPI como proveedor de data.
Es una version PROXY de serverless , un solo lambda usando Express  para routear las peticiones al servicio que se necesite. 

- No usa librerias para validar las request como Joi u otras, debido a que solo se podrian validar el caso de busqueda por ID. Se aumentaria el peso del lambda y su tiempo de despliegue por muy pocos beneficios. 

- Los servicios usados de Swapi son  : **/planets** , **/people** .
Fueron traducidos y expuestas  en español **/planetas** , **/personajes**. (personajes suena mejor que personas). 
- Se esta sirviendo con paginado , filtro por ID y  buscador por nombre
- Si el el query **pagina** no es  un Numero Valido,  se omitira en la consulta

- Personajes :: 
    https://3u1ccri4r2.execute-api.us-east-1.amazonaws.com/dev/personajes?pagina=1&buscar=Leia


- Planetas :: 
    https://3u1ccri4r2.execute-api.us-east-1.amazonaws.com/dev/planetas/1




## Proyecto 2 - Dynamo-Pokedex
Tiene 1 metodo POST (crear) y 2 GET (para listar lo creado y buscar por ID). 
Es una version desacoplada de Serverless, permite crea lambdas por cada funcion. Usa el plugin **serverless-bundle** que  hace mas ligero el lambda al desplegarse.

- Usa Dynamo para la persistencia, usando la directamente aws-sdk.


- Usa Joi para validar request. En este caso se tiene un methodo Post . Aca si vale la pena aumentar un poco el peso para validar mejor esos campos antes de la creacion. 
- Asi mismo se uso para validar el PokemonId como UUIDV4 en el get por ID

- Usa middly para facilitar el uso de middlewares como los validadores de Joi, o  el tranform-response personalizado.

- Quise hacer el CRUD completo . Pero por el trabajo  no me alcanzo el tiempo para dejarlo como me hubiera gustado, sorry



    ### Registra Pokemon
    - (POST) https://e9jng647of.execute-api.us-east-1.amazonaws.com/dev/pokemon

            {
                "name":"charmander222",
                "category":  "fire",
                "ability" :"lanza llamas"
            }

    ### Lista TODOS los Pokemon registrados
    - (GET) https://e9jng647of.execute-api.us-east-1.amazonaws.com/dev/pokemon

    ### Busqueda por ID
    - (GET) https://e9jng647of.execute-api.us-east-1.amazonaws.com/dev/pokemon/d48418b2-3dea-4900-b184-4abe08ab5aa8
