import Validator from '../app';

test('проверка латинские буквы', () => {
    const gamer = new Validator();
    const received = gamer.validateUsername('Lena12d');
    const expected = true;
    expect(received).toEqual(expected);
});
test('проверка подряд более трёх цифр', () => {
    const gamer = new Validator();
    const received = gamer.validateUsername('Lena1223q');
    const expected = false;
    expect(received).toEqual(expected);
});