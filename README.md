# Jira Git Branch Name Generator

A simple VS Code extension to generate and copy a Git branch name from a Jira ticket code and description.

## Features

- Prompt for Jira issue code and description
- Generates a git-friendly branch name like: `AM-112-this-is-task`
- Automatically copies the branch name to clipboard
- (Optional) Automatically runs `git checkout -b <branch-name>`

## Usage

1. Open Command Palette (`Ctrl+Shift+P`)
2. Run: `Generate Git Branch Name from Jira`
3. Paste the copied branch name in terminal or let it auto-run!

## Requirements

- Git must be installed and available in the terminal
