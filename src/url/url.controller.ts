import { Controller, Post, Body } from '@nestjs/common';
import { UrlService } from './url.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

/**
 * Handles URL-related operations such as dynamic URL generation.
 */
@ApiTags('URL Submit')
@Controller('url')
export class UrlController {
  /**
   * Constructs the URL controller with the URL service.
   * @param urlService The service responsible for URL operations.
   */
  constructor(private readonly urlService: UrlService) {}

  /**
   * Submits a URL to be dynamically replaced with a user-provided URL.
   * @param url The URL to be dynamically replaced.
   * @returns A string containing all updated URLs separated by newline characters.
   */
  @Post('submit')
  @ApiOperation({ summary: 'Submit a URL to be dynamically replaced' })
  @ApiBody({ schema: { properties: { url: { type: 'string' } } } })
  submitUrl(@Body('url') url: string): string {
    return this.urlService.generateDynamicUrls(url);
  }
}
