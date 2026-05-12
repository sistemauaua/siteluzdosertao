const http = require('http');

export default function handler(req, res) {
    const radioUrl = 'http://144.217.254.187:7506/;';

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Opções para enganar o servidor da rádio e parecer um navegador real
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Icy-MetaData': '1'
        }
    };

    const proxyReq = http.get(radioUrl, options, (proxyRes) => {
        // Se o servidor responder com erro, avisamos
        if (proxyRes.statusCode !== 200) {
            console.error(`Servidor da rádio respondeu com erro: ${proxyRes.statusCode}`);
        }
        proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
        console.error('Erro no Proxy:', err);
        if (!res.headersSent) res.status(500).end();
    });

    req.on('close', () => {
        proxyReq.destroy();
    });
}
