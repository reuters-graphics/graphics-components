/**
 * Use custom source code in the "Show code" pull down.
 * @param {object} source Source code object, where key is the language of the source code and value is the code string.
 * @param {object} otherOptions Other props object options, allowing chaining with other methods like withStoryDocs
 * @returns props object including parameters
 */
export const withSource = (source, otherOptions = {}) => {
  const language = Object.keys(source)[0];
  const code = source[language];
  const docs = {
    ...otherOptions?.parameters?.docs,
    source: { code, language },
  };
  const parameters = { docs };
  return { parameters };
};

/**
 * Add custom documentation to a story.
 * @param {string} storyDocs Markdown string of docs
 * @param {object} otherOptions Other props object options, allowing chaining with other methods like withSource
 * @returns props object including parameters
 */
export const withStoryDocs = (storyDocs, otherOptions = {}) => {
  const docs = {
    ...otherOptions?.parameters?.docs,
    description: { story: storyDocs },
  };
  const parameters = { docs };
  return { parameters };
};

/**
 * Add custom documentation to the top of the component docs page.
 * @param {string} componentDocs Markdown string of docs
 * @param {object} otherOptions Other props object options, allowing chaining with other methods like withSource
 * @returns props object including parameters
 */
export const withComponentDocs = (componentDocs, otherOptions = {}) => {
  const docs = {
    ...otherOptions?.parameters?.docs,
    description: { component: componentDocs },
  };
  const parameters = { docs };
  return { parameters };
};
