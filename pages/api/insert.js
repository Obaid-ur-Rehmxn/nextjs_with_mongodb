import db from './db';
export default async function handler(req, res) {
    db.models= {};
    const Model = db.model('feedback', { name: String, email: String, message: String });
    const name = req.query.name;
    const email = req.query.email;
    const message = req.query.message;
    const myObj={
        name: name,
        email: email,
        message: message
    }
    const newModel = new Model(myObj);
    newModel.save(function (err) {
        if (err) throw err;
        else {
            res.send('Data inserted');
        }
    })
}

export const config = {
    api: {
        externalResolver: true,
    }
}