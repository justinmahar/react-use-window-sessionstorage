import { renderHook } from '@testing-library/react-hooks';
import { useSessionStorageString } from '../hooks/useSessionStorageString';

describe('useSessionStorageString Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useSessionStorageString('name', 'Hohenheim'));
    expect(result.error).toBe(undefined);
  });
});
