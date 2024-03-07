# React Project Manager
Project management platform offers a user-friendly interface with features such as mobile responsiveness, user registration/login with email confirmation, notifications, real-time chat, and customizable project settings. Users can upload profile pictures, create/join projects, manage lists and tasks, invite team members, and customize project themes and backgrounds. Tasks can be enriched with descriptions, labels, deadlines, and comments, with additional options like assigning users, watching tasks for notifications, and creating mini to-do lists.

# Requirements
Once you install with npm the project should be able to run on your machine. However the app is dependent on [MongoDB](http://mongodb.com/), [SMTP Config](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol/) and [JWT Secret](https://jwt.io/introduction).
	
   ### MongoDB
   Ensure MongoDB is installed on your system before installing this project. If MongoDB has not been installed you can use the following resource to install it. [Installing MongoDB](https://www.mongodb.com/docs/manual/installation/)

   Add The running Mongodb url to the `.env` file using the name `MONGO_URI` by default the value is `mongodb://localhost:27017/projectmanager`.

   Ensure the database is running before running the program, this can be achieved by `mongod` command.

   ### SMTP Config
   To send emails during authentication and notifications the project needs smtp configuration added to the `.env` file. The configs should be added using variable names included below; `HOST`, `EMAIL_PROVIDER`, `SMTP_PORT`, `EMAIL`, `PASSWORD`.

   ### JWT Secret
   Also the project requires a unique jwt secret which should be added to `.env` file with variable name `JWT_SECRET`.
 

# Features
   - Mobile Friendly Responsive Layout
   - User Registration and Login with email confirmation
   - Notification system
   - Real time chat between users
   - Upload profile picture
   - Create and join projects
   		- ### Project
          - Add Lists
          - Add Tasks
          - Drag Lists and tasks to change their position
          - Update Task, List and Project title by clicking on it
          - Invite users either by typing their username/email or by invite link
          - Update user's permissions or kick them from project
          - Group chat
          - Archived Tasks menu with option to retrieve or delete them
          - Settings menu with option to change project's theme, background (with option to upload your own image) and option to delete project available only for project creator
          - #### List options:
            - Add new task
            - Transfer tasks to other list
            - Archive tasks inside
            - Delete List and archive tasks inside
          - #### Task modal:
            - Add rich text description
            - Assign users to task (user's will later receive notifications about this task)
            - Apply, update and crete labels
            - #### Add mini to-do lists:
              - Add, edit and delete to-do tasks
              - Mark them as finished
              - Hide finished to-do tasks
            - Add deadline
            - Copy task
            - Watch task to receive notifications
            - Transfer to different list
            - Archive and delete task
            - Add, edit and delete comments 
