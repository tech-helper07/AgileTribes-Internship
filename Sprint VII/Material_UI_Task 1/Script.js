// Optimized JavaScript - using event delegation and minimal DOM queries
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        let isMobile = window.innerWidth <= 768;

        // Mobile navigation toggle
        document.getElementById('mobileToggle').addEventListener('click', () => {
            sidebar.classList.toggle('mobile-visible');
            overlay.classList.toggle('active');
        });

        // Close sidebar when clicking overlay
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('mobile-visible');
            overlay.classList.remove('active');
        });

        // Navigation using event delegation
        document.querySelector('.sidebar-nav').addEventListener('click', (e) => {
            const navItem = e.target.closest('.nav-item');
            if (navItem) {
                e.preventDefault();
                
                // Remove active from all items
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active to clicked item
                navItem.classList.add('active');
                
                // Close sidebar on mobile
                if (isMobile) {
                    sidebar.classList.remove('mobile-visible');
                    overlay.classList.remove('active');
                }
            }
        });

        // Simple search functionality
        const searchBox = document.querySelector('.search-box');
        let searchTimeout;
        
        searchBox.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = e.target.value.toLowerCase();
                const taskCards = document.querySelectorAll('.task-card');
                
                taskCards.forEach(card => {
                    const title = card.querySelector('.task-title').textContent.toLowerCase();
                    const isVisible = searchTerm === '' || title.includes(searchTerm);
                    card.style.display = isVisible ? 'block' : 'none';
                });
            }, 300);
        });

        // Handle resize
        window.addEventListener('resize', () => {
            isMobile = window.innerWidth <= 768;
            if (!isMobile) {
                sidebar.classList.remove('mobile-visible');
                overlay.classList.remove('active');
            }
        });

        // Add task button
        document.querySelector('.add-task-btn').addEventListener('click', () => {
            alert('Add Task functionality would be implemented here!');
        });