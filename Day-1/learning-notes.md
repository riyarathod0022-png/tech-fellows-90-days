# TECH FELLOWS - FULL-STACK DEVELOPMENT INTERNSHIP

## Day 01: Understanding the Web and the MERN Stack

**Student Name:** Riya Rathod
**Lesson:** Day 01

---

## 1. What Is a Web Application?

A web application is software that people use through a web browser.
Examples include online shopping websites, student portals, banking
websites, and online booking systems.

### Frontend

The frontend is the part of a website that users see and interact with.
HTML creates the structure of a webpage, CSS styles the page, and
JavaScript adds interactive behavior. React helps developers build
interactive user interfaces using reusable components.

### Backend

The backend is the server-side part of a web application. It processes
requests, applies application rules, checks permissions, and returns
results. Node.js allows JavaScript to run on the server, while
Express.js helps manage routes and HTTP requests.

### Database

A database stores information for future use. MongoDB is a NoSQL,
document-oriented database. It can store student details, course
information, assignments, and submission records.

---

## 2. How a MERN Application Works

MERN stands for MongoDB, Express.js, React.js, and Node.js.
These four technologies work together to develop modern web applications.

### React.js

React.js is a JavaScript library used to create the frontend of a web
application. It allows developers to build reusable components such as
buttons, forms, menus, and assignment lists.

### Node.js

Node.js is a JavaScript runtime environment that allows JavaScript code
to run outside the browser. It is commonly used to execute server-side
code in web applications.

### Express.js

Express.js is a web framework that runs on Node.js. It helps developers
create routes, handle HTTP requests, and send responses to clients.

### MongoDB

MongoDB is a NoSQL database that stores application data in flexible,
document-oriented records. For example, a student portal may store
student profiles, course details, and assignment submissions.

### Working Process

When a student opens an assignment page, React displays the interface
in the browser. When the student requests assignment information, the
frontend sends an HTTP request to the backend.

The Express.js server running on Node.js receives the request and
processes it. If the information is stored in MongoDB, the backend
retrieves the required records from the database.

MongoDB returns the data to the backend. Express.js then sends an HTTP
response to the frontend. React receives the response and updates the
page to display the assignment information.

Security is also important in web development. The backend should
validate incoming data, check permissions, and protect sensitive
information. Database credentials should never be exposed in frontend
code.

In conclusion, React.js manages the user interface, Node.js runs
JavaScript on the server, Express.js handles routes and requests, and
MongoDB stores application data. Together, these technologies form
the MERN stack.

---

## 3. HTTP Methods and Status Codes

HTTP methods describe the action a client wants to perform on a resource.

- GET: Retrieves data from the server.
- POST: Sends data to the server or creates a resource.
- PUT: Replaces or updates a resource.
- PATCH: Partially updates a resource.
- DELETE: Deletes a resource.

### Common HTTP Status Codes

- 200: OK. The request was successful.
- 201: Created. A resource was created successfully.
- 400: Bad Request. The request contains invalid information.
- 401: Unauthorized. Valid authentication is missing or has failed.
- 403: Forbidden. The server refuses access to the resource.
- 404: Not Found. The requested resource was not found.
- 500: Internal Server Error. An unexpected server error occurred.

---

## 4. Roles of the MERN Technologies

- MongoDB: Stores application data.
- Express.js: Defines routes and handles HTTP requests.
- React.js: Builds the user interface.
- Node.js: Runs JavaScript code on the server.

All four technologies work together to create a full-stack web
application.

---

## 5. Knowledge Check

### 1. What is the difference between a frontend and a backend?

The frontend is the part of a website that users see and interact with.
The backend processes requests, applies application logic, and
communicates with the database.

### 2. Why might a web application need a database?

A database stores information so that it can be retrieved, updated,
and managed later. For example, a student portal stores student
details, courses, and assignments.

### 3. What is React used for in the MERN stack?

React.js is used to build interactive user interfaces with reusable
components. It helps display information and respond to user actions.

### 4. What is the difference between Node.js and Express.js?

Node.js is a JavaScript runtime environment that runs JavaScript on
the server. Express.js is a web framework built for Node.js that helps
manage routes and HTTP requests.

### 5. What is an HTTP request, and what might an HTTP response contain?

An HTTP request is a message sent by a client to a server to request
an action or information. An HTTP response may contain a status code,
headers, and data such as JSON or HTML.

### 6. Which HTTP method would commonly retrieve a list of courses?

GET is commonly used to retrieve a list of courses.
For example, GET /api/courses may request the list of courses.

### 7. What is the difference between status codes 401 and 403?

401 means valid authentication is missing or has failed.
403 means the server understands the request but refuses access
to the requested resource.

### 8. Why must database credentials not be placed in frontend code?

Frontend code can be viewed by users. If database credentials are
exposed, unauthorized people may gain access to sensitive information.
Therefore, credentials should be kept securely on the backend.

### 9. Describe the path of data when a student views an assignment list.

React sends an HTTP request to the Express.js server running on
Node.js. The backend processes the request and retrieves the required
records from MongoDB. The server returns the data to React, which
displays the assignments in the browser.

### 10. Give one example of a website that may not need a backend or
database and explain why.

A simple static portfolio website may not need a backend or database
if it only displays fixed information about a person's skills,
education, and projects. HTML, CSS, and JavaScript may be sufficient.

---

## 6. What I Learned

Today, I learned what web applications are and how their frontend,
backend, and database work together.

I also learned about the four technologies in the MERN stack:
MongoDB, Express.js, React.js, and Node.js.

I understood the basic working process of HTTP requests and responses,
common HTTP methods, and status codes. I also learned why validation,
permissions, and secure handling of database credentials are important.

---

## 7. Self-Check

- [x] I understand the client-server model.
- [x] I can explain the roles of MongoDB, Express.js, React.js, and Node.js.
- [x] I have prepared answers to all ten knowledge-check questions.
- [x] I understand the basic HTTP request-response process.
- [x] I can explain the concepts in my own words.