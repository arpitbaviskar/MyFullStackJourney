const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with HTML, CSS, and JS",
    image: "assets/placeholder.jpg",
    tech: "HTML, CSS, JS"
  },
  {
    title: "Task Manager UI",
    description: "Frontend UI for managing daily tasks",
    image: "assets/placeholder.jpg",
    tech: "CSS Grid, Flexbox"
  },
  {
    title: "Dashboard UI",
    description: "Responsive admin dashboard layout",
    image: "assets/placeholder.jpg",
    tech: "CSS Grid"
  }
];
const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';
  projectCard.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <small>${project.tech}</small>
  `;
  projectGrid.appendChild(projectCard);
});
