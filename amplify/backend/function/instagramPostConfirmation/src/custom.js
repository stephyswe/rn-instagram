/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const TableName = `User-${AppsyncID}-${env}`; // TableName-AppsyncID-env

const userExists = async id => {
  const params = {
    TableName,
    Key: id,
  };

  try {
    const response = await docClient.get(params).promise();
    return !!response?.Item;
  } catch (e) {
    return false;
  }
};

const saveUser = async user => {
  const date = new Date();
  const dateStr = date.toISOString();
  // TODO: remove? const timestamp = date.getTime();

  const Item = {
    ...user,
    __typename: 'User',
    createdAt: dateStr,
    updatedAt: dateStr,
  };
  const params = {
    TableName,
    Item,
  };

  try {
    await docClient.put(params).promise();
  } catch (e) {
    console.log(e);
  }
};

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  console.log('hey lamba');
  console.log(event);

  if (!event?.request?.userAttributes) {
    console.log('No user data available');
    return;
  }

  // check if the user already exists
  const {sub, name, email} = event.request.userAttributes; // {sub, email, name}

  // if not, save the user to database
  const newUser = {
    id: sub,
    owner: sub,
    name,
    email,
    nofPosts: 0,
    nofFollowers: 0,
    nofFollowings: 0,
  };

  // check if the user already exists
  if (!(await userExists(newUser.id))) {
    // if not, save the user to database.
    await saveUser(newUser);
    console.log(`User ${newUser.id} has been saved to the database`);
  } else {
    console.log(`User ${newUser.id} already exists`);
  }

  return event;
};
