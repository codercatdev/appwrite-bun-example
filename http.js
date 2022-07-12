// http.js
export default {
  port: 3101,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
};
