// for localhost in local database

// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "",
//     DB: "project1nodeCMS",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   };



  // for production database

  module.exports = {
    HOST: "containers-us-west-125.railway.app",
    USER: "root",
    PASSWORD: "7K6UC14YCe8k9DxhLzB4",
    DB: "railway",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
