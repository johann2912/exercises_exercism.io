import { colorCode, COLORS } from './resistor-color';

describe('ResistorColor', () => {
  describe('Color codes', () => {
    
    test('Black UpperCase', () => {
      expect(colorCode('black')).toEqual(0);
    });

    test('Brown LowerCase', () => {
      expect(colorCode('brown')).toEqual(1);
    });

    test('Red UpperCase', () => {
      expect(colorCode('red')).toEqual(2);
    });

    test('Orange LowerCase', () => {
      expect(colorCode('Orange')).toEqual(3);
    });

    test('Yellow UpperCase', () => {
      expect(colorCode('Yellow')).toEqual(4);
    });

    test('Green LowerCase', () => {
      expect(colorCode('green')).toEqual(5);
    });

    test('Blue UpperCase', () => {
      expect(colorCode('blue')).toEqual(6);
    });

    test('Violet LowerCase', () => {
      expect(colorCode('violet')).toEqual(7);
    });

    test('Grey UpperCase', () => {
      expect(colorCode('grey')).toEqual(8);
    });

    test('White LowerCase', () => {
      expect(colorCode('white')).toEqual(9);
    });


  });

  test('Colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]);
  });
});
