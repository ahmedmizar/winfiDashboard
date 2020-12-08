// const ENDPOINT = "https://jsonplaceholder.typicode.com/";
const ENDPOINT = "http://127.0.0.1:8000/api/v1/";

const TIMEOUT = 120000;

export default class ConfigClass {

    static get getEndpoint() {
        return ENDPOINT;
    }

    static get getTimeout() {
        return TIMEOUT;
    }


}