import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

/**
 * This service is responsible for generating dynamic URLs by replacing a specific domain with a user-provided URL.
 * It reads a list of URLs from a JSON file and updates each URL by replacing 'oguzhancart.dev' with the user's URL.
 */
@Injectable()
export class UrlService {
  /**
   * The list of URLs to be updated. This is loaded from a JSON file.
   */
  private readonly urlList: string[];

  /**
   * Constructor to initialize the service.
   * It reads the URL list from a JSON file and parses it into an array of strings.
   */
  constructor() {
    const jsonFilePath = path.join(__dirname, 'url-list.json');
    this.urlList = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
  }

  /**
   * Generates dynamic URLs by replacing 'oguzhancart.dev' with the user's URL in each URL of the list.
   *
   * @param userUrl The URL provided by the user to replace 'oguzhancart.dev'.
   * @returns A string containing all updated URLs separated by newline characters.
   */
  generateDynamicUrls(userUrl: string): string {
    /**
     * Maps each URL in the list to an updated URL where 'oguzhancart.dev' is replaced with the user's URL.
     * The updated URLs are then joined into a single string separated by newline characters.
     */
    const updatedUrls = this.urlList.map((url) =>
      url.replace('oguzhancart.dev', userUrl),
    );
    return updatedUrls.join('\n');
  }
}
