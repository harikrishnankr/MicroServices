import express from "express";
import cors from "cors";
import httpProxy from "express-http-proxy";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/customer", httpProxy("http://localhost:8001"));
app.use("/shopping", httpProxy("http://localhost:8003"));
app.use("/", httpProxy("http://localhost:8002")); // products

app.listen(8000, () => {
    console.log("Gateway Service Listening on port 8000...")
});
