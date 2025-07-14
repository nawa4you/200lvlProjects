1) My NestJS folder is the 23120112021_Backend.  remove the first folder(zip folder name and use the tastybites-backend if theres any path conflict)
2) my React folder is the 23120112021_Frontend. remove the first folder(zip folder name and use the tastybites-frontend if theres any path conflict)
3) nginx-primer: The Nginx configuration for the web server.

Prerequisites
Before you begin,install:

Node.js and npm: (v16 or later recommended)

MongoDB: Installed and running as a service.

Nginx: Installed.

NestJS CLI (Optional but recommended): Installed globally (npm i -g @nestjs/cli).

(im assuming its allinstalled already)

1. Backend Setup (NestJS)
First, set up and run the backend API server.

Navigate to the Backend Directory:
Open a terminal and go to the backend folder using:

cd tastybites-backend  



Install Dependencies:
Install all the required Node.js packages using: 

npm install



Run the Server:
Start the NestJS server in development mode. (Make sure your MongoDB service is running)

npm run start:dev



The backend API will now be running and listening on http://localhost:3000. Keep this terminal open.

2. Frontend Setup (React)
Next, set up and build the frontend user interface.

Navigate to the Frontend Directory:
Open a new, separate terminal and change to the frontend folder.

cd tastybites-frontend



Install Dependencies:
Install all the required Node.js packages:

npm install



Create Production Build:
This command compiles the React app into a set of static files that can be served by Nginx.

npm run build



This will create a build folder inside tastybites-frontend. This is the folder Nginx will use.




3. Web Server Setup (Nginx)
Finally, configure Nginx to serve the application and fulfill the three-tier architecture requirement.

Simulate Domain (If not already done):
Edit your computer's hosts file to make tastybites.com point to your local machine.

Open your hosts file (C:\Windows\System32\drivers\etc\hosts on Windows) as an Administrator.

Add this line to the end: 127.0.0.1 tastybites.com

Configure Nginx:
Edit your main nginx.conf file (usually at C:\nginx\conf\nginx.conf) and add an include directive inside the http block to point to this project's Nginx configuration. Remember to use your own absolute path.

# Example include line in nginx.conf
http {
    # ... other settings

    include C:/(path to project)/nginx-primer/tastybites.conf;
}

Start or Reload Nginx:
Open a command prompt as an Administrator and run the following command from within your Nginx installation folder (e.g., C:\(path to nginx)\nginx):

# To start Nginx
start nginx

# Or to reload the configuration if it's already running
nginx -s reload

Access the Application:
Open your web browser and navigate to:
http://tastybites.com

The full application should now be running, served by Nginx.