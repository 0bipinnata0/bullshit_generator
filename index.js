import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { generate } from './lib/generator.js';
import { createRandomPicker } from './lib/random.js';
import moment from 'moment'

const url = import.meta.url; // 获取当前脚本文件的url
const __dirname = dirname(fileURLToPath(url));

function saveCorpus(title, article) {
    const outputDir = resolve(__dirname, 'output');
    const time = moment().format('x');
    const outputFile = resolve(outputDir, `${title}${time}.txt`);

    if (!existsSync(outputDir)) {
        mkdirSync(outputDir);
    }

    const text = `${title}\n\n    ${article.join('\n    ')}`;
    writeFileSync(outputFile, text);

    return outputFile;
}


function loadCorpus(src) {
    const path = resolve(__dirname, src);
    const data = readFileSync(path, { encoding: 'utf-8' });
    return JSON.parse(data);
}

const corpus = loadCorpus('corpus/data.json');

const pickTitle = createRandomPicker(corpus.title);
const title = pickTitle();

const article = generate(title, { corpus });
saveCorpus(title, article)
console.log(`${title}\n\n    ${article.join('\n    ')}`);