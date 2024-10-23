import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="about">
    <h2>About Me</h2>
    <p>
      I am a web developer with experience in backend and frontend technologies. I have worked on various
      projects, using the MERN stack, cloud platforms, and DevOps tools. I am passionate about solving 
      problems, writing clean code, and building scalable applications.
    </p>

    <h3>Education</h3>
    <ul>
      <li>Master’s of Science in Computer Science, Sacred Heart University, Fairfield, Connecticut (Dec 2023)</li>
      <li>Bachelor’s of Technology in Computer Science, MLR Institute of Technology, Hyderabad, India (June 2021)</li>
    </ul>

    <h3>Skills</h3>
    <ul>
      <li><strong>Programming Languages:</strong> Java, Python, C, C++, TypeScript</li>
      <li><strong>Databases:</strong> MySQL, MongoDB, DynamoDB</li>
      <li><strong>Backend:</strong> Node.js, Microservices, REST API</li>
      <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
      <li><strong>DevOps:</strong> Docker, AWS ECS, AWS EFS</li>
      <li><strong>AWS Services:</strong> EC2, S3, RDS, Lightsail, Cognito, SES, SQS, Lambda, IAM</li>
      <li><strong>Tools:</strong> Git, Postman, Jupyter Notebook</li>
      <li><strong>Cloud Platforms:</strong> AWS, GCP, Azure</li>
      <li><strong>Configuration Management:</strong> JSON, YAML</li>
    </ul>
  </section>
);

export default About;
