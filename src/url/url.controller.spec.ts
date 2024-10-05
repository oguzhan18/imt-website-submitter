import { Test, TestingModule } from '@nestjs/testing';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';

describe('UrlController', () => {
  let controller: UrlController;
  let service: UrlService & { updateUrls: jest.Mock };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlController],
      providers: [
        {
          provide: UrlService,
          useValue: {
            updateUrls: jest.fn().mockReturnValue(['http://newdomain.com']),
          },
        },
      ],
    }).compile();

    controller = module.get<UrlController>(UrlController);
    service = module.get<UrlService & { updateUrls: jest.Mock }>(UrlService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call updateUrls and return updated URLs', async () => {
    const userProvidedUrl = 'http://newdomain.com';
    const result = await controller.submitUrl(userProvidedUrl); // {{ edit_1 }}
    expect(service.updateUrls).toHaveBeenCalledWith(userProvidedUrl);
    expect(result).toEqual(['http://newdomain.com']);
  });
});
