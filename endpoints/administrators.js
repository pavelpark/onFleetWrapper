
module.exports = class Administrators {
  constructor(adminId) {
    this.adminId = adminId;
    this.options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
  }

  get createAdministrator() {
    this.options.path = '/admins';
    this.options.method = 'POST';
    return this.options;
  }

  get getAllAdministrators() {
    this.options.path = '/admins';
    this.options.method = 'GET';
    return this.options;
  }

  get updateAdministrator() {
    this.options.path = `/admins/${this.adminId}`;
    this.options.method = 'PUT';
    return this.options;
  }
  get deleteAdministrator() {
    this.options.path = `/admins/${this.adminId}`;
    this.options.method = 'DELETE';
    return this.options;
  }
};
