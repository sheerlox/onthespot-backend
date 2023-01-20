import { Controller, Get, Query } from '@nestjs/common';
import { SpotifyAuthCallbackDto } from './dto/callback.dto';

@Controller('spotify')
export class SpotifyController {
  /**
   * Temporary REST endpoint for development
   *
   * TODO: replace by a GraphQL mutation when adding frontend
   *
   * @param code
   */
  @Get('callback')
  authCallback(@Query() query: SpotifyAuthCallbackDto) {
    console.log('callback called. Code:', query.code);
  }
}
