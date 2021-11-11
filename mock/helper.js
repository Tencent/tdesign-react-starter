exports.success = (data = {}) => {
  if (typeof data === 'function') {
    return (req, res) => {
      console.log('method = ', req.method);
      console.log('body = ', req.body);
      console.log('query = ', req.query);
      console.log('params = ', req.params);
      const result = data(req.body, req.query, req.params);
      res.send({ code: 0, data: result || '', msg: 'success' });
    };
  }
  return { code: 0, data, msg: 'success' };
};

exports.error = () => ({ code: 1, msg: '业务逻辑异常' });
