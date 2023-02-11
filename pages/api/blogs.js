import * as fs from 'fs';

export default async function handler(req, res) {
    console.log("req.query.count: ", req.query.count);
    let data = await fs.promises.readdir(`blogdata`)
    data = data.slice(0, parseInt(req.query.count));
    console.log("data: ", data);
    let myfile;
    let allBlogs = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        console.log(item);
        myfile = await fs.promises.readFile(`blogdata/${item}`, 'utf-8');
        console.log(myfile);
        allBlogs.push(JSON.parse(myfile));
    }
    if (!data) {
        return res.status(500).json({ error: "Internal server error" });
    }
    console.log("allBlogs: ", allBlogs);
    res.status(200).json(allBlogs)
}