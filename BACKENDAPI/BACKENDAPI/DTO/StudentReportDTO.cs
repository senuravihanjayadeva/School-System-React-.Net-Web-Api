using System;
using BACKENDAPI.Models;

namespace BACKENDAPI.DTO
{
	public class StudentReportDTO
	{
        public int StudentID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ContactPerson { get; set; }
        public string ContactNo { get; set; }
        public string EmailAddress { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string ClassroomName { get; set; }    
        public string TeacherFirstName { get; set; }
        public string TeacherLastName { get; set; }
        public string SubjectName { get; set; }
    }
}

