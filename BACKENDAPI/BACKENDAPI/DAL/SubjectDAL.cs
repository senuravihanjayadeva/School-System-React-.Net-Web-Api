using System;
using BACKENDAPI.Models;
using BACKENDAPI.DTO;
using MySql.Data.MySqlClient;
using System.Data;

namespace BACKENDAPI.DAL
{
	public class SubjectDAL
	{
        public List<Subject> GetAllSubjects(MySqlConnection connection)
        {
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM Subjects", connection);
            DataTable dt = new DataTable();
            List<Subject> subjects = new List<Subject>();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Subject subject = new Subject();
                    subject.SubjectID = Convert.ToInt32(dt.Rows[i]["SubjectID"]);
                    subject.SubjectName = Convert.ToString(dt.Rows[i]["SubjectName"]);
                    subjects.Add(subject);
                }
                return subjects;
            }
            else
            {
                return null;
            }
        }

        public Subject GetSubjectById(MySqlConnection connection, int id)
        {
            MySqlDataAdapter da = new MySqlDataAdapter("SELECT * FROM Subjects WHERE SubjectID = '" + id + "'", connection);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                Subject subject = new Subject();
                subject.SubjectID = Convert.ToInt32(dt.Rows[0]["SubjectID"]);
                subject.SubjectName = Convert.ToString(dt.Rows[0]["SubjectName"]);
                return subject;
            }
            else
            {
               return null;
            }
        }

        public Subject AddSubject(MySqlConnection connection, Subject subject)
        {
            MySqlCommand cmd = new MySqlCommand("INSERT INTO Subjects (SubjectName) VALUES ('" + subject.SubjectName + "')", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return subject;
            }
            else
            {
                return null;
            }
        }

        public String UpdateSubject(MySqlConnection connection, Subject subject)
        {
            MySqlCommand cmd = new MySqlCommand("UPDATE Subjects SET SubjectName = '" + subject.SubjectName + "' WHERE SubjectID='" + subject.SubjectID + "'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Subject updated";
            }
            else
            {
                return "No Data Upadated";
            }
        }

        public String DeleteSubject(MySqlConnection connection, int id)
        {
            MySqlCommand cmd = new MySqlCommand("DELETE FROM Subjects WHERE SubjectId='" + id + "'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                return "Subject deleted";
            }
            else
            {
                return "No Data Upadated";
            }
        }
    }
}

