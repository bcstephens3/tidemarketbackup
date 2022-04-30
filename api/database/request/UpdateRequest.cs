using System.Net.Http;

using System.Net;

using System.Collections.Generic;

using System.Data;

using MySql.Data;

using MySql.Data.MySqlClient;

using System.Data.SqlClient;

using api.models.interfaces;

using api.database;

using api.models;

using System;

using System.Net.Mail;

using System.Threading.Tasks;
namespace api.database.request
{
    public class UpdateRequest : IUpdateRequest
    {
         public void Deny(int id)
         {
             ConnectionString myConnectionString = new ConnectionString();
             string cs = myConnectionString.cs;

             using var con = new MySqlConnection(cs);
             con.Open();

             string stm = @"UPDATE request SET status = 'Denied' WHERE requestid = " + id;

            using var cmd = new MySqlCommand(stm, con);

            cmd.Prepare();

            cmd.ExecuteNonQuery();

        }

        public void Accept(int id)
         {
             ConnectionString myConnectionString = new ConnectionString();
             string cs = myConnectionString.cs;

             using var con = new MySqlConnection(cs);
             con.Open();

             string stm = @"UPDATE request SET status = 'Accept' WHERE requestid = " + id;

            using var cmd = new MySqlCommand(stm, con);

            cmd.Prepare();

            cmd.ExecuteNonQuery();

        }

        public Task SendEmail()
        {

            string toAddress = "Will.grace223@gmail.com";

            string subject = "Urgent";

            string body = "HEYYYYYYY" ;

            string from = "zeke407@gmail.com";

            string fromPass = "Fuckauburn69!";



            MailMessage mailMessage = new MailMessage();

            mailMessage.From = new MailAddress(from);

            mailMessage.To.Add(new MailAddress(toAddress));

            mailMessage.Subject = subject;

            mailMessage.Body = body;



            SmtpClient client = new SmtpClient("smtp.gmail.com", 587);

            client.Credentials = new NetworkCredential(from, fromPass);

            client.EnableSsl = true;

            client.UseDefaultCredentials = false;

            client.Send(mailMessage);

           

            return Task.CompletedTask;
        }
    }
}