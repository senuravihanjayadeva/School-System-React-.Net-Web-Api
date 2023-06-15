using System;
using BACKENDAPI.DTO;
using BACKENDAPI.Models;
using MySql.Data.MySqlClient;
using System.Data;

namespace BACKENDAPI.DAL
{
	public class TeacherDAL
	{
        public List<Teacher> GetAllTeachers(MySqlConnection connection)
        {
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM Teachers", connection);
            DataTable dt = new DataTable();
            List<Teacher> teachers = new List<Teacher>();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Teacher teacher = new Teacher();
                    teacher.TeacherID = Convert.ToInt32(dt.Rows[i]["TeacherID"]);
                    teacher.FirstName = Convert.ToString(dt.Rows[i]["FirstName"]);
                    teacher.LastName = Convert.ToString(dt.Rows[i]["LastName"]);
                    teacher.ContactNo = Convert.ToString(dt.Rows[i]["ContactNo"]);
                    teacher.EmailAddress = Convert.ToString(dt.Rows[i]["EmailAddress"]);
                    teachers.Add(teacher);
                }
                return teachers;
            }
            else
            {
                return null;
            }
        }

        public Teacher GetTeacherById(MySqlConnection connection, int id)
        {
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM Teachers WHERE TeacherID = '" + id + "'", connection);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                Teacher teacher = new Teacher();
                teacher.TeacherID = Convert.ToInt32(dt.Rows[0]["TeacherID"]);
                teacher.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                teacher.LastName = Convert.ToString(dt.Rows[0]["LastName"]);
                teacher.ContactNo = Convert.ToString(dt.Rows[0]["ContactNo"]);
                teacher.EmailAddress = Convert.ToString(dt.Rows[0]["EmailAddress"]);
                return teacher;
            }
            else
            {
                return null;
            }
        }

        public Teacher AddTeacher(MySqlConnection connection, Teacher teacher)
        {
            MySqlCommand cmd = new MySqlCommand("INSERT INTO Teachers (FirstName,LastName,ContactNo,EmailAddress) VALUES ('" + teacher.FirstName + "','" + teacher.LastName + "','" + teacher.ContactNo + "','" + teacher.EmailAddress + "')", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return teacher;
            }
            else
            {
                return null;
            }
        }

        public String UpdateTeacher(MySqlConnection connection, Teacher teacher)
        {
            MySqlCommand cmd = new MySqlCommand("UPDATE Teachers SET FirstName = '" + teacher.FirstName + "',LastName = '" + teacher.LastName + "',ContactNo = '" + teacher.ContactNo + "',EmailAddress = '" + teacher.EmailAddress + "' WHERE TeacherID='" + teacher.TeacherID + "'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Teacher updated";
            }
            else
            {
                return "No Data Upadated";
            }
        }

        public String DeleteTeacher(MySqlConnection connection, int id)
        {
            MySqlCommand cmd = new MySqlCommand("DELETE FROM Teachers WHERE TeacherID='" + id + "'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Teacher deleted";
            }
            else
            {
                return "No Data Upadated";
            }
        }
    }
}

