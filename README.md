```
⚠️ This project is currently in progress.
```

# Boilerplate Generator

Build a recommended development environment with a few clicks.

[Visit the website](https://biniruu.github.io/boilerplate-generator/)

## To-do

- [] Fix issues
- [] Add tooltips to options
- [] Implement creating and downloading files
- [] Add highlight to code
- [] Improve UI design
- [] Implement an internal terminal

## Repository maintenance instruction

### How to add options

1. Add an option to `index.html`
1. Add a value of the option to `data/options.ts`
1. Add configurations for the option to `generators/config/**/*.ts` if they are needed
1. Add commands to `generators/command/*.ts` if they are needed
1. Add files to `generators/file/*.ts` if they are needed
1. Update the option controller in `libs/optionController.ts` if it is needed

### How to add commends

Add dependencies and devDependencies from a new command file to `generators/command/index.ts`

### How to add tabs

1. Add a tab to `index.html`
1. Add a value of the tab to `data/files.ts`
1. Update process of togging tabs in `libs/toggleTabs.ts` if it is needed
