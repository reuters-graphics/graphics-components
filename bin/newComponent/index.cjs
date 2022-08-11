const prompts = require('prompts');
const { pascalCase } = require('change-case');
const path = require('path');
const fs = require('fs-extra');
const glob = require('tiny-glob');
const { cyan, green, bold } = require('kleur');

const ROOT = path.resolve(__dirname, '../../');
const LIB = path.join(ROOT, 'src/components');
const TEMPLATE = path.join(__dirname, 'template');

const makeNewComponent = async() => {
  const{ name } = await prompts({
    type: 'text',
    name: 'name',
    message: 'What should we call your new component, e.g., ImagePack?',
  });

  if (!name) return;

  const componentName = pascalCase(name);
  const componentDir = path.join(LIB, componentName);

  if(fs.existsSync(componentDir)) {
    console.log('Oops! That component already exists. Try another name?');
    return;
  }

  fs.mkdirSync(componentDir);
  
  const files = await glob('**/*', { cwd: TEMPLATE, filesOnly: true });

  for (const file of files) {
    const content = fs.readFileSync(path.join(TEMPLATE, file), 'utf8');
    const writeContent = content.replace(/YourComponent/g, componentName);
    const writePath = path.join(LIB, file.replace(/YourComponent/g, componentName));
    fs.ensureDirSync(path.dirname(writePath));
    fs.writeFileSync(writePath, writeContent);
  }

  console.log(`${green('✔')} ${bold('Your component is ready at:')}\n📁 ${cyan(`src/component/${bold(componentName)}/${componentName}.svelte`)}`);
};

makeNewComponent();