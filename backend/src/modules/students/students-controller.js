const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents(req.query);
    res.json({students})       
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const newStudentResponse = await addNewStudent(req.body);
    res.json(newStudentResponse);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const updateStudentResponse = await updateStudent(req.body);
    res.json(updateStudentResponse);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {    
    const studentDetail = await getStudentDetail(req.params.id);
    res.json(studentDetail);

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const studentStatusResponse = await setStudentStatus(req.body)
    res.json(studentStatusResponse)
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
