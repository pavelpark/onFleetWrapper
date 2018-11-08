module.exports = class Tasks {
  constructor(taskId) {
    this.taskId = taskId;
    this.options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
  }

  get createTask() {
    this.options.path = '/tasks';
    this.options.method = 'POST';
    return this.options;
  }

  get retrieveAllTasks() {
    this.options.path = '/tasks/all';
    this.options.method = 'GET';
    return this.options;
  }

  get updateTask() { 
    this.options.path = `/tasks/${this.taskId}`;
    this.options.method = 'PUT';
    return this.options;
  }

  get completeTask() {
    this.options.path = `/tasks/${this.taskId}/complete`;
    this.options.method = 'POST';
    return this.options;
  }

  get deleteTask() {
    this.options.path =  `/tasks/${this.taskId}`;
    this.options.method = 'DELETE';
    return this.options;
  }
}