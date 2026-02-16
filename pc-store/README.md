# PcStore

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `../docs/` directory. By default, the production build optimizes your application for performance and speed.

## Deployment to GitHub Pages

This project is configured to be deployed to GitHub Pages at [youssefnouira.me](https://youssefnouira.me).

To deploy:

1. Build the project from the repository root:
   ```bash
   ./build-for-gh-pages.sh
   ```

2. Commit and push the changes:
   ```bash
   git add docs/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. Make sure GitHub Pages is configured to serve from the `docs` folder in repository settings.

The build script automatically:
- Builds the Angular application for production
- Moves files to the `docs/` folder
- Copies the `CNAME` file for custom domain
- Creates a `.nojekyll` file to disable Jekyll processing

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
