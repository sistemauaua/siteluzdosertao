const http = require('http');

export default function handler(req, res) {
    // O link da sua rádio
    const radioUrl = 'http://144.217.254.187:7506/;';

    // Configuramos para AAC+, que é o formato real da sua rádio
    res.setHeader('Content-Type', 'audio/aacp');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    };

    const proxyReq = http.get(radioUrl, options, (proxyRes) => {
        proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
        console.error('Erro no Proxy:', err);
        res.end();
    });

    req.on('close', () => {
        proxyReq.destroy();
    });
}
