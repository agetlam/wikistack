const express = require("express")
const morgan = require("morgan");
const layout = require("./views/layout");
const app = express();
const {db} = require('./models');
const models = require('./models');
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
// app.use("/wiki", require("./routes/wiki"))
// app.use("/user", require("./routes/user"))

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
app.use('/wiki', wikiRouter)
app.use('/user', userRouter);

app.get("/", (req, res) => {
    res.send(layout(''));
})

const init = async () =>{
    //console.log(models)
    await models.db.sync()
    models.db.sync({force: true})
    const PORT = 3000;
app.listen(PORT,() => {
    console.log(`App listening in port ${PORT}`)
})
}
init();

db.authenticate().
then(() => {
  console.log('connected to the database');
})
