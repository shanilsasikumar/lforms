/**
 *  Defines SDC import functions that are the same across the different FHIR
 *  versions.  The function takes SDC namespace object defined in the sdc export
 *  code, and adds additional functions to it.
 */
function addCommonSDCImportFns(ns) {
"use strict";

  var self = ns;

  /**
   * Merge data into items on the same level
   * @param parentQRItemInfo structural information of a parent item
   * @param parentLFormsItem a parent item, could be a LForms form object or a form item object.
   * @private
   */
  self._processQRItemAndLFormsItem = function(parentQRItemInfo, parentLFormsItem) {

    // note: parentQRItemInfo.qrItemInfo.length will increase when new data is inserted into the array
    for(var i=0; i<parentQRItemInfo.qrItemsInfo.length; i++) {

      var qrItemInfo = parentQRItemInfo.qrItemsInfo[i];
      var qrItem = qrItemInfo.item;
      if (qrItem) {
        // first repeating qrItem
        if (qrItemInfo.total > 1 && qrItemInfo.index === 0) {
          var defItem = this._findTheMatchingItemByCode(parentLFormsItem, qrItemInfo.code);
          // add repeating items in form data
          // if it is a case of repeating questions, not repeating answers
          if (this._questionRepeats(defItem)) {
            this._addRepeatingItems(parentLFormsItem, qrItemInfo.code, qrItemInfo.total);
            // add missing qrItemInfo nodes for the newly added repeating LForms items (questions, not sections)
            if (defItem.dataType !== 'SECTION' && defItem.dataType !== 'TITLE') {
              for (var j=1; j<qrItemInfo.total; j++) {
                var newQRItemInfo = angular.copy(qrItemInfo);
                newQRItemInfo.index = j;
                newQRItemInfo.item.answer = [newQRItemInfo.item.answer[j]];
                parentQRItemInfo.qrItemsInfo.splice(i+j, 0, newQRItemInfo);
              }
              // change the first qr item's answer too
              qrItemInfo.item.answer = [qrItemInfo.item.answer[0]]
            }
          }
          // reset the total number of questions when it is the answers that repeats
          else if (this._answerRepeats(defItem)) {
            qrItemInfo.total = 1;
          }
        }
        // find the matching LForms item
        var item = this._findTheMatchingItemByCodeAndIndex(parentLFormsItem, qrItemInfo.code, qrItemInfo.index);

        // set up value and units if it is a question
        if ((item.dataType !== 'SECTION' && item.dataType !== 'TITLE')) {
          var qrAnswer = qrItem.answer;
          if (qrAnswer && qrAnswer.length > 0) {
            var code = this._getItemCodeFromLinkId(qrItem.linkId);
            this._setupItemValueAndUnit(code, qrAnswer, item);
          }
        }

        // process items on the sub-level
        if (qrItemInfo.qrItemsInfo && qrItemInfo.qrItemsInfo.length>0) {
          this._processQRItemAndLFormsItem(qrItemInfo, item);
        }
      }
    }
  }
}

export default addCommonSDCImportFns;