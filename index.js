import config from './config.json';

export default {
  async fetch(request) {
     return new Response(JSON.stringify(config), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      }
    });
};
