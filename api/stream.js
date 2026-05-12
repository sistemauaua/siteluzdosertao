const http = require('http');

export default function handler(req, res) {
    const radioUrl = 'http://144.217.254.187:7506/;';

    // Forçamos o navegador a entender que é um fluxo de áudio contínuo
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const proxyReq = http.get(radioUrl, (proxyRes) => {
        // Repassa exatamente o que vem da rádio, bit a bit
        proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
        console.error('Erro no Proxy:', err);
        if (!res.headersSent) {
            res.status(500).send('Erro na rádio');
        }
    });

    req.on('close', () => {
        proxyReq.destroy();
    });
}
