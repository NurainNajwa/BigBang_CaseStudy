import * as fs from 'fs';

function generateBigBangArray(): string[] {
    const result: string[] = [];
    try {
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                result.push("BIGBANG");
            } else if (i % 3 === 0) {
                result.push("BIG");
            } else if (i % 5 === 0) {
                result.push("BANG");
            } else {
                result.push(i.toString());
            }
        }
    } catch (err) {
        console.error("Error generating the Big Bang array:", err);
    }
    return result;
}

function saveToJson(data: string[], filename: string): void {
    try {
        fs.writeFileSync(filename, JSON.stringify(data, null, 4));
        console.log('The file has been saved!');
    } catch (err) {
        console.error("Error saving the file:", err);
    }
}

const bigBangArray = generateBigBangArray();
saveToJson(bigBangArray, 'output.json');
