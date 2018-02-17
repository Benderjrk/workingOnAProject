import { TestBed, inject } from '@angular/core/testing';

import { MongoStoreService } from './mongo-store.service';

describe('MongoStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoStoreService]
    });
  });

  it('should be created', inject([MongoStoreService], (service: MongoStoreService) => {
    expect(service).toBeTruthy();
  }));
});
