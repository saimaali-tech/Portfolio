// src/components/Projects.tsx
export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 bg-gray-100 container mx-auto px-4 sm:px-6 text-gray-900">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center sm:text-left">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="p-4 border rounded shadow bg-white/50">
          <h3 className="text-lg sm:text-xl font-bold mb-2">🔹 Containerized Application Deployment & CI/CD Automation</h3>
          <p className="leading-relaxed break-words">Successfully containerized a client’s PHP-based web application using Docker, enabling consistent environments across development, staging, and production. Designed and implemented a robust CI/CD pipeline with Jenkins, automating build, test, and deployment processes to reduce manual intervention and accelerate release cycles by 60%. Infrastructure was provisioned on AWS using Terraform, ensuring infrastructure-as-code (IaC) best practices, environment consistency, and seamless scalability.</p>
        </div>
        <div className="p-4 border rounded shadow bg-white/50">
          <h3 className="text-lg sm:text-xl font-bold mb-2">🔹 Challenge & Resolution – Docker Networking & Service Integration</h3>
          <p className="leading-relaxed break-words">Initially encountered connectivity issues between the PHP application and MySQL database running in separate Docker containers—resulting in failed deployments and downtime during testing. Diagnosed root causes including isolated container networks, incorrect environment variable handling, and misconfigured service dependencies. Solution: Implemented Docker Compose to define a custom bridge network, manage service orchestration, and inject environment-specific configurations securely. Standardized container communication through defined aliases and health checks, while externalizing database credentials using environment variables. This resolved connectivity instability and ensured reliable, repeatable deployments.</p>
        </div>
        <div className="p-4 border rounded shadow bg-white/50">
          <h3 className="text-lg sm:text-xl font-bold mb-2">🔹 Dockerized Application Deployment with Nginx Reverse Proxy & Custom Domain</h3>
          <p className="leading-relaxed break-words">Containerized a client’s production-grade web application using Docker, ensuring environment consistency and portability. Integrated Nginx as a reverse proxy within the Docker ecosystem to efficiently route external traffic to the containerized application, improving performance and security. Successfully mapped the application to a custom domain (e.g., app.client.com) and enabled secure, public access over HTTPS, providing a professional and scalable web presence.</p>
        </div>
        <div className="p-4 border rounded shadow bg-white/50">
          <h3 className="text-lg sm:text-xl font-bold mb-2">🔹 Challenge & Resolution – Nginx Proxy & Domain Routing Issues</h3>
          <p className="leading-relaxed break-words">Initially, the application failed to load on the domain despite successful container startup. Investigation revealed misconfigured Nginx server blocks, incorrect port mappings between container and host, and unresolved DNS propagation delays. The proxy returned 502 Bad Gateway errors due to Nginx being unable to reach the upstream container service. Solution: Refactored the Nginx configuration with correct proxy_pass directives and upstream server definitions. Ensured proper host port exposure (-p 80:80) and verified container network connectivity. Set up accurate A records and DNS configurations with the domain registrar, aligning with the server’s public IP. Validated end-to-end flow using curl, browser testing, and Nginx error logs for rapid debugging.</p>
        </div>
      </div>
    </section>
  );
}