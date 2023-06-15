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
    public class AllocateClassroomController : Controller
    {
        private readonly IConfiguration _configuration;

        public AllocateClassroomController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetAllAllocateClassrooms")]
        public List<AllocateClassroomDTO> GetAllAllocateClassrooms()
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            AllocateClassroomDAL dal = new AllocateClassroomDAL();
            return dal.GetAllAllocateClassrooms(connection);
        }

        [HttpGet]
        [Route("GetAllocateClassroomById/{id}")]
        public AllocateClassroomDTO GetAllocateClassroomById(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            AllocateClassroomDAL dal = new AllocateClassroomDAL();
            return dal.GetAllocateClassroomById(connection, id);
        }

        [HttpPost]
        [Route("AddAllocateClassroom")]
        public AllocateClassroom AddAllocateClassroom(AllocateClassroom allocateClassroom)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            AllocateClassroomDAL dal = new AllocateClassroomDAL();
            return dal.AddAllocateClassroom(connection, allocateClassroom);
        }

        [HttpPut]
        [Route("UpdateAllocateClassroom")]
        public String UpdateAllocateClassroom(AllocateClassroom allocateClassroom)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            AllocateClassroomDAL dal = new AllocateClassroomDAL();
            return dal.UpdateAllocateClassroom(connection, allocateClassroom);
        }

        [HttpDelete]
        [Route("DeleteAllocateClassroom/{id}")]
        public String DeleteAllocateClassroom(int id)
        {
            MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            AllocateClassroomDAL dal = new AllocateClassroomDAL();
            return dal.DeleteAllocateClassroom(connection, id);
        }
    }
}

