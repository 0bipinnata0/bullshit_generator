import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { info } from 'console';

const url = import.meta.url; // 获取当前脚本文件的url
const path = resolve(dirname(fileURLToPath(url)), 'corpus/data.json');
const data = readFileSync(path, { encoding: 'utf-8' });
console.info('data', data)

