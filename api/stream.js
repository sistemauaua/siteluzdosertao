const http = require('http');

export default function handler(req, res) {
    // Link direto da rádio com o ponto e vírgula para forçar o stream
    const radioUrl = 'http://144.217.254.187:7506/;';

    // Cabeçalhos para enganar o bloqueio e garantir o áudio
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');

    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Icy-MetaData': '0'
        }
    };

    const proxyReq = http.get(radioUrl, options, (proxyRes) => {
        proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
        console.error('Erro na ponte:', err);
        res.end();
    });

    req.on('close', () => {
        proxyReq.destroy();
    });
}
