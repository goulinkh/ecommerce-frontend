/* eslint-disable @typescript-eslint/no-var-requires */
const { writeFileSync } = require('fs');
const globby = require('globby');
const prettier = require('prettier');

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig(
    await prettier.resolveConfigFile()
  );

  // Ignore Nextjs specific files (e.g., _app.js, _document.js)
  const pages = await globby([
    'pages/**/*{.jsx,.tsx}',
    '!pages/_*',
    '!pages/api',
  ]);
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages', '')
            .replace('.jsx', '')
            .replace('.tsx', '');
          const route = path === '/index' ? '' : path;

          return `
                  <url>
                      <loc>${`https://yoursitehere.com${route}`}</loc>
                  </url>
              `;
        })
        .join('')}
  </urlset>
  `;
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });
  writeFileSync('public/sitemap.xml', formatted);
}

generateSitemap();
