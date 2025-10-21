# Anystat Documentation

[![简体中文-Click to view](https://img.shields.io/badge/简体中文-Click_to_view-red.svg)](https://anystatweb.github.io/README.md)
[![English-Click to view](https://img.shields.io/badge/English-Click_to_view-blue.svg)](https://anystatweb.github.io/README_EN.md)

This is the official documentation website for Anystat Data Analysis Assistant, built with VitePress + GitHub Pages.

## Quick Start

### Install Dependencies

```bash
npm install
```

### Local Development

```bash
npm run docs:dev
```

Then open your browser and visit http://localhost:5173/Anystat_doc_web.github.io/

### Build Documentation

```bash
npm run docs:build
```

The built files will be generated in the `docs/.vitepress/dist` directory.

### Preview Build Results

```bash
npm run docs:preview
```

## Deploy to GitHub Pages

1. Build the documentation:
   ```bash
   npm run docs:build
   ```

2. Publish the contents of the built `docs/.vitepress/dist` directory to GitHub Pages.

## Documentation Structure

- `docs/`: VitePress documentation directory
  - `.vitepress/`: VitePress configuration directory
  - `tutorial/`: Tutorial documentation subdirectory
  - `images/`: Image resource directory
  - `index.md`: Homepage documentation
  - `installation.md`: Installation and deployment documentation
  - `tutorial.md`: Tutorial main documentation
  - `examples.md`: Usage examples documentation
  - `resources.md`: Related resources documentation

## Contributing Guidelines

If you would like to contribute to the documentation, please follow these steps:

1. Fork this repository
2. Create a feature branch
3. Submit your changes
4. Push to the branch
5. Submit a Pull Request

## License

This project is licensed under the MIT License.