import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

const mockStudents = [
  {
    id: uuidv4(),
    name: 'John Doe',
    email: 'john.doe@example.com',
    mobile: '1234567890',
    gender: 'Male',
    dob: '1990-01-01',
    address: '123 Main St, City',
    course: 'BE',
    acceptedTerms: true,
    active: true,
  },
  {
    id: uuidv4(),
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    mobile: '9876543210',
    gender: 'Female',
    dob: '1995-05-15',
    address: '456 Elm St, City',
    course: 'BSc',
    acceptedTerms: true,
    active: false,
  },
  {
    id: uuidv4(),
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    mobile: '4567890123',
    gender: 'Male',
    dob: '1992-08-20',
    address: '789 Oak St, City',
    course: 'BBA',
    acceptedTerms: true,
    active: true,
  },
  {
    id: uuidv4(),
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    mobile: '3216549870',
    gender: 'Female',
    dob: '1994-03-12',
    address: '987 Maple St, City',
    course: 'BA',
    acceptedTerms: true,
    active: false,
  },
  {
    id: uuidv4(),
    name: 'David Johnson',
    email: 'david.johnson@example.com',
    mobile: '7418529630',
    gender: 'Male',
    dob: '1991-11-25',
    address: '654 Pine St, City',
    course: 'BCom',
    acceptedTerms: true,
    active: false,
  },
  {
    id: uuidv4(),
    name: 'Olivia Wilson',
    email: 'olivia.wilson@example.com',
    mobile: '8529637410',
    gender: 'Female',
    dob: '1993-07-08',
    address: '321 Cedar St, City',
    course: 'BSc',
    acceptedTerms: false,
    active: true,
  },
  {
    id: uuidv4(),
    name: 'Daniel Brown',
    email: 'daniel.brown@example.com',
    mobile: '3692581470',
    gender: 'Male',
    dob: '1990-12-03',
    address: '159 Walnut St, City',
    course: 'BBA',
    acceptedTerms: true,
    active: true,
  },
  {
    id: uuidv4(),
    name: 'Sophia Taylor',
    email: 'sophia.taylor@example.com',
    mobile: '9517538640',
    gender: 'Female',
    dob: '1996-06-18',
    address: '753 Cherry St, City',
    course: 'BA',
    acceptedTerms: true,
    active: false,
  },
  {
    id: uuidv4(),
    name: 'Ethan Anderson',
    email: 'ethan.anderson@example.com',
    mobile: '2581473690',
    gender: 'Male',
    dob: '1992-02-09',
    address: '369 Birch St, City',
    course: 'BCom',
    acceptedTerms: true,
    active: true,
  },
  {
    id: uuidv4(),
    name: 'Ava Martinez',
    email: 'ava.martinez@example.com',
    mobile: '6549873210',
    gender: 'Female',
    dob: '1993-09-22',
    address: '852 Spruce St, City',
    course: 'BE',
    acceptedTerms: true,
    active: false,
  },
]
class StudentListPage extends Component {
  state = {
    students: mockStudents,
    searchQuery: '',
    statusFilter: 'All',
    currentPage: 1,
    studentsPerPage: 5,
    editingStudentId: null,
    editedName: '',
    editedEmail: '',
    editedMobile: '',
    editedGender: '',
    editedDob: '',
    editedAddress: '',
    editedCourse: '',
    editedAcceptedTerms: false,
    editedStatus: '',
    newStudentName: '',
    newStudentEmail: '',
    newStudentMobile: '',
    newStudentGender: '',
    newStudentDob: '',
    newStudentAddress: '',
    newStudentCourse: '',
    newStudentAcceptedTerms: false,
    newStudentStatus: 'active',
  }

  componentDidUpdate() {
    const {students} = this.state
    localStorage.setItem('students', JSON.stringify(students))
  }

  onDeleteStudent = studentId => {
    const {students} = this.state
    const updatedStudents = students.filter(
      eachStudent => eachStudent.id !== studentId,
    )
    this.setState({students: updatedStudents})
  }

  onEditStudent = studentId => {
    const {students} = this.state
    const studentToEdit = students.find(
      eachStudent => eachStudent.id === studentId,
    )
    this.setState({
      editingStudentId: studentId,
      editedName: studentToEdit.name,
      editedEmail: studentToEdit.email,
      editedMobile: studentToEdit.mobile,
      editedGender: studentToEdit.gender,
      editedDob: studentToEdit.dob,
      editedAddress: studentToEdit.address,
      editedCourse: studentToEdit.course,
      editedAcceptedTerms: studentToEdit.acceptedTerms,
      editedStatus: studentToEdit.active ? 'active' : 'inactive',
    })
  }

  onSaveEdit = () => {
    const {
      students,
      editingStudentId,
      editedName,
      editedEmail,
      editedMobile,
      editedGender,
      editedDob,
      editedAddress,
      editedCourse,
      editedAcceptedTerms,
      editedStatus,
    } = this.state

    const updatedStudents = students.map(student => {
      if (student.id === editingStudentId) {
        return {
          ...student,
          name: editedName,
          email: editedEmail,
          mobile: editedMobile,
          gender: editedGender,
          dob: editedDob,
          address: editedAddress,
          course: editedCourse,
          acceptedTerms: editedAcceptedTerms,
          active: editedStatus === 'active',
        }
      }
      return student
    })

    this.setState({
      students: updatedStudents,
      editingStudentId: null,
      editedName: '',
      editedEmail: '',
      editedMobile: '',
      editedGender: '',
      editedDob: '',
      editedAddress: '',
      editedCourse: '',
      editedAcceptedTerms: false,
      editedStatus: '',
    })
  }

  onAddStudent = () => {
    const {
      students,
      newStudentName,
      newStudentEmail,
      newStudentMobile,
      newStudentGender,
      newStudentDob,
      newStudentAddress,
      newStudentCourse,
      newStudentAcceptedTerms,
      newStudentStatus,
    } = this.state

    const newStudent = {
      id: uuidv4(),
      name: newStudentName,
      email: newStudentEmail,
      mobile: newStudentMobile,
      gender: newStudentGender,
      dob: newStudentDob,
      address: newStudentAddress,
      course: newStudentCourse,
      acceptedTerms: newStudentAcceptedTerms,
      active: newStudentStatus === 'active',
    }

    const updatedStudents = [...students, newStudent]

    this.setState({
      students: updatedStudents,
      newStudentName: '',
      newStudentEmail: '',
      newStudentMobile: '',
      newStudentGender: '',
      newStudentDob: '',
      newStudentAddress: '',
      newStudentCourse: '',
      newStudentAcceptedTerms: false,
      newStudentStatus: 'active',
    })
  }

  handleSearchChange = event => {
    this.setState({searchQuery: event.target.value})
  }

  handleStatusFilterChange = event => {
    this.setState({statusFilter: event.target.value})
  }

  handlePageChange = pageNumber => {
    this.setState({currentPage: pageNumber})
  }

  handleEditInputChange = event => {
    const {target} = event
    const {type, checked, value, name} = target

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  handleAddInputChange = event => {
    const {target} = event
    const {type, checked, value, name} = target

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  render() {
    const {
      students,
      searchQuery,
      statusFilter,
      currentPage,
      studentsPerPage,
      editingStudentId,
      editedName,
      editedEmail,
      editedMobile,
      newStudentName,
      newStudentEmail,
      newStudentMobile,
      newStudentGender,
      newStudentDob,
      newStudentAddress,
      newStudentCourse,
      newStudentAcceptedTerms,
      newStudentStatus,
    } = this.state

    const indexOfLastStudent = currentPage * studentsPerPage
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage

    const filteredStudents = students
      .filter(student => {
        const {name, email, mobile, active} = student
        const normalizedSearchQuery = searchQuery.toLowerCase()
        const normalizedName = name.toLowerCase()
        const normalizedEmail = email.toLowerCase()
        const normalizedMobile = mobile.toLowerCase()

        return (
          (normalizedName.includes(normalizedSearchQuery) ||
            normalizedEmail.includes(normalizedSearchQuery) ||
            normalizedMobile.includes(normalizedSearchQuery)) &&
          (statusFilter === 'All' ||
            (statusFilter === 'Active' && active) ||
            (statusFilter === 'Inactive' && !active))
        )
      })
      .slice(indexOfFirstStudent, indexOfLastStudent)

    const totalPages = Math.ceil(students.length / studentsPerPage)

    return (
      <div className="student-directory">
        <div>
          <h2>Add New Student</h2>
          <div className="add-student">
            <div>
              <label htmlFor="newStudentName">Name:</label>
              <input
                type="text"
                id="newStudentName"
                name="newStudentName"
                value={newStudentName}
                onChange={this.handleAddInputChange}
              />
            </div>
            <div>
              <label htmlFor="newStudentEmail">Email:</label>
              <input
                type="email"
                id="newStudentEmail"
                name="newStudentEmail"
                value={newStudentEmail}
                onChange={this.handleAddInputChange}
              />
            </div>
            <div>
              <label htmlFor="newStudentMobile">Mobile:</label>
              <input
                type="text"
                id="newStudentMobile"
                name="newStudentMobile"
                value={newStudentMobile}
                onChange={this.handleAddInputChange}
              />
            </div>
            <div>
              <label htmlFor="newStudentGender">Gender:</label>
              <select
                id="newStudentGender"
                name="newStudentGender"
                value={newStudentGender}
                onChange={this.handleAddInputChange}
              >
                <option value="">-- Select --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="newStudentDob">Date of Birth:</label>
              <input
                type="date"
                id="newStudentDob"
                name="newStudentDob"
                value={newStudentDob}
                onChange={this.handleAddInputChange}
              />
            </div>
            <div>
              <label htmlFor="newStudentAddress">Address:</label>
              <input
                type="text"
                id="newStudentAddress"
                name="newStudentAddress"
                value={newStudentAddress}
                onChange={this.handleAddInputChange}
              />
            </div>
            <div>
              <label htmlFor="newStudentCourse">Course:</label>
              <select
                id="newStudentCourse"
                name="newStudentCourse"
                value={newStudentCourse}
                onChange={this.handleAddInputChange}
              >
                <option value="">-- Select --</option>
                <option value="BE">BE</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
              </select>
            </div>
            <div>
              <label htmlFor="newStudentAcceptedTerms">Accepted Terms:</label>
              <input
                type="checkbox"
                id="newStudentAcceptedTerms"
                name="newStudentAcceptedTerms"
                checked={newStudentAcceptedTerms}
                onChange={this.handleAddInputChange}
              />
            </div>
            <div>
              <label htmlFor="newStudentStatus">Status:</label>
              <select
                id="newStudentStatus"
                name="newStudentStatus"
                value={newStudentStatus}
                onChange={this.handleAddInputChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <button type="submit" className="button" onClick={this.onAddStudent}>
            Add Student
          </button>
        </div>

        <h1>Search Directory</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Search by name, email, or mobile"
          value={searchQuery}
          onChange={this.handleSearchChange}
        />
        <select
          className="status-filter"
          value={statusFilter}
          onChange={this.handleStatusFilterChange}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>Course</th>
              <th>Accepted Terms</th>
              <th>Status</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>
                  {editingStudentId === student.id ? (
                    <input
                      type="text"
                      name="editedName"
                      value={editedName}
                      onChange={this.handleEditInputChange}
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td>
                  {editingStudentId === student.id ? (
                    <input
                      type="email"
                      name="editedEmail"
                      value={editedEmail}
                      onChange={this.handleEditInputChange}
                    />
                  ) : (
                    student.email
                  )}
                </td>
                <td>
                  {editingStudentId === student.id ? (
                    <input
                      type="text"
                      name="editedMobile"
                      value={editedMobile}
                      onChange={this.handleEditInputChange}
                    />
                  ) : (
                    student.mobile
                  )}
                </td>
                <td>{student.gender}</td>
                <td>{student.dob}</td>
                <td>{student.address}</td>
                <td>{student.course}</td>
                <td>{student.acceptedTerms ? 'Yes' : 'No'}</td>
                <td>
                  {student.active ? (
                    <p className="active">Active</p>
                  ) : (
                    <p className="inactive">Inactive</p>
                  )}
                </td>
                <td>
                  {editingStudentId === student.id ? (
                    <>
                      <button
                        type="submit"
                        className="button"
                        onClick={this.onSaveEdit}
                      >
                        Save
                      </button>
                      <button
                        type="submit"
                        className="button2"
                        onClick={() => this.setState({editingStudentId: null})}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      type="submit"
                      className="button"
                      onClick={() => this.onEditStudent(student.id)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    type="submit"
                    className="button2"
                    onClick={() => this.onDeleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          {Array.from({length: totalPages}, (_, index) => index + 1).map(
            page => (
              <button
                type="submit"
                key={page}
                className={page === currentPage ? 'active' : ''}
                onClick={() => this.handlePageChange(page)}
              >
                {page}
              </button>
            ),
          )}
        </div>
      </div>
    )
  }
}

export default StudentListPage
