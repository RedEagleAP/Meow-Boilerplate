/**
 * Template Files
 * Pick the right filetype for the Watch Tasks
 */
import kc from '../../config.json'

const templateFiles = () => {
  if (kc.template.compiler) {
    return kc.src.template + '**/*.twig'
  } else {
    return kc.src.structure + '**/**'
  }
}

module.exports = templateFiles
