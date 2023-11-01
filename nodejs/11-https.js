const http=require('http')

const server= http.createServer((req,res)=>{
    if(req.url ==='/')
    {
        res.end('hello welcome to my page')

    }
   else  if(req.url ==='/about')
    {
        res.end('here the story')
    }
    else {
        res.end(`
            <html>
                <head>
                    <title>Error Page</title>
                </head>
                <body>
                    <h1>Oops</h1>
                    <p>No page</p>
                    <a href="/">Back home</a>
                </body>
            </html>
        `)
    }

   
})

server.listen(134)