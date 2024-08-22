module.exports = function override(config, env) {
  if (config.devServer) {
    config.devServer.allowedHosts = [
      "localhost", // Thêm địa chỉ mà bạn muốn cho phép
    ];
  }
  return config;
};
