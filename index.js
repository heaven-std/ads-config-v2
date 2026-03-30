import config from './config.json';

export default {
  async fetch(request) {

    const url = new URL(request.url);
    const pkg = url.searchParams.get("pkg");

    if (pkg) {
      return new Response(JSON.stringify({
        allowed: !!config.packages[pkg]
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify(config), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
