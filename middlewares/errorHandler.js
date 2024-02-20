export const errorHandler = (error, req, res, next) => {
  res.json({ success: false, msg: error.message });
};
