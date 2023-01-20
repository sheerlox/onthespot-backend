import { IsNotEmpty } from 'class-validator';

export class SpotifyAuthCallbackDto {
  @IsNotEmpty()
  code: string;
}
