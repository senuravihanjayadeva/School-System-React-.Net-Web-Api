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
    public class StudentController : Controller
    {
        private readonly IConfiguration _configuration;

        public StudentController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetAllStudents")]
        public List<StudentDTO> GetAllStudents()
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            StudentDAL dal = new StudentDAL();
            return dal.GetAllStudents(connection);
        }

        [HttpGet]
        [Route("GetStudentById/{id}")]
        public StudentDTO GetStudentById(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            StudentDAL dal = new StudentDAL();
            return dal.GetStudentById(connection, id);
        }

        [HttpPost]
        [Route("AddStudent")]
        public Student AddStudent(Student student)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            StudentDAL dal = new StudentDAL();
            return dal.AddStudent(connection, student);
        }

        [HttpPut]
        [Route("UpdateStudent")]
        public String UpdateStudent(Student student)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            StudentDAL dal = new StudentDAL();
            return dal.UpdateStudent(connection, student);
        }

        [HttpDelete]
        [Route("DeleteStudent/{id}")]
        public String DeleteStudent(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            StudentDAL dal = new StudentDAL();
            return dal.DeleteStudent(connection, id);
        }
    }
}

