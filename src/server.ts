import express from "express";
import cors from "cors";
import { PORT } from "./config/env";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});