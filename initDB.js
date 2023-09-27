const mysql=require('mysql');

  const mysqlConnection=mysql.createConnection({
      host: "sql348.main-hosting.eu",
      user: "u841345258_MVCu",
      port: 3306,
      password: "Instient@2023",
      database: "u841345258_MVC",
      
  });
    mysqlConnection.connect((err) => {
      if (err) console.log(err);
      else console.log("Database connected successfully");
    });

    module.exports=mysqlConnection;


