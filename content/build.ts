import marked from 'marked';
import glob from 'glob';
import fs from 'fs/promises';
import fm, { FrontMatterResult } from 'front-matter';
import path from 'path';
import { pascalCase, capitalCase } from 'change-case';

const root = 'content/';
const routeRoot = 'src/routes';

interface FMInterface {
  title: string;
  description: string;
  slug: string;
  section?: string;
  tags?: string;
}

// options is optional
glob(`${root}**/*.md`, {}, async function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  
  const sections: {[key: string]: ViewAndViewModel[]} = {};


  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');

    const fmContent = fm<FMInterface>(content, {allowUnsafe: false});

    const prepared = prepareViewAndViewModel(file, fmContent);
    if (sections[prepared.section] === undefined)  {
      sections[prepared.section] = [];
    }
    sections[prepared.section].push(prepared);
  }

  for (const section in sections) {
    const json: {
      name: string,
      load: string,
      description: string,
      badges: string[]
    }[] = [];

    for (const prepared of sections[section]) {
      json.push({
        name: prepared.name,
        load: prepared.slug,
        description: prepared.description,
        badges: prepared.badges
      });
      fs.writeFile(routeRoot + prepared.filepath + '/' + section + '.json', JSON.stringify(json, null, 2));
      fs.writeFile(routeRoot + prepared.filepath + '/' + prepared.slug + '.ts', prepared.viewModel);
      fs.writeFile(routeRoot + prepared.filepath + '/' + prepared.slug + '.html', prepared.view);
    }

  }
})

interface ViewAndViewModel {
  filepath: string;
  slug: string;
  section: string;
  classname: string;
  view: string;
  viewModel: string;
  badges: string[],
  description: string;
  name: string,
}

function prepareViewAndViewModel(file: string, frontMatterContent: FrontMatterResult<FMInterface>): ViewAndViewModel {
  const filepath = frontMatterContent.attributes.section ? `/${frontMatterContent.attributes.section}` : '';
  const slug = frontMatterContent.attributes.slug ? frontMatterContent.attributes.slug : path.basename(file).replace(path.extname(file), '') + '-' + 'page';
  const classname = pascalCase(slug);
  const viewHead = frontMatterContent.attributes.section ? `<ecos-section>
  <ecos-breadcrumb>
    <ecos-breadcrumb-item load="../${frontMatterContent.attributes.section}-list">${capitalCase(frontMatterContent.attributes.section)}</ecos-breadcrumb-item>
    <ecos-breadcrumb-item>${frontMatterContent.attributes.title}</ecos-breadcrumb-item>
  </ecos-breadcrumb>
</ecos-section>` : '';
  const view = viewHead + "\n<ecos-section>" + marked(frontMatterContent.body) + "</ecos-section>";
  const viewModel = `export class ${classname} {}`;
  const name = frontMatterContent.attributes.title || capitalCase(slug);
  const description = frontMatterContent.attributes.description || '';
  const badges = (frontMatterContent.attributes.tags || '').split(',').map(s => s.trim());
  return {
    filepath, slug, classname, view, viewModel, name, description, badges, section: frontMatterContent.attributes.section || ''
  };

} 