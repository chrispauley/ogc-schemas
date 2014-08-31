var Filter_1_0_0_Module_Factory = function () {
  var Filter_1_0_0 = {
    name: 'Filter_1_0_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/ogc',
    typeInfos: [{
        type: 'classInfo',
        localName: 'BinaryOperatorType',
        baseTypeInfo: 'Filter_1_0_0.ExpressionType',
        propertyInfos: [{
            name: 'expression',
            collection: true,
            elementName: 'expression',
            typeInfo: 'Filter_1_0_0.ExpressionType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExpressionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BinarySpatialOpType',
        baseTypeInfo: 'Filter_1_0_0.SpatialOpsType',
        propertyInfos: [{
            type: 'element',
            name: 'propertyName',
            elementName: 'PropertyName',
            typeInfo: 'Filter_1_0_0.PropertyNameType'
          }, {
            name: 'geometry',
            elementName: {
              localPart: '_Geometry',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_2_1_2.AbstractGeometryType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'box',
            elementName: {
              localPart: 'Box',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_2_1_2.BoxType'
          }]
      }, {
        type: 'classInfo',
        localName: 'SpatialOpsType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BinaryLogicOpType',
        baseTypeInfo: 'Filter_1_0_0.LogicOpsType',
        propertyInfos: [{
            name: 'comparisonOpsOrSpatialOpsOrLogicOps',
            collection: true,
            elementTypeInfos: [{
                elementName: 'spatialOps',
                typeInfo: 'Filter_1_0_0.SpatialOpsType'
              }, {
                elementName: 'logicOps',
                typeInfo: 'Filter_1_0_0.LogicOpsType'
              }, {
                elementName: 'comparisonOps',
                typeInfo: 'Filter_1_0_0.ComparisonOpsType'
              }],
            type: 'elementRefs'
          }]
      }, {
        type: 'classInfo',
        localName: 'LogicOpsType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BinaryComparisonOpType',
        baseTypeInfo: 'Filter_1_0_0.ComparisonOpsType',
        propertyInfos: [{
            name: 'expression',
            collection: true,
            elementName: 'expression',
            typeInfo: 'Filter_1_0_0.ExpressionType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'ComparisonOpsType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'SortByType',
        propertyInfos: [{
            type: 'element',
            name: 'sortProperty',
            collection: true,
            elementName: 'SortProperty',
            typeInfo: 'Filter_1_0_0.SortPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DistanceBufferType',
        baseTypeInfo: 'Filter_1_0_0.SpatialOpsType',
        propertyInfos: [{
            type: 'element',
            name: 'propertyName',
            elementName: 'PropertyName',
            typeInfo: 'Filter_1_0_0.PropertyNameType'
          }, {
            name: 'geometry',
            elementName: {
              localPart: '_Geometry',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_2_1_2.AbstractGeometryType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'distance',
            elementName: 'Distance',
            typeInfo: 'Filter_1_0_0.DistanceType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FunctionType',
        baseTypeInfo: 'Filter_1_0_0.ExpressionType',
        propertyInfos: [{
            name: 'expression',
            collection: true,
            elementName: 'expression',
            typeInfo: 'Filter_1_0_0.ExpressionType',
            type: 'elementRef'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LiteralType',
        propertyInfos: [{
            name: 'content',
            collection: true,
            typedObjectAllowed: true,
            mixed: true,
            type: 'anyElement'
          }]
      }, {
        type: 'classInfo',
        localName: 'PropertyIsBetweenType',
        baseTypeInfo: 'Filter_1_0_0.ComparisonOpsType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'Filter_1_0_0.ExpressionType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'lowerBoundary',
            elementName: 'LowerBoundary',
            typeInfo: 'Filter_1_0_0.LowerBoundaryType'
          }, {
            type: 'element',
            name: 'upperBoundary',
            elementName: 'UpperBoundary',
            typeInfo: 'Filter_1_0_0.UpperBoundaryType'
          }]
      }, {
        type: 'classInfo',
        localName: 'PropertyNameType',
        baseTypeInfo: 'Filter_1_0_0.ExpressionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'PropertyIsLikeType',
        baseTypeInfo: 'Filter_1_0_0.ComparisonOpsType',
        propertyInfos: [{
            type: 'element',
            name: 'propertyName',
            elementName: 'PropertyName',
            typeInfo: 'Filter_1_0_0.PropertyNameType'
          }, {
            type: 'element',
            name: 'literal',
            elementName: 'Literal',
            typeInfo: 'Filter_1_0_0.LiteralType'
          }, {
            name: 'wildCard',
            typeInfo: 'String',
            attributeName: 'wildCard',
            type: 'attribute'
          }, {
            name: 'singleChar',
            typeInfo: 'String',
            attributeName: 'singleChar',
            type: 'attribute'
          }, {
            name: 'escape',
            typeInfo: 'String',
            attributeName: 'escape',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureIdType',
        propertyInfos: [{
            name: 'fid',
            typeInfo: 'String',
            attributeName: 'fid',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'UnaryLogicOpType',
        baseTypeInfo: 'Filter_1_0_0.LogicOpsType',
        propertyInfos: [{
            name: 'comparisonOps',
            elementName: 'comparisonOps',
            typeInfo: 'Filter_1_0_0.ComparisonOpsType',
            type: 'elementRef'
          }, {
            name: 'spatialOps',
            elementName: 'spatialOps',
            typeInfo: 'Filter_1_0_0.SpatialOpsType',
            type: 'elementRef'
          }, {
            name: 'logicOps',
            elementName: 'logicOps',
            typeInfo: 'Filter_1_0_0.LogicOpsType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'PropertyIsNullType',
        baseTypeInfo: 'Filter_1_0_0.ComparisonOpsType',
        propertyInfos: [{
            type: 'element',
            name: 'propertyName',
            elementName: 'PropertyName',
            typeInfo: 'Filter_1_0_0.PropertyNameType'
          }, {
            type: 'element',
            name: 'literal',
            elementName: 'Literal',
            typeInfo: 'Filter_1_0_0.LiteralType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FilterType',
        propertyInfos: [{
            name: 'spatialOps',
            elementName: 'spatialOps',
            typeInfo: 'Filter_1_0_0.SpatialOpsType',
            type: 'elementRef'
          }, {
            name: 'comparisonOps',
            elementName: 'comparisonOps',
            typeInfo: 'Filter_1_0_0.ComparisonOpsType',
            type: 'elementRef'
          }, {
            name: 'logicOps',
            elementName: 'logicOps',
            typeInfo: 'Filter_1_0_0.LogicOpsType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'featureId',
            collection: true,
            elementName: 'FeatureId',
            typeInfo: 'Filter_1_0_0.FeatureIdType'
          }]
      }, {
        type: 'classInfo',
        localName: 'BBOXType',
        baseTypeInfo: 'Filter_1_0_0.SpatialOpsType',
        propertyInfos: [{
            type: 'element',
            name: 'propertyName',
            elementName: 'PropertyName',
            typeInfo: 'Filter_1_0_0.PropertyNameType'
          }, {
            type: 'element',
            name: 'box',
            elementName: {
              localPart: 'Box',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_2_1_2.BoxType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DistanceType',
        propertyInfos: [{
            name: 'content',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'units',
            typeInfo: 'String',
            attributeName: 'units',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SortPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'propertyName',
            elementName: 'PropertyName',
            typeInfo: 'Filter_1_0_0.PropertyNameType'
          }, {
            type: 'element',
            name: 'sortOrder',
            elementName: 'SortOrder',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'UpperBoundaryType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'Filter_1_0_0.ExpressionType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'LowerBoundaryType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'Filter_1_0_0.ExpressionType',
            type: 'elementRef'
          }]
      }, {
        type: 'enumInfo',
        localName: 'SortOrderType',
        baseTypeInfo: 'String',
        values: ['DESC', 'ASC']
      }],
    elementInfos: [{
        elementName: 'Mul',
        typeInfo: 'Filter_1_0_0.BinaryOperatorType',
        substitutionHead: 'expression'
      }, {
        elementName: 'Sub',
        typeInfo: 'Filter_1_0_0.BinaryOperatorType',
        substitutionHead: 'expression'
      }, {
        elementName: 'PropertyName',
        typeInfo: 'Filter_1_0_0.PropertyNameType',
        substitutionHead: 'expression'
      }, {
        elementName: 'PropertyIsLike',
        typeInfo: 'Filter_1_0_0.PropertyIsLikeType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'expression',
        typeInfo: 'Filter_1_0_0.ExpressionType'
      }, {
        elementName: 'logicOps',
        typeInfo: 'Filter_1_0_0.LogicOpsType'
      }, {
        elementName: 'PropertyIsGreaterThan',
        typeInfo: 'Filter_1_0_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'PropertyIsLessThan',
        typeInfo: 'Filter_1_0_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'Within',
        typeInfo: 'Filter_1_0_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Contains',
        typeInfo: 'Filter_1_0_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Filter',
        typeInfo: 'Filter_1_0_0.FilterType'
      }, {
        elementName: 'PropertyIsNotEqualTo',
        typeInfo: 'Filter_1_0_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'BBOX',
        typeInfo: 'Filter_1_0_0.BBOXType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'And',
        typeInfo: 'Filter_1_0_0.BinaryLogicOpType',
        substitutionHead: 'logicOps'
      }, {
        elementName: 'Div',
        typeInfo: 'Filter_1_0_0.BinaryOperatorType',
        substitutionHead: 'expression'
      }, {
        elementName: 'FeatureId',
        typeInfo: 'Filter_1_0_0.FeatureIdType'
      }, {
        elementName: 'Equals',
        typeInfo: 'Filter_1_0_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Not',
        typeInfo: 'Filter_1_0_0.UnaryLogicOpType',
        substitutionHead: 'logicOps'
      }, {
        elementName: 'PropertyIsNull',
        typeInfo: 'Filter_1_0_0.PropertyIsNullType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'Beyond',
        typeInfo: 'Filter_1_0_0.DistanceBufferType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'comparisonOps',
        typeInfo: 'Filter_1_0_0.ComparisonOpsType'
      }, {
        elementName: 'PropertyIsLessThanOrEqualTo',
        typeInfo: 'Filter_1_0_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'SortBy',
        typeInfo: 'Filter_1_0_0.SortByType'
      }, {
        elementName: 'spatialOps',
        typeInfo: 'Filter_1_0_0.SpatialOpsType'
      }, {
        elementName: 'Add',
        typeInfo: 'Filter_1_0_0.BinaryOperatorType',
        substitutionHead: 'expression'
      }, {
        elementName: 'Overlaps',
        typeInfo: 'Filter_1_0_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Or',
        typeInfo: 'Filter_1_0_0.BinaryLogicOpType',
        substitutionHead: 'logicOps'
      }, {
        elementName: 'Disjoint',
        typeInfo: 'Filter_1_0_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Touches',
        typeInfo: 'Filter_1_0_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'PropertyIsBetween',
        typeInfo: 'Filter_1_0_0.PropertyIsBetweenType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'PropertyIsEqualTo',
        typeInfo: 'Filter_1_0_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'DWithin',
        typeInfo: 'Filter_1_0_0.DistanceBufferType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Literal',
        typeInfo: 'Filter_1_0_0.LiteralType',
        substitutionHead: 'expression'
      }, {
        elementName: 'Intersects',
        typeInfo: 'Filter_1_0_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'PropertyIsGreaterThanOrEqualTo',
        typeInfo: 'Filter_1_0_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'Function',
        typeInfo: 'Filter_1_0_0.FunctionType',
        substitutionHead: 'expression'
      }, {
        elementName: 'Crosses',
        typeInfo: 'Filter_1_0_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }]
  };
  return {
    Filter_1_0_0: Filter_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Filter_1_0_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Filter_1_0_0 = Filter_1_0_0_Module_Factory().Filter_1_0_0;
  }
  else {
    var Filter_1_0_0 = Filter_1_0_0_Module_Factory().Filter_1_0_0;
  }
}