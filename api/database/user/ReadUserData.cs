using System.Collections.Generic;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Data.SqlClient;
using api.models.interfaces;
using api.models;
using api.database;
using System;
namespace api.database.user
{
    public class ReadUserData : IReadUser
    {
        
            public List<User> GetAll()
            {
                ConnectionString newConnection = new ConnectionString();
                string cs = newConnection.cs;
                List<User> allUsers = new List<User>();

                using var con = new MySqlConnection(cs);
                con.Open();

                string stm = "SELECT * FROM user";
                using var cmd = new MySqlCommand(stm, con);


                using MySqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    User temp = new User() //ternary operator --> ? what it returns : what if false //use almost like a try-catch
                    {
                        userId = rdr.IsDBNull(0) ? 0 : rdr.GetInt32(0),
                        userName = rdr.IsDBNull(1) ? null : rdr.GetString(1),
                        password = rdr.IsDBNull(2) ? null : rdr.GetString(2),
                        email = rdr.IsDBNull(3) ? null : rdr.GetString(3),
                        address = rdr.IsDBNull(4) ? null : rdr.GetString(4),
                        revenue = rdr.IsDBNull(5) ? 5 : rdr.GetInt32(5),
                        businessType = rdr.IsDBNull(6) ? null : rdr.GetString(6),
                        companyName = rdr.IsDBNull(7) ? null : rdr.GetString(7),
                        phoneNumber = rdr.IsDBNull(8) ? null : rdr.GetString(8),
                        firstName = rdr.IsDBNull(9) ? null : rdr.GetString(9),
                        lastName = rdr.IsDBNull(10) ? null : rdr.GetString(10),
                        role = rdr.IsDBNull(11) ? null : rdr.GetString(11)

                    };
                    allUsers.Add(temp);
                }

                return allUsers;
            }

            public User GetOne(int id)
            {
                throw new System.NotImplementedException();
            }

        
        
    }
}