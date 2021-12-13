### Example 01

~~~javascript
const html = `<!DOCTYPE html>
<body>
  <h1>Hello World!</h1>
  <p>This page was created with Azion Edge Functions using the JavaScript runtime enviroment!</p>
</body>`


async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}


addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})

~~~

