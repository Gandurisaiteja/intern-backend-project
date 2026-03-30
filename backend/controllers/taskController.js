const db = require("../config/db");

const createTask = (req, res) => {
  const { title, description } = req.body;

  db.query(
    "INSERT INTO tasks (title,description,user_id) VALUES (?,?,?)",
    [title, description, req.user.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ msg: "Task created" });
    }
  );
};

const getTasks = (req, res) => {
  db.query("SELECT * FROM tasks WHERE user_id=?", [req.user.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

const updateTask = (req, res) => {
  const { title, description } = req.body;

  db.query(
    "UPDATE tasks SET title=?,description=? WHERE id=?",
    [title, description, req.params.id],
    () => res.json({ msg: "Updated" })
  );
};

const deleteTask = (req, res) => {
  db.query("DELETE FROM tasks WHERE id=?", [req.params.id], () =>
    res.json({ msg: "Deleted" })
  );
};

module.exports = { createTask, getTasks, updateTask, deleteTask };  