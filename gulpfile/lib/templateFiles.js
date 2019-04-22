/**
 * Template Files
 * Pick the right filetype for the Watch Tasks
 */
import meow from '../../config.json';

const templateFiles = () => {
  if (meow.template.compiler) {
    return meow.src.template + '**/*.twig';
  } else {
    return meow.src.structure + '**/**';
  }
};

module.exports = templateFiles;
