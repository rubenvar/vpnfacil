import fetch from 'node-fetch';

const homePage =
  '<url><loc>https://vpnfacil.com</loc><priority>1</priority></url>';
const blogPage =
  '<url><loc>https://vpnfacil.com/guias</loc><priority>0.8</priority></url>';

const render = posts => `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${homePage}
    ${blogPage}
    ${posts
      .map(
        post => `<url>
                 <loc>${`https://vpnfacil.com/guias/${post.slug}`}</loc>
                 <lastmod>${post.date}</lastmod>
                 <priority>0.6</priority>
                </url>`
      )
      .join('')}
    </urlset>
`;

export async function get(req, res) {
  const allPosts = await fetch(
    process.env.NODE_ENV === 'development'
      ? `http://localhost:3000/guias.json`
      : 'https://vpnfacil.com/guias.json',
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const result = await allPosts.json();
  res.setHeader('Content-Type', 'application/xml');
  const xml = render(result);
  res.end(xml);
}
