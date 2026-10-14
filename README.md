# weavin-test-textstat (branch: broken-install)

REPLACES README.md and package.json on branch broken-install; textstat.js is unchanged from main. package.json now lists a dependency that does not exist on npm, so `npm install` fails with E404 and the install step must fail.

## Install
`npm install` (Node.js 18 or newer).

## Run
`node textstat.js --text "<text>"` prints one JSON line with `text`, `chars`, `words`, `reversed`, `upper`.
Example: `node textstat.js --text "hello world"` prints `{"text":"hello world","chars":11,"words":2,"reversed":"dlrow olleh","upper":"HELLO WORLD"}`
