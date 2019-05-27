import { Mongo } from 'meteor/mongo';

class DetailsCollection extends Mongo.Collection {
    constructor() {
        super('details');
    }
}
const Details = new DetailsCollection();

export default Details;
