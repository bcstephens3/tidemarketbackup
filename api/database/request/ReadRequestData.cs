using System.Collections.Generic;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Data.SqlClient;
using api.models.interfaces;
using api.models;
using api.database;
using System;
namespace api.database.request
{
    public class ReadRequestData : IReadRequest
    {
         public List<Request> GetAll()
        {
            ConnectionString newConnection = new ConnectionString();
            string cs = newConnection.cs;
            List<Request> allRequests = new List<Request>();

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM request";
            using var cmd = new MySqlCommand(stm, con);


            using MySqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                Request temp = new Request() //ternary operator --> ? what it returns : what if false //use almost like a try-catch
                {
                    requestid = rdr.IsDBNull(0) ? 0 : rdr.GetInt32(0),
                    requestspaceid = rdr.IsDBNull(1) ? 1 : rdr.GetInt32(1),
                    status = rdr.IsDBNull(2) ? null : rdr.GetString(2),
                    startdate = rdr.IsDBNull(3) ? DateTime.Now : rdr.GetDateTime(3),
                    enddate = rdr.IsDBNull(4) ? DateTime.Now : rdr.GetDateTime(4),
                    returndate = rdr.IsDBNull(5) ? DateTime.Now : rdr.GetDateTime(5),
                    weeklydaily = rdr.IsDBNull(6) ? null : rdr.GetString(6),
                    userid = rdr.IsDBNull(7) ? 7 : rdr.GetInt32(7),
                };
                allRequests.Add(temp);
            }

            return allRequests;
        }

        public Request GetOne(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}