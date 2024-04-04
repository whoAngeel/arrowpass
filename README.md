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
  <a href="#Instalación">Instalación</a>  &#xa0; | &#xa0; 
  <a href="#api">API documentation </a> &#xa0; | &#xa0; 
</p>

## Integrantes EMCO

Angel Jesus Zorrilla Cuevas
Ronaldo Acevedo Ojeda
Carlos Alberto Sosa Perera
Amado Juvencio Jose Santiago

## Descripción

API REST que implementa boletos de transporte en google wallet y apple wallet

## Requirimientos

Antes de iniciar debes tener [Git](https://git-scm.com), y [Node](https://nodejs.org/en/) instalados.

## Instalación

```bash
# clonar este proyecto
$ git clone https://github.com/whoAngeel/arrowpass.git

# dirigirse a la ruta del backend
$ cd arrowpass

# instalar las dependencias
$ npm i

# Ejecutar este proyecto
$ npm run dev

```

# API Documentation

<h2>Google Wallet</h2>

<p>Endpoint para enviar el boleto a Google Wallet por medio del email.</p>

<ul>
    <li><strong>URL:</strong> http://localhost:3000/api/wallet/send-google-ticket</li>
    <li><strong>Method:</strong> POST</li>
    <li><strong>Auth required:</strong> No</li>
</ul>

<h3>Ejemplo Request Body</h3>

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
    <li><strong>Error Response:</strong> 4xx/5xx con su mensaje de error correspondiente.</li>
</ul>
</pre>
</pre>
<h2>Apple Wallet</h2>

<p>Endpoint para enviar el boleto de Apple Wallet por medio del email.</p>

<ul>
    <li><strong>URL:</strong> http://localhost:3000/api/wallet/send-apple-ticket</li>
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
                <td>logos</td>
                <td>object</td>
                <td>Logos para la organización (cabecera y pie de página).</td>
            </tr>
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
                <td>Número del servicio/autobús.</td>
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
                <td>Información de la puerta de embarque.</td>
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

</tbody>
</table>

<h4>Ejemplo del Request Body</h4>

<pre>
<code>
{
    "logos":{
      "headerLogo": "https://github.com/carlosupreme/images-arrowpass/blob/main/UnebusHeader.png?raw=true",
		  "footerLogo": "https://github.com/carlosupreme/images-arrowpass/blob/main/UnebusFooter.png?raw=true"
    },
    "passenger":"Laura Muñoz Aguilar",
		"email":"carlosupremedev@gmail.com", 
    "seatNumber": 4,
    "from":{
      "state":"GUADALAJARA",
      "code":"GUA",
      "terminal": "Plaza de Sol"
    },
    
    "to":{
      "state":"MÉXICO",
      "code":"MEX",
      "terminal":"Central Norte"
    },
    "serviceNumber": 258,
    "service": "Primera Plus",
    "departureDate": "2024-04-03T10:00:00",
    "boardingGate": "A1",
    "billingToken": "token",
    "folio": 12341,
    "category": "Profesor",
    "price" : 120.00,
    "payMethod": "Efectivo",
    "status":"Vigente"
}
</code>
</pre>
<h3>Response</h3>

<ul>
    <li><strong>Success Response:</strong> 200 OK</li>
    <ul>
        <li>Content: <code>{ "message": "Email enviado" }</code></li>
    </ul>
    <li><strong>Error Response:</strong> 4xx/5xx con su mensaje de error correspondiente.</li>
</ul>

<a href="#top">Back to top</a>
