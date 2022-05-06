const fs = require('fs').promises;
const exec = require('child_process').exec;

function getGitCommitDate(file) {
  return new Promise(r => {
    const child = exec(`git log -1 --format=%cd ${file}`);
    child.stdout.on('data', function (data) {
      const date = new Date(data.trim());
      // Format date to YYY-MM-DD
      const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      r(formattedDate);
    });
  });
}

function getGitCommitAuthors(file) {
  return new Promise(r => {
    const child = exec(`git log --format=%h-%an ${file}`);
    child.stdout.on('data', function (data) {
      r(data.trim());
    });
  });
}

async function main() {
  const files = await fs.readdir('./');

  // Replace the date. DONE
  for (const file of files) {
    const date = await getGitCommitDate(file);

    // Replace 'date: date' in file with 'date: actualdate' in the file
    const content = await fs.readFile(file, 'utf8');
    // Check if content contains 'date: date'
    if (content.includes('date: date')) {
      console.log('not processed yet', file);
      // const newContent = content.replace('date: date', `date: ${date}`);
      // await fs.writeFile(file, newContent);
    }
  }

  // Replace the authors.
  // for (const file of files) {
  //   const authors = await getGitCommitAuthors(file);
  //   console.log(file, authors);
  // }
}

main();
