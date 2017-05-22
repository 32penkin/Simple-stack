const Node = require('../src/node');
const Stack = require('../src/stack');

describe('Stack', () => {
  describe('#constructor', () => {
    const st = new Stack();

    it('assigns 0 to this.size', () => {
      expect(st.size).to.equal(0);
    });

    it('assigns null to this.head', () => {
      expect(st.top).to.equal(null);
    });
  });

  describe('#append', () => {
    const st = new Stack();

    st.append('node1');
    st.append('node2');
    st.append('node3');

    it('assigns 0 to this.size', () => {
      expect(st.size).to.equal(3);
    });

    it('assigns node3 to this.top', () => {
      expect(st.top.data).to.equal('node3');
    });

  });
});