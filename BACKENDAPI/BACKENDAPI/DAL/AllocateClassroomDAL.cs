using System;
using BACKENDAPI.DTO;
using BACKENDAPI.Models;
using MySql.Data.MySqlClient;
using System.Data;

namespace BACKENDAPI.DAL
{
	public class AllocateClassroomDAL
	{
        public List<AllocateClassroomDTO> GetAllAllocateClassrooms(MySqlConnection connection)
        {
            AllocateClassroomDTO response = new AllocateClassroomDTO();
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM AllocateClassrooms", connection);
            DataTable dt = new DataTable();
            List<AllocateClassroomDTO> AllocateClassroomDTOs = new List<AllocateClassroomDTO>();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    AllocateClassroomDTO allocateClassroom = new AllocateClassroomDTO();
                    allocateClassroom.AllocateClassroomID = Convert.ToInt32(dt.Rows[i]["AllocateClassroomID"]);

                    TeacherDAL teacherDAL = new TeacherDAL();
                    allocateClassroom.Teacher = teacherDAL.GetTeacherById(connection, Convert.ToInt32(dt.Rows[i]["TeacherID"]));

                    ClassroomDAL classroomDAL = new ClassroomDAL();
                    allocateClassroom.Classroom = classroomDAL.GetClassroomById(connection, Convert.ToInt32(dt.Rows[i]["ClassroomID"]));

                    AllocateClassroomDTOs.Add(allocateClassroom);
                }
            }

            return AllocateClassroomDTOs;
        }

        public AllocateClassroomDTO GetAllocateClassroomById(MySqlConnection connection, int id)
        {
            AllocateClassroomDTO response = new AllocateClassroomDTO();
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM AllocateClassrooms WHERE AllocateClassroomID = '" + id + "'", connection);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                AllocateClassroomDTO allocateClassroom = new AllocateClassroomDTO();
                allocateClassroom.AllocateClassroomID = Convert.ToInt32(dt.Rows[0]["AllocateClassroomID"]);

                TeacherDAL teacherDAL = new TeacherDAL();
                allocateClassroom.Teacher = teacherDAL.GetTeacherById(connection, Convert.ToInt32(dt.Rows[0]["TeacherID"]));

                ClassroomDAL classroomDAL = new ClassroomDAL();
                allocateClassroom.Classroom = classroomDAL.GetClassroomById(connection, Convert.ToInt32(dt.Rows[0]["ClassroomID"]));
                return allocateClassroom;
            }
            else
            {
                return null;
            }
        }

        public AllocateClassroom AddAllocateClassroom(MySqlConnection connection, AllocateClassroom allocateClassroom)
        {
            MySqlCommand cmd = new MySqlCommand("INSERT INTO AllocateClassrooms (TeacherID,ClassroomID) VALUES ('" + allocateClassroom.TeacherID + "','" + allocateClassroom.ClassroomID + "'); SELECT LAST_INSERT_ID();", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            int generatedId = (int)cmd.LastInsertedId;
            connection.Close();

            if (i > 0)
            {
                allocateClassroom.AllocateClassroomID = generatedId;
                return allocateClassroom;
            }
            else
            {
                return null;
            }
        }

        public String UpdateAllocateClassroom(MySqlConnection connection, AllocateClassroom allocateClassroom)
        {
            MySqlCommand cmd = new MySqlCommand("UPDATE AllocateClassrooms SET TeacherID = '" + allocateClassroom.TeacherID + "',ClassroomID = '" + allocateClassroom.ClassroomID + "' WHERE ClassroomID='"+ allocateClassroom.AllocateClassroomID+"'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Allocated classroom updated";
            }
            else
            {
                return "No Data Upadated";
            }
        }

        public String DeleteAllocateClassroom(MySqlConnection connection, int id)
        {
            MySqlCommand cmd = new MySqlCommand("DELETE FROM AllocateClassrooms WHERE AllocateClassroomID='" + id + "'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Allocate Classroom deleted";
            }
            else
            {
                return "No Data Upadated";
            }
        }
    }
}

