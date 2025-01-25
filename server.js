const fs = require('fs');
const path = require('path');

const organizeFiles = (directoryPath) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Unable to read directory:', err);
            return;
        }

        files.forEach(file => {
            const ext = path.extname(file).slice(1);
            const extDir = path.join(directoryPath, ext);

            if (!fs.existsSync(extDir)) {
                fs.mkdirSync(extDir);
            }

            const oldPath = path.join(directoryPath, file);
            const newPath = path.join(extDir, file);

            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    console.error('Error moving file:', err);
                }
            });
        });
    });
};

const directoryPath = process.argv[2];
if (!directoryPath) {
    console.error('Please provide a directory path');
    process.exit(1);
}

organizeFiles(directoryPath);
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Unable to read directory:', err);
        return;
    }

    files.sort((a, b) => a.localeCompare(b));

    files.forEach(file => {
        const ext = path.extname(file).slice(1);
        const extDir = path.join(directoryPath, ext);

        if (!fs.existsSync(extDir)) {
            fs.mkdirSync(extDir);
        }

        const oldPath = path.join(directoryPath, file);
        const newPath = path.join(extDir, file);

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.error('Error moving file:', err);
            }
        });
    });
});