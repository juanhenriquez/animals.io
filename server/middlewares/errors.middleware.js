const errorHandler = (fn) => {
  return (req, res, next) => {
    return fn(req, res, next)
      .catch(next);
  };
};

module.exports = {
  errorHandler
}