import * as fs from 'fs';

export default function handler(req, res) {
    console.log(req.query.slug);
    fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: "No such blog found" });
        }
        console.log(JSON.parse(data))
        res.status(200).json(JSON.parse(data));
    });
}