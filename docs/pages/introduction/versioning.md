---
category: Introduction
page: Versioning policy
---

# Base UI Versioning Policy

We recognize that you need stability from Base UI.

This document describes the practices that we follow to provide you the Base UI library. We want everyone who depends on Base UI to know when and how new features are added, and to be well-prepared when obsolete ones are removed.

[Please visit the release history](https://github.com/uber-web/baseui/releases). This log includes a list of bug fixes and new features, as well as breaking changes and migration guides.

The project follows [SemVer](https://semver.org), with a few flavours. We do not bump major versions for the following changes:

- Any component or function that's prefixed with `Unstable_` / `unstable_` may change or be removed without notice.
- Visual changes, like colors and sizes, or any changes in CSS.
- Change in undocumented APIs and internal data structures.

_Development builds of Base UI include many helpful warnings._

In the event of a future breaking change, we will add warnings which indicate the feature is scheduled for deprecation and will provide migration instructions. Deprecation warnings may be added in a minor version. Following major versions will remove the deprecated feature.
