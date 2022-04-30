namespace api.database
{
    public class ConnectionString
    {
        public string cs {get; set;}

        public ConnectionString()
        {
            string server = "ckshdphy86qnz0bj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "sp6t3en6535tnwc2";
            string port = "3306";
            string userName = "eqwq17eaisypop3r";
            string password = "pon5r0brck030jj4";

            cs = $@"server={server};user={userName};database={database};port={port};password={password};";
        }
    }
}