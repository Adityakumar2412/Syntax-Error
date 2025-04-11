// Toggle sidebar for small screen
const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Highlight active nav item
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.nav-item.active')?.classList.remove('active');
    btn.classList.add('active');
  });
});

// Notification badge logic (optional dynamic number)
const notificationBadge = document.querySelector('.notification-badge');
// For example: Set the count to 3
const notificationCount = 3;

if (notificationCount > 0) {
  notificationBadge.textContent = notificationCount;
} else {
  notificationBadge.textContent = '';
}
