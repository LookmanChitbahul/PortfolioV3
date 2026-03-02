const fs = require('fs');
const https = require('https');
const path = require('path');

const icons = {
    java: 'openjdk',
    css3: 'css3'
};

const dir = path.join(__dirname, 'public', 'icons');

Object.entries(icons).forEach(([name, slug]) => {
    const file = fs.createWriteStream(path.join(dir, `${name}.svg`));
    // Use master branch
    const url = `https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/${slug}.svg`;

    https.get(url, (response) => {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${name}.svg`);
            });
        } else {
            console.error(`Failed to download ${name}.svg - Status: ${response.statusCode} URL: ${url}`);
        }
    }).on('error', (err) => {
        console.error(`Error downloading ${name}.svg: ${err.message}`);
    });
});
