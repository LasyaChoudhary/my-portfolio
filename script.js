document.addEventListener("DOMContentLoaded", () => {
  // Role Rotator
  const roles = [ "Frontend Developer", "Web Developer", "Backend Developer"];
  let roleIndex = 0;
  const roleElement = document.getElementById("role");
  roleElement.textContent = roles[0];

  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.textContent = roles[roleIndex];
  }, 2500);

  // Modal Logic (declare modal before using in slider controls)
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close-btn");

  const projectItems = document.querySelectorAll(".project-item");
const nextProjectBtn = document.getElementById("nextProject");
const prevProjectBtn = document.getElementById("prevProject");
let projectIndex = 0;

function showProject(index) {
  projectItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });

  // Disable/enable buttons appropriately
  prevProjectBtn.disabled = index === 0;
  nextProjectBtn.disabled = index === projectItems.length - 1;
}

showProject(projectIndex);

nextProjectBtn.addEventListener("click", () => {
  if (modal.style.display === "flex") modal.style.display = "none";
  if (projectIndex < projectItems.length - 1) {
    projectIndex++;
    showProject(projectIndex);
  }
});

prevProjectBtn.addEventListener("click", () => {
  if (modal.style.display === "flex") modal.style.display = "none";
  if (projectIndex > 0) {
    projectIndex--;
    showProject(projectIndex);
  }
});


  // Project descriptions for modal
  const projectDescriptions = {
    "Virtual Classroom Attendance Management System": `This project enables instructors to mark, manage, and generate attendance reports through an easy-to-use interface. Python handles the backend logic, and data is stored. The interface is designed to be intuitive for both teachers and students, supporting real-time updates and improving classroom efficiency.`,
    "Weather Application": `The application fetches data from a weather API and dynamically updates the UI to reflect current weather conditions. It includes features like location-based forecasts, temperature display, and adaptive styling based on weather. Designed with a focus on user experience, the app works across various screen sizes and devices.`
  };

  // See More buttons open modal with project details
  document.querySelectorAll(".see-more").forEach(btn => {
    btn.addEventListener("click", function () {
      const title = this.parentElement.getAttribute("data-title");
      modalTitle.textContent = title;
      modalDescription.textContent = projectDescriptions[title] || "No details available.";
      modal.style.display = "flex";
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside content
  window.addEventListener("click", event => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Theme Toggle Button
  document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const headerOffset = 120; // navbar height
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});



const activities = document.querySelectorAll('.activity');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showActivity(index) {
  activities.forEach((activity, i) => {
    activity.classList.remove('active'); // remove all active first
    activity.style.display = 'none';
  });

  const current = activities[index];
  current.style.display = 'block';

  // Force reflow to restart animation
  void current.offsetWidth;

  current.classList.add('active');

  // Disable prev/next if at start or end
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === activities.length - 1;
}



prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showActivity(currentIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < activities.length - 1) {
    currentIndex++;
    showActivity(currentIndex);
  }
});

showActivity(currentIndex);





const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();  // prevent default anchor scroll
    
    // Remove active class from all nav links
    navLinks.forEach(nav => nav.classList.remove('active'));
    // Add active class to clicked link
    link.classList.add('active');

    // Get target section ID from href attribute (like "#about")
    const targetId = link.getAttribute('href').substring(1);

    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));
    // Show the target section
    document.getElementById(targetId).classList.add('active');
  });
});

