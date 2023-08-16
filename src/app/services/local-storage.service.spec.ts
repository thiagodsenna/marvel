import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a value and keep it', () => {
    service.saveData('testKey', 'Test');
    const storedValue = service.getData('testKey');
    expect(storedValue).toBe('Test');
  });

  it('should remove the key value when remove is called', () => {
    service.removeData('testKey');
    expect(service.getData('testKey')).toBeNull();
  });
});
