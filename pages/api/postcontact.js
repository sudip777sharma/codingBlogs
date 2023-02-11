import * as fs from 'fs';
export default async function handler(req, res) {
    if (req.method == 'POST') {
        // process a post request 
        console.log(req.body);
        let contactsFile = await fs.promises.readdir('contactdata');
        console.log(contactsFile);
        fs.promises.writeFile(`contactdata/${contactsFile.length + 1}.json`, JSON.stringify(req.body));
        res.status(200).json({ request: "this is the response of post request", data: req.body });
    } else {
        // handle any other http requests
        res.status(200).json({ request: "this is the response of get request" });
    }
}