var Jsonix = require('jsonix').Jsonix;
var XLink_1_0 = require('w3c-schemas').XLink_1_0;
var SMIL_2_0 = require('../../../ogc-schemas').SMIL_2_0;
var SMIL_2_0_Language = require('../../../ogc-schemas').SMIL_2_0_Language;
var GML_3_1_1 = require('../../../ogc-schemas').GML_3_1_1;
var IC_2_0 = require('../../../ogc-schemas').IC_2_0;
var OM_1_0_0 = require('../../../ogc-schemas').OM_1_0_0;
var OWS_1_1_0 = require('../../../ogc-schemas').OWS_1_1_0;
var SWE_1_0_1 = require('../../../ogc-schemas').SWE_1_0_1;
var SensorML_1_0_1 = require('../../../ogc-schemas').SensorML_1_0_1;
var SOS_1_0_0 = require('../../../ogc-schemas').SOS_1_0_0;
var SOS_1_0_0_Filter = require('../../../ogc-schemas').SOS_1_0_0_Filter;

var roundtrips = require('../../roundtrip').roundtrips;

var mappings = [XLink_1_0, SMIL_2_0, SMIL_2_0_Language, GML_3_1_1, IC_2_0, OM_1_0_0, OWS_1_1_0, SWE_1_0_1, SensorML_1_0_1, SOS_1_0_0, SOS_1_0_0_Filter];

module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
/*	"Example" : function(test) {
		var context =  new Jsonix.Context(mappings);
		var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalFile(__dirname +"/SML-DescribeSensor-Network.xml", function(result) {
			test.equal(32.7, result.value.member[0].process.value.boundedBy.envelope.value.lowerCorner.value[0]);
			test.done();
		});
	},*/
	"Roundtrips" : roundtrips(mappings, __dirname)
};