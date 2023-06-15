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
    public class SubjectController : Controller
    {
        private readonly IConfiguration _configuration;

        public SubjectController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetAllSubjects")]
        public List<Subject> GetAllSubjects()
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            SubjectDAL dal = new SubjectDAL();
            return dal.GetAllSubjects(connection);
        }

        [HttpGet]
        [Route("GetSubjectById/{id}")]
        public Subject GetSubjectById(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            SubjectDAL dal = new SubjectDAL();
            return dal.GetSubjectById(connection, id);
        }

        [HttpPost]
        [Route("AddSubject")]
        public Subject AddSubject(Subject subject)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            SubjectDAL dal = new SubjectDAL();
            return dal.AddSubject(connection, subject);
        }

        [HttpPut]
        [Route("UpdateSubject")]
        public String UpdateSubject(Subject subject)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            SubjectDAL dal = new SubjectDAL();
            return dal.UpdateSubject(connection, subject);
        }

        [HttpDelete]
        [Route("DeleteSubject/{id}")]
        public String DeleteSubject(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            SubjectDAL dal = new SubjectDAL();
            return dal.DeleteSubject(connection, id);
        }
    }
}

