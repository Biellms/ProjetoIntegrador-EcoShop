## About the Application 

This application uses Maven as the build tool and the current LTS version of Java, 16. I hope to add more functionality to this application in the future but 
for now this project uses the following dependencies:

- Spring Web
- Spring Data JDBC
- Spring Validation
- Spring Security
- PostgreSQL Database
- Swagger
- Commons Codec

## Running the application

You can run this application from your favorite IDE or by running the following command: 

```bash
./mvnw spring-boot:run
``` 
### Local Development

When working on this application locally you will need MySQL installed. Runs the app in the development mode.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### Railway

Bring your code, we'll handle the rest. Made for any language, for projects big and small. [Railway](https://railway.app/) 
is the cloud that takes the complexity out of shipping software.

Create a new empty project in Railway and start by creating a PostgreSQL database. Once you have that created you can create
a new project from GitHub. You can use the following environment variables based on the database you just created. 

```properties
spring_profiles_active=prod
PROD_DB_HOST=HOST_HERE
PROD_DB_PORT=POST_HERE
PROD_DB_NAME=railway
PROD_DB_PASSWORD=PASSWORD_HERE
PROD_DB_USERNAME=postgres
```

You don't need GitHub Actions or any type of pipeline for this setup because Railway handles this for you. Simply push your code to GitHub
and a new build and deploy will be triggered. If you want to disable this functionality you can from the settings of your project
on Railway.

#### **Fonte de estudos:** [Dan Vega - Spring Boot Railway: How to deploy a Spring Boot application to Railway](https://www.youtube.com/watch?v=5sVxvF47dcU&list=PLKMNf0Y0EDCRuibMT9XBMHQVNVv5MbbLy&index=17)