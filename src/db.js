import { connect } from 'mongoose';
import { MONGODB_URL } from './config'

export const dbConection = async () => {
    try {
        await connect(MONGODB_URL);
        console.log('Conected to DB');
    } catch (error) {
        console.log(error);
    }
}