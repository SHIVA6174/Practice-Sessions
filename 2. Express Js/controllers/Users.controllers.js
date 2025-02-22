const getUser = (req, res) => {
  res.send(`Get All User From DB (${req.method})`);
};

const createUser = (req, res) => {
  res.send(`New User Created! (${req.method})`);
};

const updateCompleteUser = (req, res) => {
  res.send(`User Data Updated Completely! (${req.method})`);
};

const updateUserPartialy = (req, res) => {
  res.send(`User Data Updated Partially! (${req.method})`);
};

const deleteUser = (req, res) => {
  res.send(`User Deleted SuccessFully! (${req.method})`);
};

export {
  getUser,
  createUser,
  updateCompleteUser,
  updateUserPartialy,
  deleteUser,
};


// Controllers can group related request handling logic seperately.
// Instead of defining all of your request handling logic as callback in route or
// in route files, you may wish to organize this behavior using controllers modules.