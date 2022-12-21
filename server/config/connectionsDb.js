import mongoose from "mongoose";

const server = 'mongodb+srv://SharafuMTH:SharafuMTH8124@cluster0.m6j01rv.mongodb.net/Incubation?retryWrites=true&w=majority'; //db server
const dbname = 'incubations'; // database name

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(server)
            .then(() => {
                console.log("db connection successfull");
            })
            .catch(err => {
                console.error('db connection error');
            })
    }
}

export default new Database()