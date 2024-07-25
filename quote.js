import fs from "node:fs/promises";
import { readFile } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";


async function readFromFile(filePath) {
    try {
        const data = await readFile(filePath, 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readFromFile("quotes.json");

export async function getQuotes() {
    return fileName;
}



async function writeToFile(filePath, data) {
    try {
        await writeFile(filePath, data, 'utf8');
        console.log('File written successfully');
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

writeToFile("quotes.json", "{\n" +
    "      \"quote\": \"To be wronged is nothing, unless you continue to remember it.\",\n" +
    "      \"author\": \"Confucius\"\n" +
    "    }");


export async function addQuote(quoteText) {

}

export async function getRandomQuote() {

}

export async function editQuote(id, quoteText) {

}

export async function deleteQuote(id) {

}
