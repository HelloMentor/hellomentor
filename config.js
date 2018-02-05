var config = {
  expressPort: 3000,
  client: {
    mongodb: {
      defaultDatabase: "hellomentor",
      defaultCollection: "users",
      defaultUri: "mongodb://ben:tRtGzEY8CvtQv7fyRGnF@ds225038.mlab.com:25038/hellomentor"
    }
  }
};

module.exports = config;
