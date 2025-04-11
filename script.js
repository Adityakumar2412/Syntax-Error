// Navigation
document.querySelectorAll('.nav-links li').forEach(link => {
  link.addEventListener('click', () => {
      // Remove active class from all links
      document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      link.classList.add('active');
      
      // Hide all pages
      document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
      // Show selected page
      const pageName = link.getAttribute('data-page');
      document.getElementById(pageName).classList.add('active');
  });
});

// Modal handling
const modal = document.getElementById('addStudentModal');
const addStudentBtn = document.getElementById('addStudentBtn');
const closeModalBtn = document.getElementById('closeModal');

addStudentBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
      modal.classList.remove('active');
  }
});

// Sample student data
let students = [
  { id: 1, name: 'John Doe', course: 'Computer Science', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', course: 'Mathematics', email: 'jane@example.com' },
  { id: 3, name: 'Mike Johnson', course: 'Physics', email: 'mike@example.com' },
];

// Function to render students table
function renderStudentsTable() {
  const tableBody = document.getElementById('studentTableBody');
  tableBody.innerHTML = '';

  students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.course}</td>
          <td>${student.email}</td>
          <td>
              <button class="btn-secondary" onclick="editStudent(${student.id})">Edit</button>
              <button class="btn-secondary" onclick="deleteStudent(${student.id})">Delete</button>
          </td>
      `;
      tableBody.appendChild(row);
  });
}

// Add new student
document.getElementById('addStudentForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const newStudent = {
      id: students.length + 1,
      name: document.getElementById('studentName').value,
      email: document.getElementById('studentEmail').value,
      course: document.getElementById('studentCourse').value
  };

  students.push(newStudent);
  renderStudentsTable();
  modal.classList.remove('active');
  e.target.reset();
});

// Edit student function
function editStudent(id) {
  const student = students.find(s => s.id === id);
  if (student) {
      // Implement edit functionality
      console.log('Edit student:', student);
  }
}

// Delete student function
function deleteStudent(id) {
  if (confirm('Are you sure you want to delete this student?')) {
      students = students.filter(s => s.id !== id);
      renderStudentsTable();
  }
}

// Initial render
renderStudentsTable();

// Search functionality
document.querySelector('.search-bar input').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredStudents = students.filter(student => 
      student.name.toLowerCase().includes(searchTerm) ||
      student.email.toLowerCase().includes(searchTerm) ||
      student.course.toLowerCase().includes(searchTerm)
  );
  
  const tableBody = document.getElementById('studentTableBody');
  tableBody.innerHTML = '';
  
  filteredStudents.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.course}</td>
          <td>${student.email}</td>
          <td>
              <button class="btn-secondary" onclick="editStudent(${student.id})">Edit</button>
              <button class="btn-secondary" onclick="deleteStudent(${student.id})">Delete</button>
          </td>
      `;
      tableBody.appendChild(row);
  });
});