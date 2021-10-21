# HTML-form-using-Lambda-and-API-Gateway

- Sign in to your AWS account there either open console through the classroom in which credits are there or using some free credits by AWS Academy
- Go to DyanamoDB and create a table in which you want to store the data
- While creating a table add any one attribute as the partition key(primary key)
- Go to IAM Management >Roles and add a new role in that use Lambda as a use case
- It will allow Lambda functions to call AWS services on your behalf
- Select AmazonAPIGatewayAdministrator and AmaozonDynamoDBFullAccess
- Click next and review the role
- Thereafter go to Lamda >Functions and create a new function
- Here I have written my function in python so I have selected Python 3.8
- Add a role to Lambda function and create a function
- After doing it go to API Gateway and build a REST API in which we can gain control over requests and responses along with API Management Capabilities
- I wanted to store data in a database so I have used put-data
- Now after its created go to Actions >Create Method and in that add PUT
- Go to Actions >Deploy API and add a deployment stage
- Now click on Stages and go to 'v1', there in the PUT section copy the invoke URL

## For for refrence kindly check the below link
https://medium.com/@jhanvi-shah/html-form-using-lambda-and-api-gateway-71a24a178c0a
