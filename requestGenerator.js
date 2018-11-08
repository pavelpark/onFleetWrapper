const axios = require('axios');

module.exports = class Request {
  constructor(props) {
    this.apiKey = `${props.apiKey}@`;
    this.host = props.host;
    this.port = props.port || '';
    this.protocol = props.protocol;
    this.path = props.path;
    this.apiPath = props.apiPath;
    this.apiVersion = `/${props.apiVersion}`;
    this.options = props.options;
    this.body = props.body || null;
    this.query = props.query || null;
  }

  get requestParams() {
    return `?${this.serialize(this.query)}`;
  }

  get requestUrl() {
    let url = `${this.protocol}://${this.apiKey}${this.host}${this.port}${this.apiPath}${this.apiVersion}${this.path}`
    if (this.query) return url + queryString;
    return url;
  }

  serialize(obj) {
    const str = [];
    Object.keys(obj).forEach((key) => {
      str.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    })
    return str.join('&');
  }

  async submitRequest() {
    if (this.body) this.options.body = this.body;

    this.options.url = this.requestUrl;

    try {
      return await axios(this.options);
    } catch(error) {
      console.error(error);
    }
  }
}
