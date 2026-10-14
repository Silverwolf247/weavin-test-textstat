package main

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

// Usage: go run . --text "<text>"
func main() {
	if len(os.Args) < 3 || os.Args[1] != "--text" {
		fmt.Fprintln(os.Stderr, "error: --text is required")
		os.Exit(1)
	}
	text := os.Args[2]
	r := []rune(text)
	for i, j := 0, len(r)-1; i < j; i, j = i+1, j-1 {
		r[i], r[j] = r[j], r[i]
	}
	out, _ := json.Marshal(map[string]any{
		"text": text, "chars": len([]rune(text)), "words": len(strings.Fields(text)),
		"reversed": string(r), "upper": strings.ToUpper(text),
	})
	fmt.Println(string(out))
}
