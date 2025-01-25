#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');

const program = new Command();

const organizeFiles = async (directoryPath) => {
    const chalk = (await import('chalk')).default;

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(chalk.red('Unable to read directory:'), err);
            return;
        }

        files.forEach(file => {
            const ext = path.extname(file).slice(1);
            const extDir = path.join(directoryPath, ext);

            if (!fs.existsSync(extDir)) {
                fs.mkdirSync(extDir);
            }

            const oldPath = path.join(directoryPath, file);
            const newPath = path.join(extDir, file);

            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    console.error(chalk.red('Error moving file:'), err);
                }
            });
        });

        console.log(chalk.green('Files organized successfully!'));
    });
};

const promptForDirectory = async () => {
    const inquirer = (await import('inquirer')).default;

    inquirer.prompt([
        {
            type: 'input',
            name: 'directory',
            message: 'Please provide a directory path:',
            validate: (input) => input ? true : 'Directory path cannot be empty'
        }
    ]).then(answers => {
        organizeFiles(answers.directory);
    });
};

program
    .version('1.0.0')
    .description('Organize files in a directory by their extensions')
    .action(() => {
        promptForDirectory();
    });

program.parse(process.argv);