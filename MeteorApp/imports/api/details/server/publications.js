import { publishComposite } from 'meteor/reywood:publish-composite';
import Details from '../index';

publishComposite('details-list', {
  find() {
    return Details.find();
  }
});