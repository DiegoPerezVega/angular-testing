import{getCurrencies} from ',getCurrencies';
describe(’currencies’, () => {//currencies suite
it(’shouldreturn the supported currencies’,() => {
constresult = getCurrencies();
expect(result).toContain('USD');
expect(result).toContain('AUD');
expect(result).toContain('EUR');
})
})

