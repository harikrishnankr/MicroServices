import mongoose from 'mongoose';
import { DB_URL } from '../config';

export default async() => {

    try {
        await mongoose.connect(DB_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        });
        console.log('Db Connected');
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};

 