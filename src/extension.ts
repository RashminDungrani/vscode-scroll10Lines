// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "scroll10lines" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let s10Up = vscode.commands.registerCommand(
		"scroll10lines.scroll10LinesUp",
		() => {
			vscode.commands.executeCommand("editorScroll", {
				to: "up",
				by: "line",
				value: 10,
				revealCursor: false,
			});
		}
	);

	let s10Down = vscode.commands.registerCommand(
		"scroll10lines.scroll10LinesDown",
		() => {
			vscode.commands.executeCommand("editorScroll", {
				to: "down",
				by: "line",
				value: 10,
				revealCursor: false,
			});
		}
	);
	context.subscriptions.push(s10Up);
	context.subscriptions.push(s10Down);
}

// this method is called when your extension is deactivated
export function deactivate() {}
