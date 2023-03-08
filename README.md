# snippet

html

```
"html": {
  "prefix": "!!",
  "body": [
    "<!DOCTYPE html>",
    "<html lang=\"ko-KR\">",
    "<head>",
    "    <meta charset=\"UTF-8\">",
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
    "    <title>$1</title>",
    "</head>",
    "<body>",
    "    ",
    "</body>",
    "</html>"
  ],
  "description": "html"
}
```

css 화면 숨김처리

```
"a11y-hidden": {
  "prefix": "a11y",
  "body": [
    ".a11y-hidden {",
    "  clip: rect(1px, 1px, 1px, 1px);",
    "  clip-path: inset(50%);",
    "  width: 1px;",
    "  height: 1px;",
    "  margin: -1px;",
    "  overflow: hidden;",
    "  padding: 0;",
    "  position: absolute;",
    "}"
  ],
  "description": "a11y-hidden"
}
```
