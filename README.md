# Getting Started with React App
Install the npm modules using npm install
Use npm start to start

## Features
In the Common Folder I used reusable components
Used Yup with Formik for Form Validation
Used Redux Toolkit for state management
Implemented UI designs which provides in given pdf

# Getting Started with Database ( Used SQL Commands)
CREATE DATABASE schoolsystem;
use schoolsystem;

CREATE TABLE Students (
  StudentID INT PRIMARY KEY AUTO_INCREMENT,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50) NOT NULL,
  ContactPerson VARCHAR(100) NOT NULL,
  ContactNo VARCHAR(20) NOT NULL,
  EmailAddress VARCHAR(100) NOT NULL,
  DateOfBirth DATE NOT NULL,
  Age INT NOT NULL,
  ClassroomID INT,
  FOREIGN KEY (ClassroomID) REFERENCES Classrooms(ClassroomID)
);

CREATE TABLE Classrooms (
  ClassroomID INT PRIMARY KEY AUTO_INCREMENT,
  ClassroomName VARCHAR(50) NOT NULL
);

CREATE TABLE Teachers (
  TeacherID INT PRIMARY KEY AUTO_INCREMENT,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50),
  ContactNo VARCHAR(20) NOT NULL,
  EmailAddress VARCHAR(100) NOT NULL
);

CREATE TABLE Subjects (
  SubjectID INT PRIMARY KEY AUTO_INCREMENT,
  SubjectName VARCHAR(50) NOT NULL
);

CREATE TABLE AllocateSubjects (
  AllocateSubjectID INT PRIMARY KEY AUTO_INCREMENT,
  TeacherID INT,
  SubjectID INT,
  FOREIGN KEY (TeacherID) REFERENCES Teachers(TeacherID),
  FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID)
);

CREATE TABLE AllocateClassrooms (
  AllocateClassroomID INT PRIMARY KEY AUTO_INCREMENT,
  TeacherID INT,
  ClassroomID INT,
  FOREIGN KEY (TeacherID) REFERENCES Teachers(TeacherID),
  FOREIGN KEY (ClassroomID) REFERENCES Classrooms(ClassroomID)
);

