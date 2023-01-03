# Model
The model is served with Fast Api. <br>
All the files and the model is currently stored in the repo https://github.com/adnansherif1/ecode-tristan.git <br>
The image is hosted at adnans22/applient-model on Docker hub <br>
Run the container as follows: <br>
docker run --rm -p 8080:3000 adnans22/applient_model:latest <br>
The container listens on port 3000 <br>

# Server 
The model is served with Flask. <br>
All the files for the server and the frontend can be found at https://github.com/adnansherif1/ecode-tristan.git <br>
The image is hosted at adnans22/applient-server:v1 on Docker hub <br>
Run the container as follows: <br>
docker run --rm -p 5000:5000 -e model=applient-model adnans22/applient_model:latest <br>
The container listens on port 5000 <br>
environment vavriable model should be replaced with the domain name or the IP address of the model server. In the Kubernetes cluster applient-model <br>
resolves to the DNS of the service corresponding to the model deployment. <br>
