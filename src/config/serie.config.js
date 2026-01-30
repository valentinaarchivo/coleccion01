const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://valentinaarchivo.github.io",
  "baseurl": "/coleccion01",
  "title": "Obras de Cochet",
  "subtitle": "Serie Paris",
  "credits": "",
  "copyright": "Todos los derechos reservados, 2026",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "pid",
        "label": "Pid",
        "type": "text"
      },
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "autores",
        "label": "Autores",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      },
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text"
      },
      {
        "key": "pais",
        "label": "Pais",
        "type": "text"
      },
      {
        "key": "tipo_principal",
        "label": "Tipo_principal",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "pid",
      "label",
      "autores",
      "fecha",
      "ciudad",
      "pais",
      "tipo_principal"
    ]
  }
};
export default config;