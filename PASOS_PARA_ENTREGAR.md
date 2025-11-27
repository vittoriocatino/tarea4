# 📝 Pasos para Completar y Entregar la Tarea

## ✅ Checklist de Entrega

### 1. Configurar el Correo Electrónico

- [ ] Abrir el archivo `.env`
- [ ] Configurar `EMAIL_USER` con tu correo de Gmail
- [ ] Configurar `EMAIL_PASS` con tu contraseña de aplicación
- [ ] Guardar el archivo

**Ayuda:** Lee `INSTRUCCIONES_CONFIGURACION.md` para detalles

### 2. Probar la Aplicación Localmente

```bash
# Iniciar el servidor
npm start
```

- [ ] Abrir http://localhost:3000 en el navegador
- [ ] Verificar que el formulario se muestre correctamente
- [ ] Hacer una prueba enviando a tu propio correo primero

### 3. Enviar la Carta al Profesor

- [ ] En el campo "Correo de Santa" escribir: `franciscosevilla@iteso.mx`
- [ ] Escribir una carta apropiada en el área de texto
- [ ] Hacer clic en "Enviar Carta a Santa"
- [ ] Verificar que aparezca el mensaje de éxito

### 4. Preparar el Repositorio

```bash
# Verificar el estado de Git
git status

# Agregar todos los archivos (excepto .env que está en .gitignore)
git add .

# Hacer commit
git commit -m "Tarea 4: Aplicación de carta a Santa con Node/Express"

# Subir al repositorio remoto
git push origin main
```

**IMPORTANTE:** El archivo `.env` NO se subirá a Git (está en .gitignore) para proteger tus credenciales.

### 5. Verificar la Entrega

- [ ] El correo llegó a franciscosevilla@iteso.mx
- [ ] El correo tiene formato HTML (no texto plano)
- [ ] El código está en tu repositorio de GitHub
- [ ] La carpeta se llama "Tarea4" o "tarea4"

### 6. Compartir el Repositorio

- [ ] Copiar la URL de tu repositorio de GitHub
- [ ] Ejemplo: `https://github.com/tu-usuario/TecDeDesarolloEnElServidor`
- [ ] Compartir la URL según las instrucciones del profesor

---

## 📧 Ejemplo de Carta para Enviar

```
Querido Santa,

Este año he trabajado arduamente en mis estudios de desarrollo web. 
He aprendido Node.js, Express, y cómo enviar correos electrónicos 
desde una aplicación.

Esta aplicación es mi carta digital para ti, creada con:
- Node.js y Express
- Nodemailer para envío de correos
- Plantillas EJS para las vistas
- HTML/CSS para el diseño

Espero que te guste mi trabajo y que tengas una feliz Navidad.

Con cariño,
[Tu nombre]
```

---

## 🎯 Criterios de Evaluación

✅ Aplicación Node/Express funcional
✅ Formulario con campos requeridos (correo y carta)
✅ Envío de correo desde el API (servidor)
✅ Plantilla HTML en el correo
✅ Correo enviado a franciscosevilla@iteso.mx
✅ Código en repositorio de GitHub

---

## 🆘 Si Algo Sale Mal

**El correo no se envía:**
1. Verifica las credenciales en `.env`
2. Revisa la consola del servidor para errores
3. Asegúrate de tener internet

**Error "Invalid login":**
1. Usa una contraseña de aplicación, no tu contraseña normal
2. Activa la verificación en dos pasos en Gmail

**No puedo hacer push a Git:**
1. Verifica que tengas permisos en el repositorio
2. Asegúrate de estar en la rama correcta
3. Verifica tu conexión a internet

---

## 📞 Recursos Adicionales

- README.md - Documentación completa
- INSTRUCCIONES_CONFIGURACION.md - Guía de configuración
- ESTRUCTURA_PROYECTO.txt - Estructura de archivos

---

¡Buena suerte con tu entrega! 🎅🎄✨
