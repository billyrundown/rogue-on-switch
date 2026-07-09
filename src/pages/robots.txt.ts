import type { APIRoute } from 'astro'; export const GET: APIRoute = () => new Response('User-agent: *\nAllow: /\nSitemap: https://rogueonswitch.com/sitemap-index.xml\n');
