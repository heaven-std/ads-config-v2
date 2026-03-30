import config from './config.js';

export default {
  async fetch() {
    return new Response(JSON.stringify(config), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      }
    });
  }
};
