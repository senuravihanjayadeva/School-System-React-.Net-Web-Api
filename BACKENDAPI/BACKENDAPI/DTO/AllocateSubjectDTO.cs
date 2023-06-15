using System;
using BACKENDAPI.Models;

namespace BACKENDAPI.DTO
{
	public class AllocateSubjectDTO
	{
        public int AllocateSubjectID { get; set; }
        public Teacher Teacher { get; set; }
        public Subject Subject { get; set; }
    }
}

