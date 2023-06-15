using System;
using MySql.Data.MySqlClient;
using System.Data;
using BACKENDAPI.Models;

namespace BACKENDAPI.DAL
{
	public class ClassroomDAL
	{
        public List<Classroom> GetAllClassrooms(MySqlConnection connection)
        {
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM Classrooms", connection);
            DataTable dt = new DataTable();
            List<Classroom> classrooms = new List<Classroom>();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                for(int i = 0; i < dt.Rows.Count; i++)
                {
                    Classroom classroom = new Classroom();
                    classroom.ClassroomID = Convert.ToInt32(dt.Rows[i]["ClassroomID"]);
                    classroom.ClassroomName = Convert.ToString(dt.Rows[i]["ClassroomName"]);
                    classrooms.Add(classroom);
                }
            }

            return classrooms;
        }

        public Classroom GetClassroomById(MySqlConnection connection, int id)
        {
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM Classrooms WHERE ClassroomID = '"+id+"'", connection);
            DataTable dt = new DataTable();
            da.Fill(dt);
            Classroom classroom = new Classroom();
            if (dt.Rows.Count > 0)
            {
                classroom.ClassroomID = Convert.ToInt32(dt.Rows[0]["ClassroomID"]);
                classroom.ClassroomName = Convert.ToString(dt.Rows[0]["ClassroomName"]);
            }
            else
            {
                classroom = null;
            }
            return classroom;
        }

        public Classroom AddClassroom(MySqlConnection connection, Classroom classroom)
        {
            MySqlCommand cmd = new MySqlCommand("INSERT INTO Classrooms (ClassroomName) VALUES ('"+ classroom.ClassroomName +"')", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return classroom;
            }
            else
            {
                return null;
            }
        }

        public String UpdateClassroom(MySqlConnection connection, Classroom classroom)
        {
            MySqlCommand cmd = new MySqlCommand("UPDATE Classrooms SET ClassroomName = '"+classroom.ClassroomName+ "' WHERE ClassroomID='"+classroom.ClassroomID+"'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Classroom Updated";
            }
            else
            {
                return "No data updated";
            }
        }

        public String DeleteClassroom(MySqlConnection connection, int id)
        {
            MySqlCommand cmd = new MySqlCommand("DELETE FROM Classrooms WHERE ClassroomID='" + id + "'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Classroom Deleted";
            }
            else
            {
                return "No Data Upadated";
            }
        }
    }
}

