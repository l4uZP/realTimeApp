import { Schema, model} from 'mongoose';

const schema = new Schema(
    {
        content:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export default model('Message', schema);