# Model
The model is served with Fast Api.
All the files and the model is currently stored in the repo https://github.com/adnansherif1/ecode-tristan.git
The image is hosted at adnans22/applient-model on Docker hub
Run the container as follows:
docker run --rm -p 8080:3000 adnans22/applient_model:latest
The container listens on port 3000

# Server 
The model is served with Flask.
All the files for the server and the frontend can be found at https://github.com/adnansherif1/ecode-tristan.git
The image is hosted at adnans22/applient-server:v1 on Docker hub
Run the container as follows:
docker run --rm -p 5000:5000 -e model=applient-model adnans22/applient_model:latest
The container listens on port 5000
environment vavriable model should be replaced with the domain name or the IP address of the model server. In the Kubernetes cluster applient-model
resolves to the DNS of the service corresponding to the model deployment.
