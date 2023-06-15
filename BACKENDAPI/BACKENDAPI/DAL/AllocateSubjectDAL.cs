using System;
using BACKENDAPI.DTO;
using BACKENDAPI.Models;
using MySql.Data.MySqlClient;
using System.Data;

namespace BACKENDAPI.DAL
{
	public class AllocateSubjectDAL
	{
        public List<AllocateSubjectDTO> GetAllAllocateSubjects(MySqlConnection connection)
        {
            AllocateSubjectDTO response = new AllocateSubjectDTO();
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM AllocateSubjects", connection);
            DataTable dt = new DataTable();
            List<AllocateSubjectDTO> allocateSubjectDTOs = new List<AllocateSubjectDTO>();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    AllocateSubjectDTO allocateSubject = new AllocateSubjectDTO();
                    allocateSubject.AllocateSubjectID = Convert.ToInt32(dt.Rows[i]["AllocateSubjectID"]);

                    TeacherDAL teacherDAL = new TeacherDAL();
                    allocateSubject.Teacher = teacherDAL.GetTeacherById(connection, Convert.ToInt32(dt.Rows[i]["TeacherID"]));

                    SubjectDAL subjectDAL = new SubjectDAL();
                    allocateSubject.Subject = subjectDAL.GetSubjectById(connection, Convert.ToInt32(dt.Rows[i]["SubjectID"]));

                    allocateSubjectDTOs.Add(allocateSubject);
                }
            }

            return allocateSubjectDTOs;
        }

        public AllocateSubjectDTO GetAllocateSubjectById(MySqlConnection connection, int id)
        {
            AllocateSubjectDTO response = new AllocateSubjectDTO();
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM AllocateSubjects WHERE AllocateSubjectID = '" + id + "'", connection);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                AllocateSubjectDTO allocateSubject = new AllocateSubjectDTO();
                allocateSubject.AllocateSubjectID = Convert.ToInt32(dt.Rows[0]["AllocateSubjectID"]);

                TeacherDAL teacherDAL = new TeacherDAL();
                allocateSubject.Teacher = teacherDAL.GetTeacherById(connection, Convert.ToInt32(dt.Rows[0]["TeacherID"]));

                SubjectDAL subjectDAL = new SubjectDAL();
                allocateSubject.Subject = subjectDAL.GetSubjectById(connection, Convert.ToInt32(dt.Rows[0]["SubjectID"]));
                return allocateSubject;
            }
            else
            {
                return null;
            }
        }

        public AllocateSubject AddAllocateSubject(MySqlConnection connection, AllocateSubject allocateSubject)
        {
            MySqlCommand cmd = new MySqlCommand("INSERT INTO AllocateSubjects (TeacherID,SubjectID) VALUES ('" + allocateSubject.TeacherID + "','" + allocateSubject.SubjectID + "');SELECT LAST_INSERT_ID();", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            int generatedId = (int)cmd.LastInsertedId;
            connection.Close();

            if (i > 0)
            {
                allocateSubject.AllocateSubjectID = generatedId;
                return allocateSubject;
            }
            else
            {
                return null;
            }
        }

        public String UpdateAllocateSubject(MySqlConnection connection, AllocateSubject allocateSubject)
        {
            MySqlCommand cmd = new MySqlCommand("UPDATE AllocateSubjects SET TeacherID = '" + allocateSubject.TeacherID + "',SubjectID = '" + allocateSubject.SubjectID + "'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Allocated subject updated";
            }
            else
            {
                return "No Data Upadated";
            }
        }

        public String DeleteAllocateSubject(MySqlConnection connection, int id)
        {
            MySqlCommand cmd = new MySqlCommand("DELETE FROM AllocateSubjects WHERE AllocateSubjectID='" + id + "'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Allocate Subject deleted";
            }
            else
            {
                return "No Data Upadated";
            }
        }
    }
}

