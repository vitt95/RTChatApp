import { ObjectID } from 'bson';

declare global {

  type OperationResponse = {
    id: ObjectID | number | unknown,
    status: number;
    message: string | number | unknown;
  }

}


