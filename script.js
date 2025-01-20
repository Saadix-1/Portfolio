
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        contactForm.reset();
    });
});

function Project({ title, link }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer">
                Visit Project
            </a>
        </div>
    );
}

function App() {
    const projects = [
        { title: "Project 1", link: "https://a353136d-f184-4452-a0f0-b2be0d32a8cc-00-3cnnqdie9eke9.riker.replit.dev/" },
        { title: "Project 2", link: "https://275894e7-e969-4cd4-98b6-b8e614ae863a-00-12qvv74a715mi.worf.replit.dev/" },
        { title: "Push Fitness", link: "https://push-fitness.netlify.app/" },
        { title: "Project 4", link: "https://493822be-f670-4968-8f88-ffb0d24b5cbe-00-2z65dsuf9catr.kirk.replit.dev/" },
        { title: "Project 5", link: "https://161a78db-40d5-4a7e-9bc2-f21de73b1c87-00-2m5wn5ambl5pi.spock.replit.dev/" },
        { title: "Project 6", link: "https://f71b4255-97fb-41a6-ab63-a508c050eaf2-00-331p042n7sjl2.picard.replit.dev/#" }
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} link={project.link} />
                ))}
            </div>
        </div>
    );
}

const root = document.getElementById("react-root");
ReactDOM.render(<App />, root);
