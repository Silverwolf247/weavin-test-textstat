# weavin-test-textstat

A small command-line tool (Node.js, no third-party dependencies) that computes statistics for a piece of text. It is deterministic: the same input always gives the same output. No network access, no API keys.

## Install
`npm install` (there are no dependencies; this only validates package.json). Requires Node.js 18 or newer.

## Run
```
node textstat.js --text "<text>"
```

Input: `--text` (required, string, up to 200 characters).

Output: ONE line of JSON on stdout, exit code 0:

| field | meaning |
|---|---|
| `text` | the input, unchanged |
| `chars` | number of Unicode characters (code points) |
| `words` | number of whitespace-separated words |
| `reversed` | the characters in reverse order |
| `upper` | the text upper-cased |

If `--text` is missing the tool prints `error: --text is required` to stderr and exits with code 1.

## Examples
```
$ node textstat.js --text "hello world"
{"text":"hello world","chars":11,"words":2,"reversed":"dlrow olleh","upper":"HELLO WORLD"}

$ node textstat.js --text "Weavin builds AI avatars"
{"text":"Weavin builds AI avatars","chars":24,"words":4,"reversed":"sratava IA sdliub nivaeW","upper":"WEAVIN BUILDS AI AVATARS"}

$ node textstat.js --text "你好 世界"
{"text":"你好 世界","chars":5,"words":2,"reversed":"界世 好你","upper":"你好 世界"}
```
Any text (including the word `test`) is valid input.
