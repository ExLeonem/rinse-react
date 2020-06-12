<p align="center">
	<img src="https://user-images.githubusercontent.com/10063864/45442352-c961ab80-b68f-11e8-84a3-e920f05a313c.png" width={400} alt="Rinse" />
</p>

> Rinse, React, repeat. A boilerplate to build a React component library.

#### To learn how this project was made from scratch, [read the blog post](https://medium.com/@cwlsn/how-to-write-your-own-reusable-react-component-library-a57dc7c9a210)!

## Get Started

To start your own React component library, clone this repository and start your own Git journey!

```bash
$ git clone https://github.com/cwlsn/rinse-react cool-name
$ cd cool-name
$ rm -rf .git
$ git init
```

## Development and Storybook

You can easily develop and interact with your components by using Storybook. To run the local server, simply run:

```bash
$ npm i
$ npm run storybook
```

Navigate to [http://localhost:9001](http://localhost:9001) to view your stories. They should automatically update as you develop.

Storybook will pick up any story from the `stories.js` file in a component folder.

Rinse is currently using the latest technology available, so you may need to update your Node versions to latest to accomodate Babel 7 and Webpack 4.


## Publish/Use

To use the created library there are multiple options, two of which are. 
You can find other approaches [here](https://docs.npmjs.com/cli/install)

1. Publish and install via npm
2. Install from a local directory


### Publish and install via npm

Make sure that you have a npm account.
Switch into the root directory of your component library and execute the following commands.

```bash
$ npm build
$ npm login
$ npm publish
```

The library now should be available on npm and you can install it like every other library via `npm install <package-name>`


### Install from a local directory

Switch into the directory of the projekt you want to install the package to and execute:

```bash
  // Example: npm install --production ../rinse-react
$ npm install --production <path-to-component-library>
```


