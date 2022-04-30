using System;
namespace api.models
{
    public class Request
    {
         public int requestid {get; set;}
        public int requestspaceid {get; set;}
        public string status {get; set;}
        public DateTime startdate { get; set; }
        public DateTime enddate { get; set; }
        public DateTime returndate { get; set; }
        public string weeklydaily { get; set; }
        public int userid {get; set;}

    }
}