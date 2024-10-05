import { Test, TestingModule } from '@nestjs/testing';
import { UrlService } from './url.service';
import * as fs from 'fs';

describe('UrlService', () => {
  let service: UrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlService],
    }).compile();

    service = module.get<UrlService>(UrlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should update URLs correctly', () => {
    const userProvidedUrl = 'http://newdomain.com';
    const urlList = [
      'http://www.symbols.com/search/oguzhancart.dev',
      'http://topdownloads.net/serp.php?ss=www.oguzhancart.dev',
    ];
    const expectedUpdatedUrls = [
      'http://www.symbols.com/search/newdomain.com',
      'http://topdownloads.net/serp.php?ss=www.newdomain.com',
    ];

    jest.spyOn(fs, 'readFileSync').mockReturnValue(JSON.stringify(urlList));
    const updatedUrls = service.generateDynamicUrls(userProvidedUrl);
    expect(updatedUrls).toEqual(expectedUpdatedUrls);
  });
});
