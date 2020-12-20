# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0x  | :white_check_mark: |
| < 1.0x  | :x:                |

## Reporting a Vulnerability

Submit an issue and if possible, open a pull request too.

Most of the time vulnerabilities can be resolved by dependabot but to make a P.R., just run:

```shell
npm install && npm update && npm audit fix
```

and that should update all the dependencies. At that point, fork the repo and go. Make sure you
make the P.R. according to the correct branches.
