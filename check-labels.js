import { execSync } from 'child_process';
// import { Version3Client } from 'jira.js';

console.log(JSON.stringify(process.env));

const branchName = process.env['GITHUB_REF_NAME'];
const ticketName = branchName.split('/')[0];

console.log(branchName, ticketName);
const getLabelsForIssue = async (issue) =>
  (await client.issues.getIssue({ issueIdOrKey: 'GLOBAL-174' }))?.fields
    ?.labels;

// const client = new Version3Client({
//   host: 'https://commmune.atlassian.net',
//   authentication: {
//     basic: {
//       email: 'ivanov.aleksei@commmune.jp',
//     },
//   },
// });

// console.log(await getLabelsForIssue(ticketName));
