const route = require("express").Router();

const Feedback = require("./model");

route.get("/", async (req, res) => {
  try {
    const found = await Feedback.find();
    res.json(found);
  } catch (err) {
    console.log(err);
  }
});

route.post("/", async (req, res) => {
  const reg = req.body.reg;
  const nov = req.body.nov;
  const com = req.body.com;
  const rep = req.body.rep;
  const ppt = req.body.ppt;
  const viva = req.body.viva;
  const item = new Feedback({
    reg_no: reg,
    nov_score: nov,
    completion: com,
    project_report: rep,
    presentation_skill: ppt,
    viva: viva,
  });
  try {
    const result = await item.save();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

route.delete("/:id", async (req, res) => {
  const delID = req.params.id;
  try {
    const deletedItem = await Feedback.deleteOne({ _id: delID });
    res.json(deletedItem);
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
