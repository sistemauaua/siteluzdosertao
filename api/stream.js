const http = require('http');

export default function handler(req, res) {
    const radioUrl = 'http://144.217.254.187:7506/;';

    // Configura os cabeçalhos para streaming de áudio
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Faz a requisição para o servidor da rádio (HTTP)
    const proxyReq = http.get(radioUrl, (proxyRes) => {
        // Repassa os dados da rádio para o navegador do ouvinte
        proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
        console.error('Erro no Proxy da Rádio:', err);
        res.status(500).end('Erro ao conectar com o servidor da rádio.');
    });

    // Fecha a conexão se o cliente (ouvinte) fechar o player
    req.on('close', () => {
        proxyReq.destroy();
    });
}
