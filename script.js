document.addEventListener("DOMContentLoaded", () => {
  // Role Rotator
  const roles = ["Software Developer", "Frontend Developer", "Web Developer", "Backend Developer"];
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

  // Projects Slider
  const projectItems = document.querySelectorAll(".project-item");
  let projectIndex = 0;

  function showProject(index) {
    projectItems.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
  }

  showProject(projectIndex);

  document.getElementById("nextProject").addEventListener("click", () => {
    if (modal.style.display === "flex") modal.style.display = "none";
    projectIndex = (projectIndex + 1) % projectItems.length;
    showProject(projectIndex);
  });

  document.getElementById("prevProject").addEventListener("click", () => {
    if (modal.style.display === "flex") modal.style.display = "none";
    projectIndex = (projectIndex - 1 + projectItems.length) % projectItems.length;
    showProject(projectIndex);
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

