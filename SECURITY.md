# Security Policy

## Supported Versions

| Version  | Supported |
| -------- | --------- |
| Latest   | Yes       |
| < Latest | No        |

## Reporting a Vulnerability

**Do NOT open a public issue for security vulnerabilities.**

Instead, please report them privately:

1. Go to the **Security** tab of this repository
2. Click **"Report a vulnerability"**
3. Fill in the details

Or email: **security@YOUR_DOMAIN.com**

### What to include

- Description of the vulnerability
- Steps to reproduce
- Impact assessment
- Suggested fix (if any)

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Assessment**: Within 7 days
- **Fix**: Depends on severity (critical: ASAP, high: 14 days, medium: 30 days)

## Security Practices

This project implements the following security measures:

- **CodeQL analysis** — automated security scanning on every PR and weekly
- **Dependabot** — automated dependency updates with grouped PRs
- **npm provenance** — cryptographic proof of build origin on published packages
- **Minimal dependencies** — reduce attack surface
- **No eval/innerHTML** — components use safe React patterns
- **CI enforcement** — all security checks must pass before merge

## Supply Chain Security

Published packages include [npm provenance attestation](https://docs.npmjs.com/generating-provenance-statements/), providing cryptographic proof that the package was built from this repository's CI pipeline.

Verify provenance:

```bash
npm audit signatures
```
