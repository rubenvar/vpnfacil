// this syntax for import available thanks to 'rollup-plugin-glob'
import all from '../../content/*.md';

export default all
  .map(post => ({ ...post, html: post.html.replace(/^\t{3}/gm, '') }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));
