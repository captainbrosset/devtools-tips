// Generate a list of see-also tips for each tip in the /src/tips/en/ folder.
//
// This is done by using retext and the retext-keywords plugin to extract keywords and keyphrases from each tip.
// The resulting data is stored in /src/data/SEEALSO.json so that the 11ty build can use it.
//
// This script is only executed when env=prod so as not to slow down the dev build and cause infinite reload loops
// when using "npm run watch". This means it only runs when the github workflow runs.
// Run this script manually with "npm run generate-see-also.js" to test the see-also sections locally.

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
const MIN_COMMON_KEYS = 2;

function prepareTipData(tipFile, tipContent) {
  const text = markdownToTxt(tipContent);
  const lines = text.split('\n');

  const title = lines.find(line => line.startsWith('title: ')).substring(7);
  const content = lines.filter(line => {
    return !line.startsWith('authors: ') &&
      !line.startsWith('date: ') &&
      !line.startsWith('tags: ') &&
      !line.startsWith('title: ') &&
      !line.startsWith('istweet: ');
  }).join('\n').toLocaleLowerCase();

  return {
    title,
    indexableContent: `${title.toLocaleLowerCase()}\n${content}`,
    link: `/tips/en/${tipFile.substring(0, tipFile.length - 3)}`
  };
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

  const tipsWithKeys = [];

  for (const tipFile of tipFiles) {
    const tipContent = await fs.readFile(path.join(tipsDir, tipFile), 'utf8');
    const {title, indexableContent, link} = prepareTipData(tipFile, tipContent);
    const keywords = await getKeywords(indexableContent);

    // console.log("--------------------", tipFile);
    // console.log("words: ", keywords.words.join(', '));
    // console.log("phrases: ", keywords.phrases.join(', '));

    tipsWithKeys.push({
      title,
      link,
      file: tipFile,
      keys: [...keywords.words, ...keywords.phrases]
    });
  }

  const data = {};

  // Now, for each tip, we need to find the other tips that have the most words and/or phrases in common.
  for (const tip of tipsWithKeys) {
    const seeAlso = [];

    for (const otherTip of tipsWithKeys) {
      if (otherTip.file === tip.file) {
        continue;
      }

      const keysInCommon = tip.keys.filter(word => otherTip.keys.includes(word));

      if (keysInCommon.length > MIN_COMMON_KEYS) {
        seeAlso.push({
          tip: otherTip,
          keysInCommon
        });
      }
    }

    // Sort by the number of keysInCommon, from most to least.
    seeAlso.sort((a, b) => b.keysInCommon.length - a.keysInCommon.length);

    // console.log(tip.file);
    // console.log(seeAlso);

    data[tip.file] = seeAlso.slice(0, MAX_TIPS).map(s => {
      return {
        title: s.tip.title,
        link: s.tip.link
      };
    });
  }

  return data
}

async function main() {
  const data = await getData();
  await fs.writeFile(path.join(__dirname, 'src', 'data', 'SEEALSO.json'), JSON.stringify(data, null, 2));
}

main();