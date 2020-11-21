# docsim

**docsim** - tools for knowledge discovery, classification, diagnostics and prediction.

## Choose your language / Оберіть мову

- **[Українська](#toc-ua)**
- **[English](#toc-en)**

-------

<a name="toc-en"></a>
**docsim** - tools for knowledge discovery, classification, diagnostics and prediction.

### Table of Contents

<!-- - **[Features](#features-en)** -->
- **[Building and running under UNIX (Linux/MacOS) with Docker](#building-running-linux)**

-------

<a name="building-running-linux"></a>
## Building and running under UNIX (Linux/MacOS) with Docker

Clone from GitHub repository:

```bash
git clone https://username:token@github.com/username/repo_name.git
```

Or clone from the specific branch/tag of GitHub repository:

```bash
git clone --depth=1 --branch=<tag_name> <repo_url>
```

Checkout the branch you want to use:

```bash
git checkout <branch_name>
```

Build an docker image from a Dockerfile (It creates an image named `docsim_image`):

```bash
docker build . -t docsim_image
```

You can run the image `docsim_image` now with the command:

```bash
docker run --name ken -d -p 80:80 docsim_image
```
