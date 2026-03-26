# Changesets

This project uses [Changesets](https://github.com/changesets/changesets) for version management.

## Adding a changeset

When you make a change that should be released, run:

```bash
npx changeset
```

This will prompt you to:
1. Select the type of change (patch / minor / major)
2. Write a summary of the change

The changeset file will be committed with your PR.

## Releasing

Merge the "Version Packages" PR that Changesets creates automatically, or run:

```bash
npm run release
npm run changeset:publish
```
