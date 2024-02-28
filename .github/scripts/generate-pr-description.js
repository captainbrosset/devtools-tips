const github = require('@actions/github');

async function main() {
  // const octokit = github.getOctokit(process.env.token);

  // Retrieve the list of md files that the PR is modifying
  // and that's being retrieved from the github action.
  const files = github.context.payload.pull_request.files;
  console.log(files);

  // Retrieve the command line arguments that were passed to the action.
  const args = process.argv.slice(2);
  console.log(args);
}

main();
