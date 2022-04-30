using System.Collections.Generic;
namespace api.models.interfaces
{
    public interface IReadRequest
    {
        public List<Request> GetAll();
        public Request GetOne(int id);
    }
}