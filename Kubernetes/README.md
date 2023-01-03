# setup 
Follow the instructions in CLUSTER_SETUP_INSTRUCTIONS.txt to acquire the necessary aws permissions, create a state store on S3, create the cluster 
with Kops and edit the cluster configurations as required<br>

# applient-model.yml
This file contains the deployment and service associated with the ML model microservice.<br>
It uses the adnans22/applient_model:latest image <br>
Run the following command to deploy the model<br>
kubectl apply -f applient-model.yml<br>

# applient-server.yml
This file contians the service and deployment corresponding to the web server microservice<br>
It uses the adnans22/applient-server:v1 image <br>
Note that the environment variable model is set to applient-model. This resolves to the DNS of the model service from the model deployment.<br>
Run the following command to deploy the model<br>
kubectl apply -f applient-server.yml<br>


To expose the server service to the internet run:<br>
kubectl port-forward service/applient-server 3000:5000 --address 0.0.0.0<br>
Note this is a bad practice (Next step is to setup the nginx ingress controller and an AWS elastic loadbalancer to receive requests)<br>
