export default function Skills() {
  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 container mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center sm:text-left">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-4 border rounded shadow">
          <h3 className="text-lg sm:text-xl font-bold mb-2">⚙️ DevOps (Learning & Practicing)</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li>
              CI/CD Pipelines (Jenkins, GitHub Actions)
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '80%' }}></div>
              </div>
            </li>
            <li>
              Docker & Docker Compose
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '85%' }}></div>
              </div>
            </li>
            <li>
              Kubernetes (Container Orchestration & Deployment)
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '70%' }}></div>
              </div>
            </li>
            <li>
              AWS (EC2, S3), Nginx, Linux Server Management
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '75%' }}></div>
              </div>
            </li>
            {/* <li>
              Bash Scripting & Automation
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '70%' }}></div>
              </div>
            </li> */}
            <li>
              Git, GitHub, Version Control
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '90%' }}></div>
              </div>
            </li>
            {/* <li>
              Monitoring & Logging (Prometheus, basic level)
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '50%' }}></div>
              </div>
            </li> */}
          </ul>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-lg sm:text-xl font-bold mb-2">💻 Frontend</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li>
              HTML5, CSS3, JavaScript (ES6+)
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '90%' }}></div>
              </div>
            </li>
            <li>
              React.js, Tailwind CSS, Bootstrap, jQuery
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '80%' }}></div>
              </div>
            </li>
            <li>
              Responsive UI Design & Cross-browser Compatibility
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '85%' }}></div>
              </div>
            </li>
            <li>
              TypeScript
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '75%' }}></div>
              </div>
            </li>
            <li>
              Next.js
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '80%' }}></div>
              </div>
            </li>
          
          </ul>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-lg sm:text-xl font-bold mb-2">🛠️ Backend & Development</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li>
              Node.js & Express.js
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '75%' }}></div>
              </div>
            </li>
            <li>
              Python (Flask, Django)
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '70%' }}></div>
              </div>
            </li>
            <li>
              SQL & NoSQL Databases (MySQL, MongoDB)
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '70%' }}></div>
              </div>
            </li>
            <li>
              REST API Development
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '75%' }}></div>
              </div>
            </li>
            <li>
              Testing (Jest, Mocha)
              <div className="w-full bg-gray-200 rounded h-2 sm:h-3 mt-1">
                <div className="bg-gray-600 h-2 sm:h-3 rounded" style={{ width: '60%' }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}