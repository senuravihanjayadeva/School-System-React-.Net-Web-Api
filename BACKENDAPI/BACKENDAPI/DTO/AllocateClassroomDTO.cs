using System;
using BACKENDAPI.Models;

namespace BACKENDAPI.DTO
{
	public class AllocateClassroomDTO
	{
        public int AllocateClassroomID { get; set; }
        public Teacher Teacher { get; set; }
        public Classroom Classroom { get; set; }
    }
}

