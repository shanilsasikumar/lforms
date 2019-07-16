// Tests for the HL7 generation library
describe('Util library', function() {
  describe('getNextLetter', function() {
    it('should return correct letters', function() {
      assert.equal(LForms.Util.getNextLetter(-100), "");
      assert.equal(LForms.Util.getNextLetter(-1), "");
      assert.equal(LForms.Util.getNextLetter(0), "");
      assert.equal(LForms.Util.getNextLetter(1), "a");
      assert.equal(LForms.Util.getNextLetter(2), "b");
      assert.equal(LForms.Util.getNextLetter(3), "c");
      assert.equal(LForms.Util.getNextLetter(25), "y");
      assert.equal(LForms.Util.getNextLetter(26), "z");
      assert.equal(LForms.Util.getNextLetter(26+1), "aa");
      assert.equal(LForms.Util.getNextLetter(26+2), "ab");
      assert.equal(LForms.Util.getNextLetter(26*2-1), "ay");
      assert.equal(LForms.Util.getNextLetter(26*2), "az");
      assert.equal(LForms.Util.getNextLetter(26*2+1), "ba");
      assert.equal(LForms.Util.getNextLetter(26*2+2), "bb");
      assert.equal(LForms.Util.getNextLetter(26*26), "yz");
      assert.equal(LForms.Util.getNextLetter(26*26+1), "za");
      assert.equal(LForms.Util.getNextLetter(26*26+26), "zz");
      assert.equal(LForms.Util.getNextLetter(26*26+26+1), "aaa");
      assert.equal(LForms.Util.getNextLetter(1000), "all");
    });
  });

  describe('isItemValueEmpty', function() {
    it('should check all kinds of empty values', function() {
      var value = "";
      assert.equal(LForms.Util.isItemValueEmpty(value), true);
      value = [];
      assert.equal(LForms.Util.isItemValueEmpty(value), true);
      value = {};
      assert.equal(LForms.Util.isItemValueEmpty(value), true);
      value = {"code": null};
      assert.equal(LForms.Util.isItemValueEmpty(value), true);
      value = {"code": ""};
      assert.equal(LForms.Util.isItemValueEmpty(value), true);

      value = true;
      assert.equal(LForms.Util.isItemValueEmpty(value), false);
      value = false;
      assert.equal(LForms.Util.isItemValueEmpty(value), false);
      value = 0;
      assert.equal(LForms.Util.isItemValueEmpty(value), false);
      value = "a";
      assert.equal(LForms.Util.isItemValueEmpty(value), false);
      value = [1];
      assert.equal(LForms.Util.isItemValueEmpty(value), false);
      value = {"code": "1"};
      assert.equal(LForms.Util.isItemValueEmpty(value), false);


    });
  });

  describe('pruneNulls', function() {
    it('should remove elements with null and undefined values from an object/array', function () {
      var target    = {a: [null, undefined, 1, 'str', true, {}], b: true, s: 'str', n: null, u: undefined, child: {a: [null, undefined, 1, 'str', true, {}], num: 10.1, s: 'str', b: false, n: null, u: undefined, e: [], o: {}}};
      var expected  = {a: [                 1, 'str', true, {}], b: true, s: 'str',                        child: {a: [                 1, 'str', true, {}], num: 10.1, s: 'str', b: false,                        e: [], o: {}}};
      LForms.Util.pruneNulls(target);
      assert.deepEqual(target, expected);
    });
  });

  describe('findItem', function() {
    var items = [{linkId: 'aa'}, {linkId: 'bb', items:[{linkId: 'bb1'}, {linkId:'bb2'}]}, {linkId:'ccc'}];
    it('should find item by linkId', function () {
      var item = LForms.Util.findItem(items, 'linkId', 'aa');
      assert.equal(item.linkId, 'aa');
    });
    it('should find item by linkId recursively', function () {
      var item = LForms.Util.findItem(items, 'linkId', 'bb1');
      assert.equal(item.linkId, 'bb1');
    });
  });
  
  describe('Date conversions', function () {
    
    var str = '2019-05-06T03:00:00.000Z';
    var dt = LForms.Util.stringToDate(str);
    
    it('stringToDate()', function () {
      assert.equal(dt.getTime(), LForms.Util.stringToDate('Mon May 05 2019 23:00:00 GMT-0400 (Eastern Daylight Time)').getTime());
      assert.equal(dt.getTime(), LForms.Util.stringToDate('Mon May 05 2019 22:00:00 GMT-0500 (Central Daylight Time)').getTime());
      assert.equal(str, LForms.Util.dateToDTMString(dt));
      assert.equal(LForms.Util.dateToDTStringISO(dt), '2019-05-05');
    });

    it('formatDate()', function () {
      assert.equal(LForms.Util.formatDate(dt, LForms.HL7._DTM_FMT), '20190505230000');
      assert.equal(LForms.Util.formatDate(dt, LForms.HL7._DT_FMT), '20190505');
      assert.equal(LForms.Util.formatDate(dt, 'HHmmssZZ'), '230000-0400');
    });
  })
});
