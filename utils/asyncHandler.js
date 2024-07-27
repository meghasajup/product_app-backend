const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    console.log(err);
    res.status(error.status || 500).send({status:false, error: error.message});
  }
};
module.exports = asyncHandler;