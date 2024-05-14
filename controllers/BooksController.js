const path = require("path");
let fs = require("fs");

const readData = () => {
  try {
    const data = fs.readFileSync(process.cwd() + "/models/db.json");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPath: (req, res) => {
    res.send(path.join(__dirname, "../views"));
  },
  getBookList: (req, res) => {
    const data = readData();
    res.render(__dirname + "/../views/index.html", {
      name: { ...data },
    });
  },
};
