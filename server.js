const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar el transportador de nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes cambiar a otro servicio
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Ruta principal - Mostrar el formulario
app.get('/', (req, res) => {
    res.render('index', { message: null, error: null });
});

// Ruta para enviar la carta
app.post('/send-letter', async (req, res) => {
    const { santaEmail, letter } = req.body;

    // Validación básica
    if (!santaEmail || !letter) {
        return res.render('index', { 
            message: null, 
            error: 'Por favor completa todos los campos' 
        });
    }

    try {
        // Renderizar la plantilla HTML del correo
        const emailHtml = await ejs.renderFile(
            path.join(__dirname, 'views', 'email-template.ejs'),
            { letter: letter }
        );

        // Configurar el correo
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: santaEmail,
            subject: '🎅 Carta para Santa Claus',
            html: emailHtml
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        res.render('index', { 
            message: '¡Tu carta ha sido enviada a Santa con éxito! 🎄',
            error: null 
        });

    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.render('index', { 
            message: null, 
            error: 'Hubo un error al enviar la carta. Por favor intenta de nuevo.' 
        });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🎅 Servidor corriendo en http://localhost:${PORT}`);
    console.log('📧 Asegúrate de configurar las variables de entorno en el archivo .env');
});
