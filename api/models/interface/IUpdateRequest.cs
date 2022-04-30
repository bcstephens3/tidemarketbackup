using System.Collections.Generic;
using System.Threading.Tasks;

namespace api.models.interfaces
{
    public interface IUpdateRequest{

        public void Accept(int id);

        public void Deny(int id);

        public Task SendEmail();

    }
}