let students = [];
let Courses = [];

const registerStudent = (obj) => {
    let student = findStudentById(obj.id);
    if(student){
        console.log(`Student with this ID already exist`);
        return;
    }
    students.push(obj);
};

const addCourses = (course) => {
    if(Courses.includes(course)){
        console.log(`Course ${course} has been already added`);
        return;
    }
    Courses.push(course);
};

const findStudentById = (ID) => {
    for(let i = 0; i < students.length; i++){
        if(students[i].id === ID){
            return students[i];
        }
    }
};

const assignCourses = (ID, subject) => {
    let courseArray = [];
    let student = findStudentById(ID);
    if(!student){
        console.log(`Student with ID ${ID} not found`);
        return;
    }
    for(let j = 0; j < subject.length; j++){
    if(Courses.includes(subject[j])){
        courseArray.push(subject[j]);
    }
    else{
        console.log(subject[j] + ' ' + 'course not available');
    }
    }
    student.courses.push(...courseArray);  
};


const coursesByStudent = (ID) => {
    let student = findStudentById(ID);
    if(!student){
        console.log(`Student with ID ${ID} not found`);
        return;
    }
    console.log(student.courses);
};

const studentsOfCourse = (subject) => {
    let studentArray = [];
    for(let i = 0; i < students.length; i++) {
        if(students[i].courses.includes(subject)){
            studentArray.push(students[i].name);
        }
    }
    if(studentArray.length){
        console.log(studentArray);
    }
    else{
        console.log(`No student registered for course ${subject}`);
    }
};

const coursesNotByStudent = (ID) => {
    let coursesArray = [];
    let student = findStudentById(ID);
    if(!student){
        console.log(`No student with ID ${ID} found`);
        return;
    }
    for(i = 0; i < Courses.length; i++){
        if(!student.courses.includes(Courses[i])){
            coursesArray.push(Courses[i]);
        }
    }
    if(coursesArray.length) {
        console.log(coursesArray);
    }
    else{
        console.log('Student has registered for all available courses')
    }
};

const obj1 = {
    "name" : "arshik",
    "id" : 123,
    "college" : "COEP",
    "phone" : 356456,
    "email" : "arshik@gmail.com",
    "password" : "qwert@y",
    "courses" : []
};

const obj2 = {
    "name" : "alpha",
    "id" : 111,
    "college" : "COEP",
    "phone" : 534647,
    "email" : "alpha@gmail.com",
    "password" : "asdf@g",
    "courses" : []
};

const obj3 = {
    "name" : "beta",
    "id" : 222,
    "college" : "COEP",
    "phone" : 346784,
    "email" : "beta@gmail.com",
    "password" : "zxcv@b",
    "courses" : []
};


registerStudent(obj1);
registerStudent(obj2);
registerStudent(obj3);
addCourses('maths');
addCourses('physics');
addCourses('english');
addCourses('geography');
addCourses('chemistry');
addCourses('biology');
assignCourses(123, ['maths', 'physics', 'chemistry', 'english']);
assignCourses(111, ['maths','english']);
assignCourses(222, ['maths', 'biology', 'physics', 'chemistry', 'english']);
coursesByStudent(123);
studentsOfCourse('biology');
coursesNotByStudent(123);
console.log(students);
console.log(Courses);