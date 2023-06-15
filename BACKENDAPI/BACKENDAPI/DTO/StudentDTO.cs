﻿using System;
using BACKENDAPI.Models;

namespace BACKENDAPI.DTO
{
	public class StudentDTO
	{
        public int StudentID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ContactPerson { get; set; }
        public string ContactNo { get; set; }
        public string EmailAddress { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }
        public Classroom Classroom { get; set; }
    }
}

