const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'nordwebduo.com'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      // Check if the request is already HTTPS and www is present or not
      if (!req.headers.host.match(/^www\./) && process.env.NODE_ENV === 'production') {
        res.writeHead(301, { Location: `https://www.${hostname}${req.url}` })
        return res.end()
      }

      if (pathname === '/a') {
        app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        app.render(req, res, '/b', query)
      } else {
        handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})