var utils = module.exports = {};

/**
 * Return attribute $name value of element $element.
 * Return null if undefined
 */
utils.attributeValue = function(name,element){
  var attribute = element.attr(name);

  return attribute?attribute.value():null;
};


/**
 * Convert array of $elements to xml with $el as root
 */
utils.arrayToXml = function(el,elements){
  for(var ind in elements){
    if(elements.hasOwnProperty(ind)){
      elements[ind].toXml(el);
    }
  }
};
