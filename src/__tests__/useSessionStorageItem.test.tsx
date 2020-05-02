import { renderHook } from '@testing-library/react-hooks';
import { defaultDecode, defaultEncode, useSessionStorageItem } from '../hooks/useSessionStorageItem';

describe('useSessionStorageItem Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() =>
      useSessionStorageItem('message', 'Son of a submariner!', defaultEncode, defaultDecode)
    );
    expect(result.error).toBe(undefined);
  });
});
