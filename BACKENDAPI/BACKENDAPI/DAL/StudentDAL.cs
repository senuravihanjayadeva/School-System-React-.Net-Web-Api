using System;
using BACKENDAPI.DTO;
using BACKENDAPI.Models;
using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.AspNetCore.Connections;

namespace BACKENDAPI.DAL
{
	public class StudentDAL
	{
        public List<StudentDTO> GetAllStudents(MySqlConnection connection)
        {
            StudentDTO response = new StudentDTO();
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM Students", connection);
            DataTable dt = new DataTable();
            List<StudentDTO> students = new List<StudentDTO>();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    StudentDTO student = new StudentDTO();
                    student.StudentID = Convert.ToInt32(dt.Rows[i]["StudentID"]);
                    student.FirstName = Convert.ToString(dt.Rows[i]["FirstName"]);
                    student.LastName = Convert.ToString(dt.Rows[i]["LastName"]);
                    student.ContactPerson = Convert.ToString(dt.Rows[i]["ContactPerson"]);
                    student.ContactNo = Convert.ToString(dt.Rows[i]["ContactNo"]);
                    student.EmailAddress = Convert.ToString(dt.Rows[i]["EmailAddress"]);
                    student.DateOfBirth = Convert.ToDateTime(dt.Rows[i]["DateOfBirth"]);
                    student.Age = Convert.ToInt32(dt.Rows[i]["Age"]);

                    ClassroomDAL classroomDAL = new ClassroomDAL();
                    student.Classroom = classroomDAL.GetClassroomById(connection,Convert.ToInt32(dt.Rows[i]["ClassroomID"]));

                    students.Add(student);
                }
            }

            return students;
        }

        public StudentDTO GetStudentById(MySqlConnection connection, int id)
        {
            StudentDTO response = new StudentDTO();
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM Students WHERE StudentId = '" + id + "'", connection);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                StudentDTO student = new StudentDTO();
                student.StudentID = Convert.ToInt32(dt.Rows[0]["StudentID"]);
                student.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                student.LastName = Convert.ToString(dt.Rows[0]["LastName"]);
                student.ContactPerson = Convert.ToString(dt.Rows[0]["ContactPerson"]);
                student.ContactNo = Convert.ToString(dt.Rows[0]["ContactNo"]);
                student.EmailAddress = Convert.ToString(dt.Rows[0]["EmailAddress"]);
                student.DateOfBirth = Convert.ToDateTime(dt.Rows[0]["DateOfBirth"]);
                student.Age = Convert.ToInt32(dt.Rows[0]["Age"]);

                ClassroomDAL classroomDAL = new ClassroomDAL();
                student.Classroom = classroomDAL.GetClassroomById(connection, Convert.ToInt32(dt.Rows[0]["ClassroomID"]));
                return student;
            }
            else
            {
               return null;
            }
        }

        public Student AddStudent(MySqlConnection connection, Student student)
        {
            MySqlCommand cmd = new MySqlCommand("INSERT INTO Students (FirstName,LastName,ContactPerson,ContactNo,EmailAddress,DateOfBirth,Age,ClassroomID) VALUES ('" + student.FirstName + "','" + student.LastName + "','" + student.ContactPerson + "','" + student.ContactNo + "','" + student.EmailAddress + "','" + student.DateOfBirth + "','" + student.Age + "','" + student.ClassroomID + "');SELECT LAST_INSERT_ID();", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            int generatedId = (int)cmd.LastInsertedId;
            connection.Close();

            if (i > 0)
            {
                student.StudentID = generatedId;
                return student;
            }
            else
            {
                return null;
            }
        }

        public String UpdateStudent(MySqlConnection connection, Student student)
        {
            MySqlCommand cmd = new MySqlCommand("UPDATE Students SET FirstName = '" + student.FirstName + "',LastName = '" + student.LastName + "',ContactPerson = '" + student.ContactPerson + "',ContactNo = '" + student.ContactNo + "',EmailAddress = '" + student.EmailAddress + "',DateOfBirth = '" + student.DateOfBirth + "',Age = '" + student.Age + "',ClassroomID = '" + student.ClassroomID + "' WHERE StudentID='" + student.StudentID + "'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Student updated";
            }
            else
            {
                return "No Data Upadated";
            }
        }

        public String DeleteStudent(MySqlConnection connection, int id)
        {
            MySqlCommand cmd = new MySqlCommand("DELETE FROM Students WHERE StudentID='" + id + "'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Student deleted";
            }
            else
            {
                return "No Data Upadated";
            }
        }
    }
}

