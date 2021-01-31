#! /usr/bin/env node

const commander = require('commander');
const program = new commander.Command();
const inquirer = require('inquirer');
const {exec} = require('child_process');
const {removeLocalBranches} = require('./Classes/GitManager');

program.version('1.0.0')
    .description('Git Tool CLI is a small CLI helper for managing your remotes and local repositories');

program.command('clear-local')
    .description('clear all your local repositories except master')
    .action(() => {
        exec('git rev-parse --abbrev-ref HEAD', (error, stdout, stderr) => {
            if (stdout !== 'master') {
                exec("git checkout master", (error, stdout, stderr) => {});
            }
            removeLocalBranches();
        });
    });

program.parse(process.argv);
