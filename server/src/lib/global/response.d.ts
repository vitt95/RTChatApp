import { ObjectID } from 'bson';

declare global {

  type OperationResponse = {
    id: ObjectID | number | unknown,
    status: number | HTTP_STATUS;
    message: string | number | unknown;
  }
}


