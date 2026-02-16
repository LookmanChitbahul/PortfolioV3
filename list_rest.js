const https = require('https');
const fs = require('fs');

function getEnv(key) {
    try {
        const envFile = fs.readFileSync('.env', 'utf8');
        const lines = envFile.split('\n');
        for (const line of lines) {
            if (line.startsWith(key)) {
                return line.split('=')[1].trim();
            }
        }
    } catch (e) {
        return null;
    }
}

const apiKey = getEnv('NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY');

if (!apiKey) {
    console.error("No API Key");
    process.exit(1);
}

const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            if (json.models) {
                console.log("Available Models:");
                json.models.forEach(m => console.log(m.name));
            } else {
                console.log("No models found or error:", json);
            }
        } catch (e) {
            console.error("Error parsing JSON:", e);
        }
    });
}).on('error', (e) => {
    console.error("Got error: " + e.message);
});
