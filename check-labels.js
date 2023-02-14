import { execSync } from 'child_process';
// import { Version3Client } from 'jira.js';

const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString();
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
//       apiToken:
//         'ATATT3xFfGF0OUUJ1tDX9QlDUTWA6joW_-Vw1YWHbG0Pbd03r1TnfYImfSU7kYEjF-4YIb5A6Pej73DUsnZPo6xQ7xZ9nLMgMcs5QdPdy_3iHaql6TJHdxMPnRZ7ZpGRy9ysi4PbPS7Fq4Ef4bUSdVrX41KuoUOW6NIseLYCTczMzJtedBeF8Ts=1D14E538',
//     },
//   },
// });

// console.log(await getLabelsForIssue(ticketName));
