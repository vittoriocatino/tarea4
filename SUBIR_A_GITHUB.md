# 📤 Guía para Subir el Proyecto a GitHub

## Pasos para Completar la Entrega

### 1️⃣ Verificar el Estado de Git

```bash
git status
```

Deberías ver todos los archivos nuevos en rojo (sin seguimiento).

---

### 2️⃣ Agregar Todos los Archivos

```bash
git add .
```

**Nota:** El archivo `.env` NO se agregará porque está en `.gitignore` (esto es correcto para proteger tus credenciales).

---

### 3️⃣ Verificar qué se Agregará

```bash
git status
```

Deberías ver en verde:
- ✅ package.json
- ✅ package-lock.json
- ✅ server.js
- ✅ views/index.ejs
- ✅ views/email-template.ejs
- ✅ .gitignore
- ✅ README.md
- ✅ Todos los archivos de documentación

**NO deberías ver:**
- ❌ .env (protegido)
- ❌ node_modules/ (protegido)

---

### 4️⃣ Hacer Commit

```bash
git commit -m "Tarea 4: Aplicación de carta a Santa con Node/Express y Nodemailer"
```

O un mensaje más descriptivo:

```bash
git commit -m "Tarea 4: Aplicación completa de carta a Santa

- Servidor Node/Express funcional
- Formulario web con diseño navideño
- Sistema de envío de correos con Nodemailer
- Plantilla HTML hermosa para los correos
- Correo de prueba enviado a franciscosevilla@iteso.mx
- Documentación completa incluida"
```

---

### 5️⃣ Verificar la Rama Actual

```bash
git branch
```

Si estás en `main` o `master`, continúa. Si no, cambia a la rama principal:

```bash
git checkout main
```

o

```bash
git checkout master
```

---

### 6️⃣ Subir al Repositorio Remoto

```bash
git push origin main
```

o si tu rama principal es `master`:

```bash
git push origin master
```

**Si es tu primer push a este repositorio:**

```bash
git push -u origin main
```

---

### 7️⃣ Verificar en GitHub

1. Ve a tu repositorio en GitHub
2. Verifica que la carpeta `Tarea4` esté visible
3. Revisa que todos los archivos estén presentes
4. Confirma que `.env` NO esté en el repositorio

---

### 8️⃣ Obtener la URL del Repositorio

La URL debería ser algo como:
```
https://github.com/tu-usuario/TecDeDesarolloEnElServidor
```

O específicamente la carpeta Tarea4:
```
https://github.com/tu-usuario/TecDeDesarolloEnElServidor/tree/main/Tarea4
```

---

## 🔍 Verificación Final

### Checklist de Entrega:

- [ ] ✅ Correo enviado a franciscosevilla@iteso.mx
- [ ] ✅ Correo tiene formato HTML (no texto plano)
- [ ] ✅ Código subido a GitHub
- [ ] ✅ Carpeta se llama "Tarea4" o "tarea4"
- [ ] ✅ Archivo .env NO está en el repositorio
- [ ] ✅ node_modules/ NO está en el repositorio
- [ ] ✅ README.md está incluido
- [ ] ✅ Todos los archivos fuente están presentes

---

## 🆘 Solución de Problemas

### Error: "fatal: not a git repository"

Tu carpeta no está inicializada con Git. Ejecuta:

```bash
git init
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
```

### Error: "Permission denied"

Necesitas configurar tus credenciales de GitHub:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### Error: "rejected - non-fast-forward"

Necesitas hacer pull primero:

```bash
git pull origin main --rebase
git push origin main
```

### El archivo .env aparece en git status

Asegúrate de que `.gitignore` contenga:
```
.env
node_modules/
```

Luego ejecuta:
```bash
git rm --cached .env
git commit -m "Remover .env del repositorio"
```

---

## 📧 Compartir la URL

Una vez que todo esté en GitHub, comparte la URL del repositorio según las instrucciones del profesor.

**Ejemplo de URL a compartir:**
```
https://github.com/tu-usuario/TecDeDesarolloEnElServidor
```

---

## ✨ ¡Listo!

Tu tarea está completa y lista para ser evaluada. 🎉

**Recuerda:**
- ✅ El correo ya fue enviado a franciscosevilla@iteso.mx
- ✅ El código está en GitHub
- ✅ La documentación está completa
- ✅ La aplicación funciona correctamente

¡Excelente trabajo! 🎅🎄
