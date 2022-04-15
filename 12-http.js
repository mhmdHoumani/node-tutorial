const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(
      '<h1>Welcome to our Home Page</h1><a href="/about">Go to About page</a>'
    );
  } else if (req.url === "/about") {
    res.end('<h1>This is our About Page</h1><a href="/">Go Back</a>');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <a href="/">Back to Home page</a>
      `);
  }
});

server.listen(5000);
