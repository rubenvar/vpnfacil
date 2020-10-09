import fetch from 'node-fetch';

const homePage =
  '<url><loc>https://vpnfacil.com/</loc><priority>1</priority></url>';
const blogPage =
  '<url><loc>https://vpnfacil.com/guias/</loc><priority>0.8</priority></url>';

const render = (posts, vpns) => `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${homePage}
    ${blogPage}
    ${posts
      .map(
        post => `<url>
                 <loc>${`https://vpnfacil.com/guias/${post.slug}/`}</loc>
                 <lastmod>${post.date}</lastmod>
                 <priority>0.6</priority>
                </url>`
      )
      .join('')}
    ${vpns
      .map(
        vpn => `<url>
                  <loc>${`https://vpnfacil.com/vpn/${vpn.slug}/`}</loc>
                  <priority>0.7</priority>
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
  const allVpns = await fetch(process.env.ENDPOINT);
  // TODO checkthat there is actually something in the response
  const posts = await allPosts.json();
  const vpns = await allVpns.json();
  res.setHeader('Content-Type', 'application/xml');
  const xml = render(posts, vpns.body);
  res.end(xml);
}
