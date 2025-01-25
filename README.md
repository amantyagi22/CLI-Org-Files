# File Organizer CLI Tool

This project is a CLI tool that helps in organizing files in a specified directory based on their extensions. It handles command-line arguments, reads and writes files, and performs various file system operations.

## Features

- Organizes files in a directory based on their extensions.
- Creates directories for each file extension if they do not exist.
- Moves files into their respective directories.
- Interactive prompts for directory input using `inquirer`.
- Colored output using `chalk`.

## Installation

1. Clone the repository and navigate to the project directory.
2. Install the dependencies using `npm install`.

```sh
git clone <repository-url>
cd github-together
npm install
```

## Usage

To use this CLI tool, follow the steps below:

1. Run the CLI tool using the `start` script.

```sh
npm start
```

2. You will be prompted to provide a directory path. Enter the path of the directory you want to organize.

```sh
? Please provide a directory path: /path/to/your/directory
```

3. The tool will organize the files in the specified directory based on their extensions.

## Example

```sh
npm start
? Please provide a directory path: /Users/home/Downloads
Files organized successfully!
```

## Dependencies

- [chalk](https://www.npmjs.com/package/chalk) - For colored output.
- [commander](https://www.npmjs.com/package/commander) - For command-line argument parsing.
- [inquirer](https://www.npmjs.com/package/inquirer) - For interactive prompts.

## License

This project is licensed under the ISC License.