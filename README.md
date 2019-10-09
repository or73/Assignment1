# Assignment 1 - Edureka

## FS Operations With Yargs
### Objective
- You need to write in file using fs module and for every write operation you need to create a new file. 
- You must take input from the user as filename and keep saving filenames in one array, in one separate text file.  
- Next time when user again executes the code ask user to provide filename.  Check if file already exists, if yes then ask user to give new filename.  Write simple text “Your are awesome” in every new file.   
- Share the code by pushing it on Github.  

### Applications
Two applications have been developed for this Assignment: 
#### 1. app.js
To run this app write this in the console:    

```
node assignment1.js
```   

#### 2. app1.js - Use yargs
To run this app write this in the console: 

```
node assignment1_1.js --filename="filenameExample.txt"
```
> **filenameExample.txt** should be replaced by your desired filename.

### Application Procedure
The application procedure is:   
1. Validates if the 'filename' folder already exist.  
2. Loads all file names contained in 'filename' folder into an array.  
3. Asks to the user about a new filename.  
4. Validates if the provided filename already exist in the created array, which contains files contained 'filename' folder.   
5. If provided filename already exists:   
   - Then, application asks user to provide a new filename.  
6. If provided filename does not exist:   
   - Then, new filename is added to the file names array, and a new file is created with the provided filename, with content "you are awesome", into the 'filename' folder.    

# Assignment 2 - Edureka   
## Create an Application, Deploy with PM2 & NGINX      
### Objective    
- Create one application using `express` server   
- In the application you need to generate one **GET** endpoint, and in **GET** endpoint you need to render **JSON** data which is present in the separate file   
- Now run application using **PM2**   
- After that run the application through single command using **NGINX**
- You must share codes of both    application and **NGINX** configuration file   
### Application     
1. Install **PM2** this help to run the application in background and will keep it always running: ```
sudo npm install -g pm2```        
2. To start the application using **PM2** and run in background, then input in your console: ```
pm2 start assignment2.js```   
3. Install **NGINX**
4. Modify **NGINX** configuration file (`nginx.conf`), add path of running application over **PM2**:  
```json 
server {
listen      8082;
server_name localhost;

location /json {
    proxy_pass  http://127.0.0.1:7500;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
``` 
> New port for running application is `localhost:8082` instead of `localhost:7500`, reverse proxy id implemented with **NGINX**

