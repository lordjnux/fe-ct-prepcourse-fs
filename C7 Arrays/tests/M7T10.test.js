const obtenerPrimerStringLargo = require('../ejercicios/10');

describe('obtenerPrimerStringLargo', () => {
   it('should return the first string with more than 5 characters', () => {
      expect(
         obtenerPrimerStringLargo(['hellos', 'world', 'this', 'is', 'a', 'test'])
      ).toBe('hellos');
      expect(
         obtenerPrimerStringLargo([
            'this',
            'is',
            'a',
            'test',
            'with',
            'a',
            'long',
            'string',
         ])
      ).toBe('string');
   });

   it('should return undefined if no string with more than 5 characters is found', () => {
      expect(
         obtenerPrimerStringLargo(['hi', 'ther', 'how', 'are', 'you'])
      ).toBeUndefined();
      expect(
         obtenerPrimerStringLargo(['this', 'is', 'a', 'test'])
      ).toBeUndefined();
   });
});
