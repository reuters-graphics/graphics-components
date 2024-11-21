const prompts = require('prompts');
const changeCase = require('change-case');
const path = require('path');
const fs = require('fs-extra');
const glob = require('tiny-glob');
const { cyan, green, bold } = require('kleur');

const ROOT = path.resolve(__dirname, '../../');
const LIB = path.join(ROOT, 'src/components');
const TEMPLATE = path.join(__dirname, 'template');

const makeNewComponent = async () => {
  const { name, folder } = await prompts([
    {
      type: 'text',
      name: 'name',
      message: 'What should we call your new component, e.g., ImagePack?',
    },
    {
      type: 'text',
      name: 'folder',
      message: 'What folder should we put it in, e.g., Graphics?',
      initial: 'Graphics',
    },
  ]);

  if (!name || !folder) return;

  const componentName = changeCase.pascalCase(name);
  const componentNameSlug = componentName.toLowerCase();
  const componentFolder = folder;
  const componentFolderSlug = folder.toLowerCase().replace(' ', '-');
  const componentDir = path.join(LIB, componentName);

  if (fs.existsSync(componentDir)) {
    console.log('Oops! That component already exists. Try another name?');
    return;
  }

  fs.mkdirSync(componentDir);

  const files = await glob('**/*', { cwd: TEMPLATE, filesOnly: true });

  for (const file of files) {
    const writePath = path.join(
      LIB,
      file.replace(/YourComponent/g, componentName)
    );

    fs.ensureDirSync(path.dirname(writePath));

    if (path.extname(file) === '.jpg') {
      fs.copyFileSync(path.join(TEMPLATE, file), writePath);
      continue;
    } else {
      const content = fs.readFileSync(path.join(TEMPLATE, file), 'utf8');
      const writeContent = content
        .replace(/YourComponentSlug/g, componentNameSlug)
        .replace(/YourComponent/g, componentName)
        .replace(/ComponentFolderSlug/g, componentFolderSlug)
        .replace(/ComponentFolder/g, componentFolder);
      fs.writeFileSync(writePath, writeContent);
    }
  }

  console.log(
    `${green('✔')} ${bold('Your component is ready at:')}\n📁 ${cyan(`src/components/${bold(componentName)}/${componentName}.svelte`)}`
  );
};

makeNewComponent();
