import server from "./app";

const port = process.env.PORT || 5000;

server
    .build()
    .listen(port, () => console.log(`listening on port ${port}`));