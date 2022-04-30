using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.models;
using api.database;
using api.database.request;
using api.models.interfaces;
using Microsoft.AspNetCore.Cors;
using System.Net.Mail;
using System.Net;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class requestsController : ControllerBase
    {
        // GET: api/requests
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Request> Get()
        {
            IReadRequest readObj = new ReadRequestData();
            return readObj.GetAll();
        }

        // GET: api/requests/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "GetReq")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/requests
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post([FromBody] Request value)
        {
            ICreateRequest myRequest = new AddRequestData();
            myRequest.Create(value);
        }

        // PUT: api/requests/5
        [EnableCors("OpenPolicy")]
        [HttpPut("accept/{id}")]
        public void AcceptRequest(int id)
        {
            IUpdateRequest newRequest = new UpdateRequest();
            newRequest.Accept(id);
        }
        // PUT: api/requests/5
        [EnableCors("OpenPolicy")]
        [HttpPut("deny/{id}")]
        public void DenyRequest(int id)
        {
            IUpdateRequest newRequest = new UpdateRequest();
            newRequest.Deny(id);
        }

        [EnableCors("OpenPolicy")]
        [HttpPut("email")]        
        public void SendEmail()
        {
            IUpdateRequest newRequest = new UpdateRequest();
            newRequest.SendEmail();
        }

        // DELETE: api/requests/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
