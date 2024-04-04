const entitites = [
  {
    name: "Aguascalientes",
    shortName: "AGS",
  },
  {
    name: "Baja California",
    shortName: "BC",
  },
  {
    name: "Baja California Sur",
    shortName: "BCS",
  },
  {
    name: "Campeche",
    shortName: "CAMP",
  },
  {
    name: "Chiapas",
    shortName: "CHIS",
  },
  {
    name: "Chihuahua",
    shortName: "CHIH",
  },
  {
    name: "Coahuila",
    shortName: "COAH",
  },
  {
    name: "Colima",
    shortName: "COL",
  },
  {
    name: "Ciudad de México",
    shortName: "MEX",
  },
  {
    name: "Durango",
    shortName: "DGO",
  },
  {
    name: "Guanajuato",
    shortName: "GTO",
  },
  {
    name: "Guerrero",
    shortName: "GRO",
  },
  {
    name: "Hidalgo",
    shortName: "HGO",
  },
  {
    name: "Jalisco",
    shortName: "JAL",
  },
  {
    name: "Estado de México",
    shortName: "MEX",
  },
  {
    name: "Michoacán",
    shortName: "MICH",
  },
  {
    name: "Morelos",
    shortName: "MOR",
  },
  {
    name: "Nayarit",
    shortName: "NAY",
  },
  {
    name: "Nuevo León",
    shortName: "NL",
  },
  {
    name: "Oaxaca",
    shortName: "OAX",
  },
  {
    name: "Puebla",
    shortName: "PUE",
  },
  {
    name: "Querétaro",
    shortName: "QRO",
  },
  {
    name: "Quintana Roo",
    shortName: "QR",
  },
  {
    name: "San Luis Potosí",
    shortName: "SLP",
  },
  {
    name: "Sinaloa",
    shortName: "SIN",
  },
  {
    name: "Sonora",
    shortName: "SON",
  },
  {
    name: "Tabasco",
    shortName: "TAB",
  },
  {
    name: "Tamaulipas",
    shortName: "TAMS",
  },
  {
    name: "Tlaxcala",
    shortName: "TLAX",
  },
  {
    name: "Veracruz",
    shortName: "VER",
  },
  {
    name: "Yucatán",
    shortName: "YUC",
  },
  {
    name: "Zacatecas",
    shortName: "ZAC",
  },
];

function getShortName(entity) {
  return (
    entitites.filter((a) => a.name.toLowerCase() === entity.toLowerCase())[0]
      ?.shortName || entity
  );
}

module.exports = getShortName;
