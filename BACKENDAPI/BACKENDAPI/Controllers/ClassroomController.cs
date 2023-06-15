using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BACKENDAPI.Models;
using BACKENDAPI.DAL;
using MySql.Data.MySqlClient;
// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BACKENDAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassroomController : Controller
    {
        private readonly IConfiguration _configuration;

        public ClassroomController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetAllClassrooms")]
        public List<Classroom> GetAllClassrooms()
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            ClassroomDAL dal = new ClassroomDAL();
            return dal.GetAllClassrooms(connection);
        }

        [HttpGet]
        [Route("GetClassroomById/{id}")]
        public Classroom GetClassroomById(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            ClassroomDAL dal = new ClassroomDAL();
            return dal.GetClassroomById(connection,id);
        }

        [HttpPost]
        [Route("AddClassroom")]
        public Classroom AddClassroom(Classroom classroom)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            ClassroomDAL dal = new ClassroomDAL();
            return dal.AddClassroom(connection, classroom);
        }

        [HttpPut]
        [Route("UpdateClassroom")]
        public String UpdateClassroom(Classroom classroom)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            ClassroomDAL dal = new ClassroomDAL();
            return dal.UpdateClassroom(connection, classroom);
        }

        [HttpDelete]
        [Route("DeleteClassroom/{id}")]
        public String DeleteClassroom(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            ClassroomDAL dal = new ClassroomDAL();
            return dal.DeleteClassroom(connection, id);        }
    }
}

