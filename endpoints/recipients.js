
module.exports = class RecipientOptions {
  constructor(props) {
    this.recipientId = props.recipientId || null;
    this.recipientName = props.recipientName || null;
    this.recipientPhone = props.recipientPhone || null;
    this.options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
  };

  get createRecipient() { 
    this.options.path = '/recipients';
    this.options.method = 'POST';
    return this.options;
  }

  get updateRecipient() {
    this.options.path = `/recipients/${this.recipientId}`;
    this.options.method = 'PUT';
    return this.options;
  }

  get findRecipientByName() {
    this.options.path = `/recipients/name/${this.recipientName}`;
    this.options.method = 'GET'
    return this.options;
  }

  get findRecipientByPhone() {
    this.options.path = `/recipients/phone/${recipientPhone}`;
    this.options.method = 'GET'
    return this.options;
  }

  get retrieveRecipientById() {
    this.options.path = `/recipients/${recipientId}`;
    this.options.method = 'GET';
    return this.options;
  }
};

