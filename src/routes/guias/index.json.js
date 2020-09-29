import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

function isDir(p) {
  try {
    const stat = fs.lstatSync(p);
    return stat.isDirectory();
  } catch (e) {
    return false;
  }
  // lstatSync throws an error if path doesn't exist
}

const route = 'src/routes/guias';
const separator = '<!-- more -->';
const posts = fs
  .readdirSync(route)
  .filter(file => isDir(`${route}/${file}`))
  .map((file, index) => {
    const post = fs.readFileSync(
      path.resolve(route, `${file}/index.svx`),
      'utf-8'
    );
    const { data, content } = grayMatter(post);
    let excerpt = '';
    if (content.indexOf(separator) !== -1) {
      [excerpt] = content.split(separator);
    }
    return {
      ...data,
      slug: file,
      excerpt,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map((post, index) => ({ ...post, index }));

const contents = JSON.stringify(
  posts.map(post => ({
    title: post.title,
    date: post.title,
    index: post.index,
    slug: post.slug,
    excerpt: post.excerpt,
    html: post.html,
  }))
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
