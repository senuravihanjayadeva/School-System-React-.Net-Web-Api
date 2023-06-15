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
    public class TeacherController : Controller
    {
        private readonly IConfiguration _configuration;

        public TeacherController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetAllTeachers")]
        public List<Teacher> GetAllTeachers()
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            TeacherDAL dal = new TeacherDAL();
            return dal.GetAllTeachers(connection);
        }

        [HttpGet]
        [Route("GetTeacherById/{id}")]
        public Teacher GetTeacherById(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            TeacherDAL dal = new TeacherDAL();
            return dal.GetTeacherById(connection, id);
        }

        [HttpPost]
        [Route("AddTeacher")]
        public Teacher AddTeacher(Teacher teacher)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            TeacherDAL dal = new TeacherDAL();
            return dal.AddTeacher(connection, teacher);
        }

        [HttpPut]
        [Route("UpdateTeacher")]
        public String UpdateTeacher(Teacher teacher)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            TeacherDAL dal = new TeacherDAL();
            return dal.UpdateTeacher(connection, teacher);
        }

        [HttpDelete]
        [Route("DeleteTeacher/{id}")]
        public String DeleteTeacher(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            TeacherDAL dal = new TeacherDAL();
            return dal.DeleteTeacher(connection, id);
        }
    }
}

