# Demo independiente del AGC Chatbot Widget

Pequena pagina estatica para demostrar como un sitio externo puede cargar el widget de chatbot de la Ticketera.

## Ubicacion

`/home/biwini/chatbot-widget-demo`

## Uso rapido

Desde esta carpeta:

```bash
npm start
```

Luego abrir <http://localhost:5177>.

Tambien puede servirse sin npm:

```bash
python3 -m http.server 5177
```

## Configuracion

1. Ingresar la URL base de la Ticketera.
2. Ingresar la clave publica configurada para el widget, si corresponde.
3. Pulsar **Cargar widget**.
4. Usar el boton del chatbot que aparece en la esquina inferior derecha.

La demo carga este recurso desde la Ticketera:

```text
https://TU-DOMINIO/js/agc-chatbot-widget.js
```

La Ticketera debe permitir el origen desde el que se sirve esta demo en `CHATBOT_ALLOWED_ORIGINS`. La clave privada de ElevenLabs no se copia ni se guarda en este proyecto.

## Relacion con la Ticketera

Este proyecto no depende del codigo fuente de la Ticketera. La unica integracion es la carga del script embebible y la comunicacion que ese widget realiza con la API configurada en la Ticketera.
# chatbot-widget-demo
