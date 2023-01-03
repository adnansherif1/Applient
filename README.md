# Applient Job Application Software.

Youtube product demonstration: https://www.youtube.com/watch?v=CJtjjkdpU5M&t=79s <br>
<b> Note: The extension is no longer active on the chrome webstore </b>

# Features:

<b> Job Autofilling: </b> <br> Autofill Job Applications on company websites simply by clicking the chrome extension icon. <br>
<b> Dynamic resume Generation:</b> <br> Custom resume generation with desired experiences, experience descriptions, and skills with the click of a button. <br>
<b> Application tracking: </b> <br> Automatically track applications (Company, title, description, and link) from popular job boards (linkedin, indeed, google job board). <br>
<b> Job search: </b> <br> Advanced search customization to find the most fitting jobs first on popular job boards (Linkedin, Indeeed, Google Job Board) <br>

# Docker 
Docker folder contains two Dockerfiles corresponding to the web server and Ml model microservices. The corresponding images 
adnans22/applient-model:latest and adnans22/applient-server are publicly available on Docker hub

# Kubernetes cluster setup instructions are found in Kubernetes/CLUSTER_SETUP_INSTRUCTIONS.txt. The folder also contains the deployment and service files 
for the server and the model. It also contains instructions on deploying the application in the Aws Kubernetes cluster.


# Architecture High Level: 
<b> Chrome Extension: </b><br> Sends preprocessed html data to the backend and uses the output of the ML Model to fill job applications, sends data back to the backend for application tracking, and constructs advanced queries on popular job boards for Job search. <br>
<b> MLModel: </b><br> Receives cleaned html data, pass text corresponding to each input box through an NLP model(TFIDF vectorizer + MLP) to map each input box to the relevant field, attach the user specific data to each input box and send back to the chrome extension. <br>
<b> FrontEnd Website: </b> <br> Website is used to create and edit information necessary for all the features. <br>
