using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BACKENDAPI.DAL;
using BACKENDAPI.DTO;
using BACKENDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BACKENDAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllocateSubjectController : Controller
    {
        private readonly IConfiguration _configuration;

        public AllocateSubjectController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetAllAllocateSubjects")]
        public List<AllocateSubjectDTO> GetAllAllocateSubjects()
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            AllocateSubjectDAL dal = new AllocateSubjectDAL();
            return dal.GetAllAllocateSubjects(connection);
        }

        [HttpGet]
        [Route("GetAllocateSubjectById/{id}")]
        public AllocateSubjectDTO GetAllocateSubjectById(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            AllocateSubjectDAL dal = new AllocateSubjectDAL();
            return dal.GetAllocateSubjectById(connection, id);
        }

        [HttpPost]
        [Route("AddAllocateSubject")]
        public AllocateSubject AddStudent(AllocateSubject allocateSubject)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            AllocateSubjectDAL dal = new AllocateSubjectDAL();
            return dal.AddAllocateSubject(connection, allocateSubject);
        }

        [HttpPut]
        [Route("UpdateAllocateSubject")]
        public String UpdateAllocateSubject(AllocateSubject allocateSubject)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            AllocateSubjectDAL dal = new AllocateSubjectDAL();
            return dal.UpdateAllocateSubject(connection, allocateSubject);
        }

        [HttpDelete]
        [Route("DeleteAllocateSubject/{id}")]
        public String DeleteAllocateSubject(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            AllocateSubjectDAL dal = new AllocateSubjectDAL();
            return dal.DeleteAllocateSubject(connection, id);
        }
    }
}

