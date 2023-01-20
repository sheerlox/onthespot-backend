import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as qs from 'querystring';

@Injectable()
export class SpotifyService {
  constructor(private configService: ConfigService) {}

  getAuthorizationUrl(): string {
    const authorizationUrl =
      'https://accounts.spotify.com/authorize?' +
      qs.stringify({
        response_type: 'code',
        client_id: this.configService.get<string>('SPOTIFY_CLIENT_ID'),
        scope: this.configService.get<string>('SPOTIFY_SCOPE'),
        redirect_uri: this.configService.get<string>('SPOTIFY_REDIRECT_URI'),
      });

    return authorizationUrl;
  }
}
