const Administrators = require('./endpoints/administrators');
const Recipients = require('./endpoints/recipients');
const Tasks = require('./endpoints/tasks');
const Request = require('./requestGenerator');

const requestObj = {
  host: 'onfleet.com',
  port: process.env.onFleetPort || '',
  protocol: 'https',
  apiPath: '/api',
  apiVersion: 'v2',
  apiKey: process.env.apiKey || '123456789',
};

/**
 * 
 */
this.administratorResources = async (id, resource, body) => {
  if (body) requestObj.body = body;
  const administrators = new Administrators(id);
  requestObj.options = administrators[resource];
  requestObj.path = tasks[resource].path;

  const request = new Request(requestObj);
  return await request.submitRequest();
}

/**
 * 
 */
this.recipientResources = async (props, resource, body) => {
  if (body) requestObj.body = body;
  const recipients = new Recipients(props);
  requestObj.options = recipients[resource];
  requestObj.path = tasks[resource].path;

  const request = new Request(requestObj);
  return await request.submitRequest();
}

/**
 * 
 */
this.tasksResources = async (id, resource, body) => {
  if (body) requestObj.body = body;
  const tasks = new Tasks(id);
  requestObj.options = tasks[resource];
  requestObj.path = tasks[resource].path;
  
  const request = new Request(requestObj);
  return await request.submitRequest();
}

module.exports = this;
