const { administratorResources, recipientResources, tasksResources } = require('./index');

const allTasks = tasksResources('12345', 'retrieveAllTasks')
.then((res) => {
  console.log('BODY', res.response);
});
