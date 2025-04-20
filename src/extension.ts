// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.generateBranchName",
    async () => {
      const jira = await vscode.window.showInputBox({
        prompt: "Enter Jira Code (e.g., AM-112)",
      });
      if (!jira) {
        return;
      }

      const desc = await vscode.window.showInputBox({
        prompt: "Enter short description",
      });
      if (!desc) {
        return;
      }

      const branchName = `${jira}-${desc
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "")}`;
      vscode.env.clipboard.writeText(branchName);
      vscode.window.showInformationMessage(`Branch name copied: ${branchName}`);
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
