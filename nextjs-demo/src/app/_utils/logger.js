import "server-only";

import path from 'path';
import fs from 'fs';

const logDirectory = path.join(process.cwd(), 'logs');

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, {recursive: true});
}

const getLogFileName = () => {
    const date = new Date();
    return path.join(logDirectory, `app-log.${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}.log`);
};

const formatTextLog = (level, msg, meta = {}) => {
    const time = new Date().toISOString()
        .replace('T', ' ')
        .replace('Z', '');

    let errorMsg = '';
    let stackTrace = '';

    if (meta && typeof meta === 'object') {
        const actualError = meta.err || meta.error || (meta instanceof Error ? meta : null);

        if (actualError) {
            errorMsg = actualError.message ? ` - Error: ${actualError.message}` : '';
            stackTrace = actualError.stack ? `\n${actualError.stack}` : '';
        } else if (meta.message) {
            errorMsg = ` - Error: ${meta.message}`;
        }
    }

    return `[${time}] [${level.toUpperCase()}] ${msg}${errorMsg}${stackTrace}\n`;
};

const getFileStream = () => fs.createWriteStream(getLogFileName(), {flags: 'a'});

const logger = {
    info: (msg, meta = {}) => {
        const output = formatTextLog('info', msg, meta);
        process.stdout.write(output);
        getFileStream().write(output);
    },
    error: (msg, meta = {}, err = null) => {
        let mergedMeta = {...meta};
        if (meta instanceof Error) {
            mergedMeta = {err: meta};
        }
        if (err instanceof Error) {
            mergedMeta.err = err;
        }
        const output = formatTextLog('error', msg, mergedMeta);
        process.stdout.write(output);
        getFileStream().write(output);
    },
    debug: (msg, meta = {}) => {
        const output = formatTextLog('debug', msg, meta);
        process.stdout.write(output);
    }
};

export default logger;