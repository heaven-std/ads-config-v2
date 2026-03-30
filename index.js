import config from './config.json';

export default {
  async fetch(request) {
      return new Response(JSON.stringify({
        allowed: !!config.packages[pkg]
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(config), {
      headers: { "Content-Type": "application/json" }
    });
};
