# The Node Binary

## Check file syntax w/o executing

```bash
node -c app.js
node --check app.js
```

## Evalute and print one-liners

```bash
$ node -p "fs.readdirSync('.').filter(f => /.png$/.test(f))"
[
  'Downloads-128.png',
  'Downloads-176.png',
  'Downloads-196.png'
]
```

## Preload module

```bash
$ node -r ./preload.js app.js
preload.js: This is preloaded
app.js: This is the main file
```

## Modify stack trace limit

```bash
node --stack-trace-limit=100 app.js
```
