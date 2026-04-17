# Jira Git Branch Name Generator

A simple VS Code extension to generate and copy a Git branch name from a Jira ticket code and description.

## Features

- Prompt for Jira issue code and description
- Asks whether the Jira item is an Epic or Task
- Generates a git-friendly branch name:
  - Epic example: `AM-112-this-is-task`
  - Task example: `issue/AM-113-this-is-task`
- Automatically copies the branch name to clipboard
- (Optional) Automatically runs `git checkout -b <branch-name>`

## Usage

1. Open Command Palette (`Ctrl+Shift+P`)
2. Run: `Generate Git Branch Name from Jira`
3. Select `Epic` or `Task`
4. Enter the Jira code and short description
5. Paste the copied branch name in terminal or let it auto-run!

## Install or Update in VS Code

If you already installed an older version, update the `version` value in `package.json` first, for example from `0.0.1` to `0.0.2`.

Build and package the extension:

```powershell
npm install
npm run compile
npx @vscode/vsce package --allow-missing-repository
```

This creates a `.vsix` file, for example:

```text
jira-git-branch-name-generator-0.0.2.vsix
```

Install the `.vsix` file in VS Code:

1. Open VS Code
2. Open the Extensions view
3. Click the `...` menu
4. Select `Install from VSIX...`
5. Choose the generated `.vsix` file
6. Reload VS Code if prompted

For local testing without installing the extension, open this project in VS Code and press `F5`. This starts an Extension Development Host where you can run the command.

## Create a GitHub Release

This repository includes a GitHub Actions workflow that builds the extension, creates a `.vsix` file, uploads it as a workflow artifact, and attaches it to a GitHub Release.

Before creating a release, update the `version` in `package.json`.

To release by pushing a tag:

```powershell
git add .
git commit -m "Release v0.0.2"
git tag v0.0.2
git push origin main
git push origin v0.0.2
```

You can also create a release manually:

1. Open the repository on GitHub
2. Go to `Actions`
3. Select `Release VS Code Extension`
4. Click `Run workflow`
5. Enter a tag, for example `v0.0.2`
6. Run the workflow

After the workflow finishes, download the generated `.vsix` from the GitHub Release or from the workflow artifact.

## Requirements

- Git must be installed and available in the terminal
