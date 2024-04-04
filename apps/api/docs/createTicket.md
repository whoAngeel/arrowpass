# Crear ticket digital para Aplle Wallet (.pkpass)

Endpoint : `/send-apple-ticket`

Method: `POST`

Request Body:

```json
{
  "organization": {
    "name": "UneBus Guanajuato",
    "headerLogo": "https://github.com/carlosupreme/images-arrowpass/blob/main/Unebus%20-%20copia.png?raw=true",
    "footerLogo": "https://github.com/carlosupreme/images-arrowpass/blob/main/Unebus.png?raw=true"
  },
  "ticket": {
    "barcodeValue": "98582373747",
    "origin": "Aguascalientes",
    "destination": "Oaxaca",
    "serviceNumber": 11102301031,
    "departureDate": "12/10/2024",
    "departureTime": "22:00 hrs",
    "passengerName": "Amado Jose Santiago",
    "seatNumber": 1,
    "gate": "A1"
  },
  "passengerEmail": "carlosupremedev@gmail.com"
}
```
