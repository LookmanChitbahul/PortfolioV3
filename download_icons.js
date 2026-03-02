const fs = require('fs');
const https = require('https');
const path = require('path');

const icons = {
    java: 'java',
    python: 'python',
    javascript: 'javascript',
    typescript: 'typescript',
    sql: 'sqlite',
    react: 'react',
    nextjs: 'nextdotjs',
    expo: 'expo',
    tailwind: 'tailwindcss',
    html5: 'html5',
    css3: 'css3',
    nodejs: 'nodedotjs',
    express: 'express',
    strapi: 'strapi',
    prisma: 'prisma',
    socketio: 'socketdotio',
    postgresql: 'postgresql',
    mysql: 'mysql',
    firebase: 'firebase',
    supabase: 'supabase',
    git: 'git',
    github: 'github',
    docker: 'docker',
    vercel: 'vercel',
    netlify: 'netlify',
    postman: 'postman',
    bitcoin: 'bitcoin'
};

const dir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

Object.entries(icons).forEach(([name, slug]) => {
    const file = fs.createWriteStream(path.join(dir, `${name}.svg`));
    const url = `https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${slug}.svg`;

    https.get(url, (response) => {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${name}.svg`);
            });
        } else {
            console.error(`Failed to download ${name}.svg - Status: ${response.statusCode}`);
        }
    }).on('error', (err) => {
        console.error(`Error downloading ${name}.svg: ${err.message}`);
    });
});
