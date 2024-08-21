import { readDatabase } from '../utils.js';

export default class StudentsController {
    static async getAllStudents(req, res) {
        const dbPath = process.argv[2];
        try {
            const fields = await readDatabase(dbPath);
            let responseText = 'This is the list of our students\n';
            Object.keys(fields)
                .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                .forEach((field) => {
                    responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
                });
            res.status(200).send(responseText.trim());
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const dbPath = process.argv[2];
        const major = req.params.major;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }
        try {
            const fields = await readDatabase(dbPath);
            const students = fields[major] || [];
            res.status(200).send(`List: ${students.join(', ')}`);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
}
