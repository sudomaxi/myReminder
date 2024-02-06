Task Management API

This project is a task management API built using Express.js, MongoDB, Mongoose, bcryptjs, JavaScript, Twilio integration for call initiation, 
and other necessary packages. The API provides various endpoints to perform CRUD operations on tasks and subtasks, as well as cron jobs for automated task management and voice calling.
Configuration:Create a .env file in the root directory based on the provided .env.example file.Populate the .env file with your MongoDB URL, Twilio credentials,JWT,PORT and other necessary configuration variables.
Usage:
Run the server:
npm run dev 
Access the API endpoints using a tool like Postman or any other HTTP client.
Endpoints:
Create Task: POST /api/tasks
Input: title, description, due_date
Requires JWT authentication.
Create Subtask: POST /api/subtasks
Input: task_id
Get All User Tasks: GET /api/tasks
Filters available: priority, due date, pagination.
Get All User Subtasks: GET /api/subtasks
Filter by task_id if passed.
Update Task: PUT /api/tasks/:taskId
Input: due_date, status (TODO or DONE)
Update Subtask: PUT /api/subtasks/:subtaskId
Input: status (0 or 1)
Delete Task: DELETE /api/tasks/:taskId
Soft deletion.
Delete Subtask: DELETE /api/subtasks/:subtaskId
Soft deletion.
Cron Jobs:
Cron Logic for Changing Task Priority:
Logic to change task priority based on due_date.
Cron Logic for Voice Calling using Twilio:
Logic to initiate voice calls using Twilio if a task passes its due_date.
Calling priority is based on user priority fetched from the user table.
Folder Structure:
config: Contains database configuration files.
routes: Contains route definitions for API endpoints.
models: Contains user schema definitions.
controllers: Contains business logic for API endpoints.
middleware: Contains authentication middleware.
cron: Contains cron job logic files.
index.js: Entry point for the application.
Dependencies:
bcryptjs, cookie-parser, dotenv, express, jsonwebtoken, mongoose, morgan, node-cron, nodemon, twilio
