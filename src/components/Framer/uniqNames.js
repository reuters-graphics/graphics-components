export default (embeds) => {
  const nakedEmbeds = embeds
    .map((e) => e.replace(/\?.+$/, ''))
    .map((e) => e.replace(/index\.html$/, ''))
    .map((e) => e.replace(/^http[s]*:\/\/[\w.]+\.com/, ''));

  // If just one, get the last path part
  if (nakedEmbeds.length === 1) {
    return [
      nakedEmbeds[0]
        .split('/')
        .filter((d) => d)
        .slice(-1)[0],
    ];
  }

  // If many, test each path part for unique-ness
  const test = nakedEmbeds[0];
  let replacementForward = 0;
  for (const i in test.split('/')) {
    const pathPart = test.split('/')[i];
    const notUniq = nakedEmbeds.every((e) => e.split('/')[i] === pathPart);
    if (notUniq) {
      replacementForward += 1;
    } else {
      break;
    }
  }

  if (replacementForward === test.split('/').length) return nakedEmbeds;

  let replacementBackward = 0;
  for (const i in test.split('/').reverse()) {
    const pathPart = test.split('/').reverse()[i];
    const notUniq = nakedEmbeds.every(
      (e) => e.split('/').reverse()[i] === pathPart
    );
    if (notUniq) {
      replacementBackward += 1;
    } else {
      break;
    }
  }

  return nakedEmbeds.map((e) => {
    if (replacementBackward > 0) {
      return e
        .split('/')
        .slice(replacementForward, replacementBackward * -1)
        .join('/');
    }
    return e.split('/').slice(replacementForward).join('/');
  });
};
