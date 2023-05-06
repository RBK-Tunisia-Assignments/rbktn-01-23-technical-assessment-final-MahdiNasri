const express = require("express");
const app = express();
const PORT = 4000;;
const router = require("./routes/recipiesRoute");
const userRouter = require("./routes/userRoute.js")
const cors =require('cors');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use("/recipes", router);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
