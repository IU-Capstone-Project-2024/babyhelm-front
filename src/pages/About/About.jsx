// src/components/About.js

import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about">
        <div className='content'>
            <h1>Documentation</h1>
            <p>Welcome to the documentation for our product, designed to simplify application deployment. Here, you'll find all the information you need to get started, deploy your applications, and make the most of our features.</p>

            <section>
                <h2>Getting Started</h2>
                <h3>1. Creating a Project</h3>
                <p>Navigate to the "Projects" page and click "Create New Project." Fill in the necessary details such as project name and description. Submit the form to create your project.</p>

                <h3>2. Deploying an Application</h3>
                <ul>
                <li>Select your project from the "My projects".</li>
                <li>Click on "Add Application" and fill in the application details including the Docker image link in form &lt;registry&gt;/&lt;image&gt;:&lt;tag&gt;, required ports, and environment variables.</li>
                <li>Submit to deploy the application.</li>
                <li>After deployment, you will receive a link to access your application and a link to the Grafana dashboard for monitoring.</li>
                </ul>
            </section>

            <section>
                <h2>Access Grafana Dashboards</h2>
                <p>To access Grafana dashboards you need credentials:</p>
                <p><strong>login:</strong> visitor<br />
                <strong>password:</strong> visitor</p>
                <p>Here you will have:</p>
                <ul>
                <li>Namespace usage (CPU/RAM)</li>
                <li>Deployment usage (CPU/RAM)</li>
                <li>Limits and requests</li>
                <li>Restarts</li>
                <li>Replicas</li>
                </ul>
            </section>

            <section>
                <h2>Key Features</h2>
                <ul>
                <li>
                    <strong>Dynamic Monitoring Integration</strong>
                    <p>Integrated with Prometheus and Grafana, our platform offers robust monitoring capabilities. Users can view real-time metrics of their applications directly from their dashboard.</p>
                </li>
                <li>
                    <strong>Collaboration</strong>
                    <p>Add team members to your projects and assign roles to facilitate collaboration. Our platform makes it easy to work together on deployments and monitoring.</p>
                </li>
                </ul>
            </section>
        </div>
    </div>
  );
};

export default About;
