// Tests for ExpressionProcessor
describe('ExpresssionProcessor', function () {
  describe('_evaluateFHIRPath', function() {
    it('should use the FHIR model', function() {
      // Test by checking that QR.item.answer.value works to return a value (as
      // opposed to "valueString", which is what it would be without model information).
      var lfData = new LForms.LFormsData({fhirVersion: 'R4', items: [{
        linkId: '/q1', dataType: 'ST', value: "green"
      }, {
        linkId: '/q2', dataType: 'ST',
        extension: [{
          "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-calculatedExpression",
          "valueExpression": {
            "language": "text/fhirpath",
            "expression": "%resource.item.where(linkId='/q1').answer.value"
          }
        }]
      }]});
      var exp = new LForms.ExpressionProcessor(lfData)
      exp.runCalculations();
      assert.equal(lfData.items[1].value, lfData.items[0].value);
    });
  }),

  describe('_addToIDtoQRItemMap', function() {
    it('should handle repeating items with missing data', function() {
      var lfData = new LForms.LFormsData({fhirVersion: 'R4', items: [{linkId: '/g1', items:  [{
        linkId: '/g1/q1',
        questionCardinality: {"min": "1", "max": "*"},
        value: 1
      },
      {
        linkId: '/g1/q1',
        questionCardinality: {"min": "1", "max": "*"},
        // blank
      },
      {
        linkId: '/g1/q1',
        questionCardinality: {"min": "1", "max": "*"},
        value: 2
      }]}]});
      var qrItem = {linkId: '/g1', item: [{
        linkId: '/g1/q1',
        answer: [1, 2]
      }]}
      var lfItem = lfData.items[0];
      var exp = new LForms.ExpressionProcessor(lfData)
      var map = {};
      exp._addToIDtoQRItemMap(lfItem, qrItem, map);
      assert.deepEqual(map, {'/g1/1': qrItem, '/g1/q1/1/1': qrItem.item[0], '/g1/q1/1/3': qrItem.item[0]});
    });

    it('should handle items with data that are two levels down', function() {
      var lfData = new LForms.LFormsData({fhirVersion: 'R4', items: [{linkId: '/g1', items:  [{
        linkId: '/g1/g1A', items: [{
          linkId: '/g1/g1A/q1',
          questionCardinality: {"min": "1", "max": "*"},
          value: 1
        },
        {
          linkId: '/g1/g1A/q1',
          questionCardinality: {"min": "1", "max": "*"},
          // blank
        },
        {
          linkId: '/g1/g1A/q1',
          questionCardinality: {"min": "1", "max": "*"},
          value: 2
        }
      ]}]}]});
      var qrItem = {linkId: '/g1', item: [{
        linkId: '/g1/g1A', item: [{
          linkId: '/g1/g1A/q1',
          answer: [1, 2]
        }]
      }]};
      var lfItem = lfData.items[0];
      var exp = new LForms.ExpressionProcessor(lfData)
      var map = {};
      exp._addToIDtoQRItemMap(lfItem, qrItem, map);
      console.log(Object.keys(map))
      assert.deepEqual(map, {'/g1/1': qrItem, '/g1/g1A/1/1': qrItem.item[0],
        '/g1/g1A/q1/1/1/1': qrItem.item[0].item[0], '/g1/g1A/q1/1/1/3': qrItem.item[0].item[0]});
    });

    it('should skip over blank LForms questions', function() {
      var lfData = new LForms.LFormsData({fhirVersion: 'R4', items: [{
        linkId: '/g1A', items: [{
          linkId: '/g1A/q1',
          questionCardinality: {"min": "1", "max": "1"},
        },
        {
          linkId: '/g1A/q2',
          questionCardinality: {"min": "1", "max": "1"},
          value: 2
        }
      ]}]});
      var qrItem = {
        linkId: '/g1A', item: [{
          linkId: '/g1A/q2',
          answer: [2]
        }]
      };
      var lfItem = lfData.items[0];
      var exp = new LForms.ExpressionProcessor(lfData)
      var map = {};
      exp._addToIDtoQRItemMap(lfItem, qrItem, map);
      assert.deepEqual(map, {'/g1A/1': qrItem, '/g1A/q2/1/1': qrItem.item[0]});
    });

    it('should handle two sibling sub-sections', function() {
      var lfData = new LForms.LFormsData({fhirVersion: 'R4', items: [{
        linkId: '/g1A', items: [{
          linkId: '/g1A/q1',
          questionCardinality: {"min": "1", "max": "1"}
        }]}, {
        linkId: '/g2A', items: [{  linkId: '/g2A/q2',
          questionCardinality: {"min": "1", "max": "1"},
          value: 2
        }]}
      ]});
      var qr = {item:[{
        linkId: '/g2A', item: [{
          linkId: '/g2A/q2',
          answer: [2]
        }]
      }]};
      var exp = new LForms.ExpressionProcessor(lfData);
      var map = {};
      exp._addToIDtoQRItemMap(lfData, qr, map);
      assert.deepEqual(map, {'/g2A/1': qr.item[0], '/g2A/q2/1/1': qr.item[0].item[0]});
    });
  });
});
