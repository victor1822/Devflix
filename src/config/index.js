const API_BASE_URL = process.env.REACT_APP_API_URL;

const URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080' : API_BASE_URL;

export default {
  URL,
};
