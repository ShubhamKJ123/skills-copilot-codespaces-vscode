
//create a web server

//create a web server
const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/'){
        res.write("Hello World");
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
    if(req.url === '/api/members'){
        res.write(JSON.stringify(["member1","member2","member3"]));
        res.end();
    }
});

server.listen(3000);
console.log("Listening on port 3000");

