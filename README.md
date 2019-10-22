# Mutation Testing with Stryker

- Refer -> https://stryker-mutator.io/stryker/quickstart
- Main Docs -> https://github.com/stryker-mutator/stryker/tree/master/packages/core#readme

### Setup Stryker 

Since we are using Mocha

```bash
npm install -g stryker-cli 
stryker init
stryker run
```
```zsh
? Do you want to install Stryker locally? npm
? Are you using one of these frameworks? Then select a preset configuration. None/other
? Which test runner do you want to use? If your test runner isn't listed here, you can choose "command" (it uses your `npm test` command, but will come with a big performance penalty) mocha
? Which test framework do you want to use? mocha
? What kind of code do you want to mutate? javascript
? [optional] What kind transformations should be applied to your code? 
? Which reporter(s) do you want to use? clear-text, progress
? Which package manager do you want to use? npm
```