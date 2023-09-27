const mysqlConnection=require('./initDB');

module.exports={
  getCustomers: (req, res) => {
      mysqlConnection.query(
        "SELECT name FROM u841345258_MVC.customers",
        (err, results, fields) => {
          if (!err) {
            res.send(results);
          } else {
            console.log(err);
          }
        }
      );
    },
  getOrdersByCustomer:(req, res) => {
    mysqlConnection.query(
      "SELECT * FROM u841345258_MVC.orders WHERE customer_id= ? ",
      [req.params.id],
      (err, results, fields) =>{
        if (!err) {
          res.send(results);
        } else {
          console.log(err);
        }
      }
    );
  },
  getSummary:(req, res) =>  {
    mysqlConnection.query(
      "SELECT Count(u841345258_MVC.orders.id) AS no_of_orders, SUM(u841345258_MVC.orders.amount) AS total_amount,u841345258_MVC.customers.country FROM u841345258_MVC.orders LEFT JOIN u841345258_MVC.customers ON u841345258_MVC.orders.customer_id=u841345258_MVC.customers.id GROUP BY u841345258_MVC.orders.customer_id ORDER BY u841345258_MVC.customers.country ASC;",
      (err, results, fields) => {
        if (!err) {
          res.send(results);
        } else {
          console.log(err);
        }
      }
    );
  }

}
