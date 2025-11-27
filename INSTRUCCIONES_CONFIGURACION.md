# 🔧 Instrucciones de Configuración Rápida

## Paso 1: Configurar Gmail para enviar correos

### Opción A: Usar Gmail (Recomendado)

1. **Activar verificación en dos pasos:**
   - Ve a: https://myaccount.google.com/security
   - Busca "Verificación en dos pasos" y actívala

2. **Generar contraseña de aplicación:**
   - Ve a: https://myaccount.google.com/apppasswords
   - Selecciona "Correo" y "Otro dispositivo"
   - Escribe "Carta Santa"
   - Copia la contraseña de 16 caracteres (sin espacios)

3. **Editar el archivo `.env`:**
   ```env
   EMAIL_USER=tu-correo@gmail.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx  (la contraseña que copiaste)
   PORT=3000
   ```

### Opción B: Usar otro servicio de correo

Si prefieres usar Outlook, Yahoo u otro servicio, edita `server.js` línea 20-25:

```javascript
const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',  // Para Outlook
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
```

**Servicios comunes:**
- Gmail: `smtp.gmail.com` (puerto 587)
- Outlook: `smtp.office365.com` (puerto 587)
- Yahoo: `smtp.mail.yahoo.com` (puerto 587)

## Paso 2: Iniciar la aplicación

```bash
npm start
```

## Paso 3: Probar la aplicación

1. Abre tu navegador en: http://localhost:3000
2. Llena el formulario:
   - **Correo de Santa:** franciscosevilla@iteso.mx
   - **Carta:** Escribe tu carta
3. Haz clic en "Enviar Carta a Santa"

## ✅ Verificación

Si todo está bien configurado, verás:
- ✅ Mensaje de éxito en la página
- ✅ El correo llegará a franciscosevilla@iteso.mx
- ✅ El correo tendrá una plantilla HTML hermosa

## ❌ Problemas Comunes

**"Invalid login":**
- Verifica que uses una contraseña de aplicación, NO tu contraseña normal
- Asegúrate de que la verificación en dos pasos esté activada

**"Connection timeout":**
- Verifica tu conexión a internet
- Algunos antivirus bloquean el puerto 587

**El correo no llega:**
- Revisa la carpeta de spam
- Verifica que el correo destino sea correcto

## 📧 Para la entrega de la tarea

Envía la carta a: **franciscosevilla@iteso.mx**

¡Listo! 🎅🎄
