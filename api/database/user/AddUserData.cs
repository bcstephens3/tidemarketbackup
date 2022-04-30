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
    public class AddUserData : ICreateUser
    {
        
        public void Create(User myUser)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO user(username, password, email, address, businesstype, companyname, phone, firstname, lastname, role) VALUES(@username, @password, @email, @address, @businesstype, @companyname, @phone, @firstname, @lastname, @role)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@username", myUser.userName);
            cmd.Parameters.AddWithValue("@password", myUser.password);
            cmd.Parameters.AddWithValue("@email", myUser.email);
            cmd.Parameters.AddWithValue("@address", myUser.address);
            cmd.Parameters.AddWithValue("@businesstype", myUser.businessType);
            cmd.Parameters.AddWithValue("@companyname", myUser.companyName);
            cmd.Parameters.AddWithValue("@phone", myUser.phoneNumber);
            cmd.Parameters.AddWithValue("@firstname", myUser.firstName);
            cmd.Parameters.AddWithValue("@lastname", myUser.lastName);
            cmd.Parameters.AddWithValue("@role", "b");
            

            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
        
    }
}