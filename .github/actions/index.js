import { Version3Client } from 'jira.js';

import core from '@actions/core';
import github from '@actions/github';

const branchName = process.env['GITHUB_HEAD_REF'];
const ticketName = branchName.split('/')[0];

console.log(
  JSON.stringify({ branch: branchName, ticket: ticketName }, null, 2),
);
const getLabelsForIssue = async (issue) =>
  (await client.issues.getIssue({ issueIdOrKey: issue }))?.fields?.labels;

const client = new Version3Client({
  host: 'https://commmune.atlassian.net',
  authentication: {
    basic: {
      email: 'ivanov.aleksei@commmune.jp',
      apiToken:
        'ATATT3xFfGF0yK3hDE7FtLV-r054G_8sBBenVnI5cC2spm15QSl6RibbiA2B7ZV90pCrr5flzkC8gCCIhCkETyXoAdqehJGuQl96k5s9qQIdT4MmzUoh8-g83LXVzAph20l1e1hyUrXqyiXPPchHWAHCoqMscT81JI6IxKIE7IwUO7ByVkUG01I=212B62F1',
    },
  },
});

const ticketLabels = await getLabelsForIssue(ticketName);
if (!ticketLabels.includes('self-check:approved')) {
  core.setFailed('Self-check is not completed!');
}
