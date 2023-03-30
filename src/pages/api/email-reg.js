import path from 'path'
import fs from 'fs'

const buildPath = () => {
    return path.join(process.cwd(), 'data', 'data.json');
}


const extractData = (filePath) => {
    const jsonData = fs.readFileSync(filePath);

    const data = JSON.parse(jsonData);
    return data;
}

export default function handler(req, res) {
    const { method } = req;
    // * Access our data
    // * Extract our data
    // * AllEvents -- loop though them and identify the event id and 
    // * add the email in that object only if it is not exists there
    // * chacking the email format is correct.

    const filePath = buildPath();
    const { events_categories, allEvents } = extractData(filePath);

    if (!allEvents) {
        return res.status(404).json({ status: 404, message: "Events Data not Found!!" });
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (method === 'POST') {
        const { email, eventId } = req.body;

        if (!regex.test(email)) {
            res.status(422).json({message : "Invalid Email!"});
            return;
        }   
        const all_Events = allEvents.map((eve) => {
            if (eve.id === eventId) {
                if (eve.emails_registered.includes(email)) {
                    return res.status(201).json({ status: 201, message: "This Email is already registered!!" });
                }
                return {
                    ...eve,
                    emails_registered: [...eve.emails_registered, email]
                }
            }
            return eve;
        });

        fs.writeFileSync(filePath , JSON.stringify({events_categories , allEvents: all_Events}));
        res.status(200).json({
            message: `You have successfully registered for the
        event with email id : ${email}.`
        });
    }
}