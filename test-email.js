// Script de prueba para enviar un correo de prueba
const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmail() {
    console.log('🧪 Iniciando prueba de envío de correo...\n');
    
    // Configurar el transportador
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Contenido HTML de prueba
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background: linear-gradient(135deg, #c41e3a 0%, #e74c3c 100%); padding: 40px 20px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 2.5em; }
            .content { padding: 40px 30px; background-color: #ffffff; }
            .letter-content { background-color: #fff9e6; border-left: 4px solid #ffd700; padding: 20px; margin: 20px 0; line-height: 1.8; }
            .footer { background-color: #2c5f2d; color: #ffffff; text-align: center; padding: 30px 20px; }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <div style="font-size: 4em;">🎅</div>
                <h1>Carta para Santa Claus</h1>
                <div style="font-size: 1.5em; letter-spacing: 10px; color: #87ceeb;">❄️ ❄️ ❄️</div>
            </div>
            <div class="content">
                <p style="font-size: 1.3em; color: #c41e3a; font-weight: bold;">🎄 Querido Santa Claus,</p>
                <div class="letter-content">
Querido Santa,

Este es un correo de prueba enviado desde mi aplicación Node/Express para la Tarea 4.

He creado una aplicación completa que incluye:
- Servidor Express con Node.js
- Formulario web con diseño navideño
- Sistema de envío de correos con Nodemailer
- Plantilla HTML hermosa para los correos
- Validación de campos

La aplicación está funcionando correctamente y este correo es la prueba de que el sistema de envío está operativo.

¡Espero que te guste mi trabajo!

Con cariño,
Karla (catinovit@gmail.com)
                </div>
                <div style="text-align: center; font-size: 2em; margin: 20px 0;">🎁 ⭐ 🔔 🎀 🕯️</div>
                <p style="text-align: right; font-style: italic; color: #666; margin-top: 30px;">
                    Con cariño y esperanza navideña ✨<br>
                    Enviado desde el corazón ❤️
                </p>
            </div>
            <div class="footer">
                <p><strong>🎅 Polo Norte - Taller de Santa 🎄</strong></p>
                <p>📍 Círculo Polar Ártico, 99705</p>
                <p>✉️ Entrega especial vía correo mágico</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Configurar el correo
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'franciscosevilla@iteso.mx',
        subject: '🎅 Carta para Santa Claus - Tarea 4',
        html: htmlContent
    };

    try {
        console.log('📧 Enviando correo a: franciscosevilla@iteso.mx');
        console.log('📤 Desde: ' + process.env.EMAIL_USER);
        console.log('⏳ Por favor espera...\n');
        
        const info = await transporter.sendMail(mailOptions);
        
        console.log('✅ ¡Correo enviado exitosamente!');
        console.log('📬 Message ID:', info.messageId);
        console.log('📨 Response:', info.response);
        console.log('\n🎉 ¡La prueba fue exitosa! El correo ha sido enviado al profesor.');
        
    } catch (error) {
        console.error('❌ Error al enviar el correo:');
        console.error(error.message);
        
        if (error.message.includes('Invalid login')) {
            console.log('\n💡 Sugerencia: Verifica que EMAIL_PASS sea una contraseña de aplicación de Gmail');
        }
    }
}

testEmail();
