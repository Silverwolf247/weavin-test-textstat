#!/usr/bin/env node
'use strict';
// Usage: node textstat.js --text "<some text>"
// Prints one JSON object to stdout and exits 0. Exits 1 (message on stderr) if --text is missing.

function parseText(argv) {
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--text') return i + 1 < argv.length ? argv[i + 1] : undefined;
    if (argv[i].startsWith('--text=')) return argv[i].slice('--text='.length);
  }
  return undefined;
}

const text = parseText(process.argv.slice(2));
if (text === undefined) {
  process.stderr.write('error: --text is required\n');
  process.exit(1);
}

const chars = Array.from(text);
const words = text.split(/\s+/u).filter(Boolean);
process.stdout.write(`${JSON.stringify({
  text,
  chars: chars.length,
  words: words.length,
  reversed: chars.reverse().join(''),
  upper: text.toUpperCase(),
})}\n`);
