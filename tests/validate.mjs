// Validates data/trials.js and exercises the quiz builder. Run: node tests/validate.mjs
import fs from 'node:fs';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const win = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'data/trials.js'), 'utf8'), { window: win });
const T = win.TRIALS;
let errors = 0;
const err = (n, m) => { errors++; console.error(`✗ ${n}: ${m}`); };

const names = new Set();
for (const t of T) {
  for (const k of ['n','full','y','j','cat','pop','N','arms','fu','ep','stat','f','fw','q','km'])
    if (t[k] === undefined) err(t.n, `missing "${k}"`);
  if (names.has(t.n)) err(t.n, 'duplicate name');
  names.add(t.n);
  if (t.fw?.length !== 3) err(t.n, 'needs exactly 3 wrong findings');
  if (t.q?.length !== 2) err(t.n, 'needs exactly 2 extra questions');
  t.q?.forEach((q, i) => { if (q[2]?.length !== 3) err(t.n, `question ${i + 1} needs 3 wrong options`); });
  if (t.arms?.length < 2 || t.arms.length > 4) err(t.n, 'arms must be 2–4');
  if (t.km && t.km[2].length !== t.arms.length) err(t.n, 'km rates must match arms length');
  if (t.y < 1980 || t.y > 2030) err(t.n, 'implausible year');
}
console.log(`${T.length} trials checked, ${errors} problem(s).`);
process.exit(errors ? 1 : 0);
