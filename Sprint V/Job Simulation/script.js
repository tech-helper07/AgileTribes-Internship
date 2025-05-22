// Main application class using ES6 features
        class StudentManager {
            constructor() {
                // Initialize student array to store all student data
                this.students = [];
                this.currentEditingId = null;
                this.studentIdCounter = 0;

                // Get DOM elements using modern selection methods
                this.studentInput = document.getElementById('studentInput');
                this.addBtn = document.getElementById('addBtn');
                this.studentList = document.getElementById('studentList');
                this.studentCount = document.getElementById('studentCount');
                this.searchInput = document.getElementById('searchInput');
                this.clearAllBtn = document.getElementById('clearAllBtn');
                this.errorMessage = document.getElementById('errorMessage');
                this.emptyState = document.getElementById('emptyState');

                // Initialize the application
                this.init();
            }

            // Initialize event listeners and setup
            init = () => {
                this.setupEventListeners();
                this.updateDisplay();
            }

            // Setup all event listeners using event delegation
            setupEventListeners = () => {
                // Add button click event
                this.addBtn.addEventListener('click', this.handleAddStudent);

                // Enter key press on input field
                this.studentInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.handleAddStudent();
                    }
                });

                // Input validation on typing
                this.studentInput.addEventListener('input', this.hideErrorMessage);

                // Search functionality
                this.searchInput.addEventListener('input', this.handleSearch);

                // Clear all button
                this.clearAllBtn.addEventListener('click', this.handleClearAll);

                // Event delegation for dynamic buttons (edit, delete, save, cancel)
                this.studentList.addEventListener('click', this.handleListClick);

                // Handle Enter key on editing
                this.studentList.addEventListener('keypress', this.handleEditKeyPress);
            }

            // Handle adding a new student
            handleAddStudent = () => {
                const studentName = this.studentInput.value.trim();

                // Validate input
                if (!this.validateStudentName(studentName)) {
                    this.showErrorMessage('Please enter a valid student name!');
                    return;
                }

                // Check for duplicates
                if (this.isDuplicateName(studentName)) {
                    this.showErrorMessage('Student name already exists!');
                    return;
                }

                // Create new student object
                const newStudent = {
                    id: ++this.studentIdCounter,
                    name: studentName,
                    originalName: studentName.toLowerCase() // for search
                };

                // Add to students array
                this.students.push(newStudent);

                // Clear input and update display
                this.studentInput.value = '';
                this.hideErrorMessage();
                this.updateDisplay();

                // Focus back to input for better UX
                this.studentInput.focus();
            }

            // Validate student name input
            validateStudentName = (name) => {
                // Check if name is not empty and contains at least one letter
                return name.length > 0 && /[a-zA-Z]/.test(name) && name.length <= 50;
            }

            // Check for duplicate names
            isDuplicateName = (name) => {
                return this.students.some(student => 
                    student.name.toLowerCase() === name.toLowerCase()
                );
            }

            // Handle clicks on dynamic list elements using event delegation
            handleListClick = (e) => {
                const target = e.target;
                const studentItem = target.closest('.student-item');
                
                if (!studentItem) return;

                const studentId = parseInt(studentItem.dataset.studentId);

                // Handle different button clicks
                if (target.classList.contains('delete-btn')) {
                    this.deleteStudent(studentId);
                } else if (target.classList.contains('edit-btn')) {
                    this.editStudent(studentId);
                } else if (target.classList.contains('save-btn')) {
                    this.saveStudent(studentId);
                } else if (target.classList.contains('cancel-btn')) {
                    this.cancelEdit();
                }
            }

            // Handle Enter key press during editing
            handleEditKeyPress = (e) => {
                if (e.key === 'Enter' && e.target.classList.contains('editing')) {
                    const studentItem = e.target.closest('.student-item');
                    const studentId = parseInt(studentItem.dataset.studentId);
                    this.saveStudent(studentId);
                }
            }

            // Delete a student from the list
            deleteStudent = (studentId) => {
                // Confirm deletion
                if (confirm('Are you sure you want to delete this student?')) {
                    // Filter out the student with matching ID
                    this.students = this.students.filter(student => student.id !== studentId);
                    this.updateDisplay();
                }
            }

            // Edit a student name
            editStudent = (studentId) => {
                // Cancel any current editing
                this.cancelEdit();

                // Find the student item
                const studentItem = document.querySelector(`[data-student-id="${studentId}"]`);
                const nameElement = studentItem.querySelector('.student-name');
                
                // Store current editing ID
                this.currentEditingId = studentId;

                // Convert to editable input
                const currentName = nameElement.textContent;
                nameElement.innerHTML = `<input type="text" class="editing" value="${currentName}" maxlength="50">`;
                
                // Update buttons
                const buttonGroup = studentItem.querySelector('.button-group');
                buttonGroup.innerHTML = `
                    <button class="save-btn">Save</button>
                    <button class="cancel-btn">Cancel</button>
                `;

                // Focus on the input
                const editInput = nameElement.querySelector('.editing');
                editInput.focus();
                editInput.select();
            }

            // Save edited student name
            saveStudent = (studentId) => {
                const studentItem = document.querySelector(`[data-student-id="${studentId}"]`);
                const editInput = studentItem.querySelector('.editing');
                const newName = editInput.value.trim();

                // Validate new name
                if (!this.validateStudentName(newName)) {
                    alert('Please enter a valid student name!');
                    return;
                }

                // Check for duplicates (excluding current student)
                const isDuplicate = this.students.some(student => 
                    student.id !== studentId && 
                    student.name.toLowerCase() === newName.toLowerCase()
                );

                if (isDuplicate) {
                    alert('Student name already exists!');
                    return;
                }

                // Update student in array
                const studentIndex = this.students.findIndex(student => student.id === studentId);
                if (studentIndex !== -1) {
                    this.students[studentIndex].name = newName;
                    this.students[studentIndex].originalName = newName.toLowerCase();
                }

                // Reset editing state
                this.currentEditingId = null;
                this.updateDisplay();
            }

            // Cancel editing
            cancelEdit = () => {
                this.currentEditingId = null;
                this.updateDisplay();
            }

            // Handle search functionality
            handleSearch = (e) => {
                const searchTerm = e.target.value.toLowerCase().trim();
                this.renderStudentList(searchTerm);
            }

            // Clear all students
            handleClearAll = () => {
                if (this.students.length > 0 && confirm('Are you sure you want to clear all students?')) {
                    this.students = [];
                    this.currentEditingId = null;
                    this.searchInput.value = '';
                    this.updateDisplay();
                }
            }

            // Show error message
            showErrorMessage = (message) => {
                this.errorMessage.textContent = message;
                this.errorMessage.style.display = 'block';
                this.studentInput.style.borderColor = '#dc3545';
            }

            // Hide error message
            hideErrorMessage = () => {
                this.errorMessage.style.display = 'none';
                this.studentInput.style.borderColor = '#e9ecef';
            }

            // Update the entire display
            updateDisplay = () => {
                this.renderStudentList();
                this.updateStudentCount();
                this.toggleEmptyState();
            }

            // Render the student list with optional search filter
            renderStudentList = (searchTerm = '') => {
                // Filter students based on search term
                const filteredStudents = searchTerm 
                    ? this.students.filter(student => 
                        student.originalName.includes(searchTerm)
                      )
                    : this.students;

                // Generate HTML using template literals
                const studentHTML = filteredStudents.map(student => {
                    const isEditing = this.currentEditingId === student.id;
                    
                    return `
                        <li class="student-item" data-student-id="${student.id}">
                            <div class="student-name">
                                ${isEditing 
                                    ? `<input type="text" class="editing" value="${student.name}" maxlength="50">`
                                    : student.name
                                }
                            </div>
                            <div class="button-group">
                                ${isEditing 
                                    ? `
                                        <button class="save-btn">Save</button>
                                        <button class="cancel-btn">Cancel</button>
                                      `
                                    : `
                                        <button class="edit-btn">Edit</button>
                                        <button class="delete-btn">Delete</button>
                                      `
                                }
                            </div>
                        </li>
                    `;
                }).join('');

                // Update the DOM
                this.studentList.innerHTML = studentHTML;

                // If editing, focus on the input
                if (this.currentEditingId) {
                    const editInput = document.querySelector('.editing');
                    if (editInput) {
                        editInput.focus();
                        editInput.select();
                    }
                }
            }

            // Update student count display
            updateStudentCount = () => {
                this.studentCount.textContent = this.students.length;
            }

            // Toggle empty state visibility
            toggleEmptyState = () => {
                const hasStudents = this.students.length > 0;
                this.emptyState.style.display = hasStudents ? 'none' : 'block';
                this.studentList.style.display = hasStudents ? 'block' : 'none';
            }
        }

        // Initialize the application when DOM is fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            new StudentManager();
        });