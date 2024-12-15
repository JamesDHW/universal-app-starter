# Documentation Approach

## Philosophy

:::tip[Documentation:]
**_is a resource to <u>train developers</u> on the required skills to work on the codebase._**
:::

:::warning[Warning:]

**Documentation is _not_ a method to enforce quality standards** in a codebase–it should be a strategic last resort to supplement a codebase to speed up developers.

:::

:::info[We believe:]

- <u>_Comments and documentation can lie, but the code cannot:_</u>
  - Instead of writing documentation, write clean, self-documenting code.
  - Avoid documenting quickly decaying information.
- <u>_Every line of documentation adds maintenance overhead:_</u>
  - Aim to minimize documentation to what is essential.
  - Do not duplicate information available elsewhere, just reference it.
- <u>_Quality standards should not assume/require that documentation has been read:_</u>
  - Use automated tools to enforce quality standards (e.g. static code analysis)–assume developers will not read the documentation if they don't need to.

:::

**_Avoid_ writing documentation for:**

- **Low-level implementation details** that are self-evident to developers.
  - _Instead:_ refactor your code to be clean and self-documenting.
- **Quality standards** for how code should be written in this codebase.
  - _Instead:_ use static code analysis and other automated tools to enforce standards.
- **Troubleshooting guides** for when things go wrong.
  - _Instead:_ consider fixing the root cause permanently.

**_Do_ write documentation for:**

- **Getting started guides** for new developers on how to get up to speed.
- **High-level concepts** that are not self-evident to new developers.
- **Architectural overviews** allow developers to understand, navigate, and contribute.
- **Decision records** to explain the "why" behind the "what".
- **Troubleshooting guides** for when fixing the root cause is not possible.

## Contributing To This Documentation

This documentation is created with [Docusaurus](https://docusaurus.io/) and stored in the repository in `/docs`.

"General" documentation can be edited by editing the files in the `/docs/docs` directory.

Documentation for `/apps` or `/packages` can be added by adding a `docs.md` or `README.md` file anywhere within the `/apps` or `/packages` directories.

Add a frontmatter block to the top of the file if required:

```md
---
title: '' # Default is an empty string.
description: '' # Default is an empty string.
id: '' # The unique identifier referenced in the sidebar. Defaults to the file path.
slug: '' # Defaults to the file path.
sidebar_label: '' # The label shown in the sidebar. Defaults to the document's title.
sidebar_position: null # The position of the document in the sidebar. Default is null.
pagination_prev: null # The ID of the previous document in pagination. Default is null.
pagination_next: null # The ID of the next document in pagination. Default is null.
tags: [] # An array of tags associated with the document. Default is an empty array.
toc_min_heading_level: 2 # Minimum heading level to show in the table of contents. Default is 2.
toc_max_heading_level: 3 # Maximum heading level to show in the table of contents. Default is 3.
---
```
