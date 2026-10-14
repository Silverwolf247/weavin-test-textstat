# weavin-test-textstat (branch: unsupported-lang)

A small command-line tool written in Go that computes statistics for a piece of text. Deterministic, no network, no API keys.

## Build and run
```
go run . --text "<text>"
```
Input: `--text` (required string). Output: one line of JSON on stdout: `text`, `chars`, `words`, `reversed`, `upper`.

Example: `go run . --text "hello world"` prints `{"chars":11,"reversed":"dlrow olleh","text":"hello world","upper":"HELLO WORLD","words":2}`
