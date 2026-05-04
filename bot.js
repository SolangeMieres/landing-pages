const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Inicializamos el cliente guardando la sesión localmente
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox'] // Ideal por si después lo subís a un VPS
    }
});

// Generamos el QR en la terminal
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Escaneá este QR con el celular del local 📱');
});

client.on('ready', () => {
    console.log('¡El Bot de SOLtech está conectado y listo para atajar pedidos! 🧤🇦🇷');
});

// Escuchamos los mensajes entrantes
client.on('message', async (message) => {
    const texto = message.body.toLowerCase();

    // Filtramos palabras clave de urgencia/mundial
    if (texto.includes('promo') || texto.includes('partido') || texto.includes('mundial')) {
        await message.reply('¡Hola! 🇦🇷 Qué bueno que nos escribís. Se viene el partido y estamos a full, pero no te vas a quedar afuera. Mirá todas las promos y pedí rapidísimo por acá: \n\n👉 https://tuservidor.com/promos-scaloneta');
    } 
    // Pequeño comando de prueba
    else if (texto === '!ping') {
        await message.reply('¡Pong! El bot está vivo.');
    }
});

client.initialize();