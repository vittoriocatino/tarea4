# 🎅 Tarea 4 - Aplicación de Carta a Santa

Aplicación Node/Express para enviar cartas a Santa Claus por correo electrónico con plantilla HTML.

## 📋 Descripción

Esta aplicación permite a los usuarios escribir y enviar cartas a Santa a través de un formulario web. El correo se envía con una hermosa plantilla HTML desde el servidor usando Nodemailer.

## 🚀 Instalación

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**

Crea un archivo `.env` en la raíz del proyecto (copia de `.env.example`):

```env
EMAIL_USER=tu-correo@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicacion
```

### 📧 Configuración de Gmail

Para usar Gmail, necesitas generar una **contraseña de aplicación**:

1. Ve a tu cuenta de Google: https://myaccount.google.com/
2. Selecciona "Seguridad"
3. En "Cómo inicias sesión en Google", selecciona "Verificación en dos pasos" (debes activarla)
4. Al final de la página, selecciona "Contraseñas de aplicaciones"
5. Selecciona "Correo" y "Otro (nombre personalizado)"
6. Escribe "Carta Santa" y genera la contraseña
7. Copia la contraseña de 16 caracteres y úsala en `EMAIL_PASS`

**Nota:** Si no quieres usar Gmail, puedes configurar otro servicio SMTP modificando el `transporter` en `server.js`.

## ▶️ Uso

1. **Iniciar el servidor:**
```bash
npm start
```

O para desarrollo con auto-reinicio:
```bash
npm run dev
```

2. **Abrir en el navegador:**
```
http://localhost:3000
```

3. **Llenar el formulario:**
   - **Correo de Santa:** Ingresa el correo destino (franciscosevilla@iteso.mx para la entrega)
   - **Carta:** Escribe tu carta a Santa
   - Haz clic en "Enviar Carta a Santa"

## 📁 Estructura del Proyecto

```
tarea4/
├── views/
│   ├── index.ejs              # Formulario principal
│   └── email-template.ejs     # Plantilla HTML del correo
├── server.js                  # Servidor Express
├── package.json               # Dependencias
├── .env.example               # Ejemplo de variables de entorno
├── .gitignore                 # Archivos ignorados por Git
└── README.md                  # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **Nodemailer** - Envío de correos
- **EJS** - Motor de plantillas
- **dotenv** - Gestión de variables de entorno

## 📝 Características

✅ Formulario web intuitivo y con diseño navideño
✅ Validación de campos
✅ Plantilla HTML hermosa para el correo
✅ Envío de correos desde el servidor (API)
✅ Mensajes de éxito/error
✅ Diseño responsive

## 🎯 Entrega de la Tarea

Para enviar la carta al profesor:
1. Asegúrate de que el servidor esté corriendo
2. Ingresa `franciscosevilla@iteso.mx` en el campo "Correo de Santa"
3. Escribe tu carta
4. Envía el formulario

## 🔒 Seguridad

- Las credenciales de correo están en `.env` (no se suben a Git)
- El archivo `.gitignore` protege información sensible
- Nunca compartas tu archivo `.env` o contraseñas de aplicación

## 📦 Dependencias

```json
{
  "express": "^4.18.2",
  "nodemailer": "^6.9.7",
  "ejs": "^3.1.9",
  "dotenv": "^16.3.1",
  "body-parser": "^1.20.2"
}
```

## 🐛 Solución de Problemas

**Error: "Invalid login"**
- Verifica que EMAIL_USER y EMAIL_PASS estén correctos en `.env`
- Asegúrate de usar una contraseña de aplicación, no tu contraseña normal
- Verifica que la verificación en dos pasos esté activada en Gmail

**El correo no llega:**
- Revisa la carpeta de spam
- Verifica que el correo destino sea correcto
- Revisa los logs del servidor en la consola

**Puerto en uso:**
- Cambia el puerto en `.env`: `PORT=3001`

## 👨‍💻 Autor

Tarea 4 - Desarrollo en el Servidor

## 📄 Licencia

ISC
