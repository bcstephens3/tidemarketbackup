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
    public class AddRequestData : ICreateRequest
    {
        
        public void Create(Request myRequest)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO request(requestid, requestspaceid, status, startdate, enddate, returndate, weeklydaily, userid) VALUES(@requestid, @requestspaceid, @status, @startdate, @enddate, @returndate, @weeklydaily, @userid)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@requestid", myRequest.requestid);
            cmd.Parameters.AddWithValue("@requestspaceid", myRequest.requestspaceid);
            cmd.Parameters.AddWithValue("@status", "Pending");
            cmd.Parameters.AddWithValue("@startdate", myRequest.startdate);
            cmd.Parameters.AddWithValue("@enddate", myRequest.enddate);
            cmd.Parameters.AddWithValue("@returndate", "1900-01-01");
            cmd.Parameters.AddWithValue("@weeklydaily", "d");
            cmd.Parameters.AddWithValue("@userid", myRequest.userid);

    
            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}