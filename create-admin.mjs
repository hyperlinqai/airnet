import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Run tsx for TypeScript execution
const tsx = spawn('npx', ['tsx', resolve(__dirname, 'src/scripts/create-admin.ts')], {
  stdio: 'inherit',
  shell: true
});

tsx.on('error', (error) => {
  console.error('Failed to start tsx:', error);
});

tsx.on('close', (code) => {
  if (code !== 0) {
    console.error(`tsx process exited with code ${code}`);
  }
});
