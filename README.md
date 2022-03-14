# fun-fetch

[![fun-fetch build](https://github.com/jphilipps/fun-fetch/actions/workflows/project-build.yml/badge.svg)](https://github.com/jphilipps/fun-fetch/actions/workflows/project-build.yml)

## development

### build

```
npm run build
```

Builds the project.

### tests

```
npm run test
```

Runs tests for CI. Checks for compile errors before running tests.

```
npm run test:rite:watch
```

Runs tests in watch mode for development. Does **not** check for compile errors. 

### checks and fixes

```
npm run check
```

Checks eslint, spelling, compile time errors and order of imports.

```
npm run fix
```

Fixes eslint and order of imports.

## contribution guidelines

### 🐶 husky 

Before pushing please run `npx husky install` to install git hooks for husky.
Husky advises against an automatic setup. 

### signed commits

only [signed commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) are allowed

> git config commit.gpgsign true

check username and email before committing
> git config user.name
> git config user.email

define username and email if needed
> git config user.name "name"
> git config user.email "email"

[declare the signing key to git](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)

### setup gpg signed commits

- [install GPG (GNU Privacy Guard)](https://www.gnupg.org/download/)
- [generate a new GPG key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)

> git config --global gpg.program "C:\Program Files (x86)\GnuPG\bin\gpg.exe"
> git config user.signingkey <key>

share gpg keys with multiple devices

> gpg --list-keys

select the key id which should be used on another device

> gpg --export-secret-keys --armor 1234ABCD > secret.asc

import the secret key via

> gpg --import secret.asc

further information

- [managing commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification)
