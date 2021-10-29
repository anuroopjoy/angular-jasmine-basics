import { CapitalizePipe } from './capitalize.pipe';

describe('Capitalize Pipe', () => {
  const pipe = new CapitalizePipe();

  it('transform single word', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });
  it('transform multi words', () => {
    expect(pipe.transform('abc def')).toBe('Abc def');
  });
});
