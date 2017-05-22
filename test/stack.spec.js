const Node = require('../src/node');
const Stack = require('../src/stack');

describe('Stack', () => {
  describe('#constructor', () => {
    const st = new Stack();

    it('assigns 0 to this.length', () => {
      expect(st.length).to.equal(0);
    });

    it('assigns null to this.head', () => {
      expect(st.top).to.equal(null);
    });
  });

});