import { Request, Response } from 'express';

/**
 * Declare globally type Express request and response
 */

declare global {

  type ExpressReq = Request;

  type ExpressRes = Response;
}
