const startTime = new Date();

const red     = '\u001b[31m';
const magenta = '\u001b[35m';
const reset   = '\u001b[0m';

console.log(`${magenta}The build has started...${reset}`);
require('esbuild').build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/index.js',
    minify: false,
    platform: 'node',
    sourcemap: true,
}).then(() => {
    console.log(`${magenta}Build finished successfully.${reset} [${new Date().getTime() - startTime.getTime()}ms]`)
}).catch(() => {
    console.log(`${red}Build failed.${reset} [${new Date().getTime() - startTime.getTime()}ms]`)
});
