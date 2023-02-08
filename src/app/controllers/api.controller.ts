import { ApiInfo, ApiServer, Context, Get, HttpResponseOK } from '@foal/core';

@ApiInfo({
  title: 'Udhavi API server',
  version: '1.0.0'
})
@ApiServer({
  url: '/api'
})
export class ApiController {

  @Get('/')
  index(ctx: Context) {
    return new HttpResponseOK('Hello world!');
  }

}
