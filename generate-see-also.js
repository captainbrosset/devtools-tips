// Generate a list of see-also tips for each tip in the /src/tips/en/ folder.
// This is done by using retext and the retext-keywords plugin to extract keywords and keyphrases from each tip.
// The resulting data is stored in /src/data/SEEALSO.json so that the 11ty build can use it.

const fs = require('fs').promises;
const path = require('path');
const { markdownToTxt } = require('markdown-to-txt');

let retextKeywords = null;
let retext = null;
let retextPos = null;
let toString = null;

// This controls the maximum number of tips that will be shown in the "See also" section.
const MAX_TIPS = 4;

// This controls the minimum number of words/phrases that need to be in common for a tip to be shown in the "See also" section.
// The higher the number, the fewer tips will be shown in the "See also" section, and in some cases, no tips will be shown.
// Err on the side of showing too many tips, rather than too few. Even if some are not strictly relevant, it's better than showing none
// because these are just tips, and people may be interested in learning more even if it's not strictly relevant.
const MIN_COMMON_KEYS = 3;

function convertTipToPlainText(tipContent) {
  const text = markdownToTxt(tipContent).toLocaleLowerCase();
  const lines = text.split('\n');

  const title = lines.find(line => line.startsWith('title: ')).substring(7).toLocaleLowerCase();
  const content = lines.filter(line => {
    return !line.startsWith('authors: ') &&
      !line.startsWith('date: ') &&
      !line.startsWith('tags: ') &&
      !line.startsWith('title: ') &&
      !line.startsWith('istweet: ');
  }).join('\n');

  return `${title}\n${content}`;
}

async function getKeywords(text) {
  if (!retextKeywords) {
    retext = (await import('retext')).retext;
    retextPos = (await import('retext-pos')).default;
    retextKeywords = (await import('retext-keywords')).default;
    toString = (await import('nlcst-to-string')).toString;
  }

  const file = await retext().use(retextPos).use(retextKeywords).process(text);
  return {
    words: file.data.keywords.map((keyword) => {
      return toString(keyword.matches[0].node);
    }),
    phrases: file.data.keyphrases.map((phrase) => {
      return phrase.matches[0].nodes.map((d) => toString(d)).join('');
    })
  };
}

async function getData() {
  const tipsDir = path.join(__dirname, 'src', 'tips', 'en');
  const tipFiles = await fs.readdir(tipsDir);

  const data = [];

  for (const tipFile of tipFiles) {
    const tipContent = await fs.readFile(path.join(tipsDir, tipFile), 'utf8');
    const text = convertTipToPlainText(tipContent);
    const keywords = await getKeywords(text);

    // console.log("--------------------", tipFile);
    // console.log("words: ", keywords.words.join(', '));
    // console.log("phrases: ", keywords.phrases.join(', '));

    data.push({
      file: tipFile,
      keys: [...keywords.words, ...keywords.phrases],
      seeAlso: []
    });
  }

  // Now, for each tip, we need to find the 3 other tips that have the most words and/or phrases in common.
  for (const tip of data) {
    const seeAlso = [];

    for (const otherTip of data) {
      if (otherTip.file === tip.file) {
        continue;
      }

      const keysInCommon = tip.keys.filter(word => otherTip.keys.includes(word));

      if (keysInCommon.length > MIN_COMMON_KEYS) {
        seeAlso.push({
          file: otherTip.file,
          keysInCommon
        });
      }
    }

    // Sort by the number of keysInCommon, from most to least.
    seeAlso.sort((a, b) => b.keysInCommon.length - a.keysInCommon.length);

    // console.log(tip.file);
    // console.log(seeAlso);

    tip.seeAlso = seeAlso.slice(0, MAX_TIPS).map(d => d.file);
  }

  return data
}

async function main() {
  const data = await getData();
  await fs.writeFile(path.join(__dirname, 'src', 'data', 'SEEALSO.json'), JSON.stringify(data, null, 2));
}

main();