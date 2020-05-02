import { renderHook } from '@testing-library/react-hooks';
import { useSessionStorageNumber } from '../hooks/useSessionStorageNumber';

describe('useSessionStorageNumber Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useSessionStorageNumber('ratio', 1.618));
    expect(result.error).toBe(undefined);
  });
});
