const github = require("@actions/github");

async function main() {
  const octokit = github.getOctokit(process.env.token);
  const context = github.context;

  const { data: files } = await octokit.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.pull_request.number,
  });

  console.log(files);
}

main();
