import express from "express";
import cors from "cors";
import router from "./routes/score.route.js";

const api = express();
const PORT = process.env.PORT || 5001;

api.use(cors())
api.use(express.json());
api.use("/", router);

api.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
