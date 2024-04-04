<div align="center" id="top"> 
  <!-- <img src="/src/assets/SL.png" alt="{{app_name}}" width="80"/> -->

  <!-- &#xa0; -->

  <!-- <a href="https://{{app_url}}.netlify.app">Demo</a> -->
</div>

<h1 align="center">ArroWPass</h1>

<p align="center" style="display:flex; justify-content:space-evenly;">
  <img width="60"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
  <img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
<img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
<img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

 <!-- <img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
 <img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
<img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"/> -->

</p>

<hr>

<p align="center">
  <a href="#descripción">Descripción</a> &#xa0; | &#xa0; 
  <a href="#Requirimientos">Requirimientos</a> &#xa0; | &#xa0; 
  <a href="#Instalación">Instalación</a> 
</p>

## :dart: Descripción

Track de flecha amarilla sobre un boleto virtual y asi...

## :white_check_mark: Requirimientos

Antes de iniciar debes tener [Git](https://git-scm.com), y [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Instalación

```bash
# clonar este proyecto
$ git clone https://github.com/whoAngeel/arrowpass.git

# dirigirse a la ruta del backend
$ cd arrowpass

# instalar las dependencias
$ npm i

# levantar la base de datos de docker
# $ docker-compose up -d postgres

# Ejecutar este proyecto
$ npm run dev

```

<h1>API Documentation</h1>

<h2>Send Google Pass</h2>

<p>Endpoit para enviar el boleto a Google Wallet por medio del email.</p>

<ul>
    <li><strong>URL:</strong> http://localhost:3000/api/wallet/send-google-ticket</li>
    <li><strong>Method:</strong> POST</li>
    <li><strong>Auth required:</strong> No</li>
</ul>

<h3>Request Body</h3>

<table>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>passenger</td>
            <td>string</td>
            <td>Nombre del pasajero.</td>
        </tr>
        <tr>
            <td>email</td>
            <td>string</td>
            <td>Dirección de correo electrónico del destinatario.</td>
        </tr>
        <tr>
            <td>seatNumber</td>
            <td>number</td>
            <td>Número de asiento asignado al pasajero.</td>
        </tr>
        <tr>
            <td>from</td>
            <td>object</td>
            <td>Información de la terminal de salida.</td>
        </tr>
        <tr>
            <td>to</td>
            <td>object</td>
            <td>Información de la terminal de llegada.</td>
        </tr>
        <tr>
            <td>serviceNumber</td>
            <td>number</td>
            <td>Número del servicio.</td>
        </tr>
        <tr>
            <td>service</td>
            <td>string</td>
            <td>Nombre del servicio de autobús.</td>
        </tr>
        <tr>
            <td>departureDate</td>
            <td>string</td>
            <td>Fecha y hora de salida (ISO 8601).</td>
        </tr>
        <tr>
            <td>boardingGate</td>
            <td>string</td>
            <td>Información de la puerta de abordaje.</td>
        </tr>
        <tr>
            <td>billingToken</td>
            <td>string</td>
            <td>Token para facturación/pago.</td>
        </tr>
        <tr>
            <td>folio</td>
            <td>number</td>
            <td>Folio/identificador del boleto.</td>
        </tr>
        <tr>
    <td>category</td>
    <td>string</td>
    <td>Categoría del boleto (por ejemplo, tipo de pasajero).</td>
</tr>
    <tr>
        <td>price</td>
        <td>number</td>
        <td>Precio del boleto.</td>
    </tr>
    <tr>
        <td>payMethod</td>
        <td>string</td>
        <td>Método de pago utilizado.</td>
    </tr>
    <tr>
        <td>status</td>
        <td>string</td>
        <td>Estado del boleto (por ejemplo, abordado, vigente, cancelado, caducado).</td>
    </tr>

</table>

<h4>Example Request Body</h4>

<pre>
<code>
{
    "passenger": "Laura Sosa Aguilar",
    "email": "ronaldoa.ojeda@gmail.com",
    "seatNumber": 4,
    "from": {
        "state": "GUADALAJARA",
        "code": "GUA",
        "terminal": "Plaza de Sol"
    },
    "to": {
        "state": "MÉXICO",
        "code": "MEX",
        "terminal": "Central Norte"
    },
    "serviceNumber": 258,
    "service": "Primera Plus",
    "departureDate": "2024-04-03T10:00:00",
    "boardingGate": "A1",
    "billingToken": "token",
    "folio": 12341,
    "category": "Profesor",
    "price": 120.00,
    "payMethod": "Efectivo",
    "status": "Vigente"
}
</code>
</pre>

<h3>Response</h3>

<ul>
    <li><strong>Success Response:</strong> 200 OK</li>
    <ul>
        <li>Content: <code>{ "message": "Email enviado" }</code></li>
    </ul>
    <li><strong>Error Response:</strong> 4xx/5xx with appropriate error message.</li>
</ul>

##

<a href="#top">Back to top</a>
