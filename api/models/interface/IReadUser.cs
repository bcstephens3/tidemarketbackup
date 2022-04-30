using System.Collections.Generic;
namespace api.models.interfaces
{
    public interface IReadUser
    {
         public List<User> GetAll();
        public User GetOne(int id);
    }
}