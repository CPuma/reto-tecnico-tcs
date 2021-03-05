const AWS = require('aws-sdk');

let dynamoDB 

const IS_OFFLINE = process.env.IS_OFFLINE 

if(IS_OFFLINE){
  dynamoDB = new AWS.DynamoDB.DocumentClient({
    region:'localhost',
    endpoint:'http://localhost:8000'
  });
}else{
  dynamoDB = new AWS.DynamoDB.DocumentClient();
}

export  {dynamoDB};
