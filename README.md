Akamai Edns
===========

A library for easy manipulation of akamai edns zones represented in xml.


Install
========

```
npm install --save sk91/akamai-edns-parser
```


Usage
======
##Edns

###fromXml(xml)    //  (Static to class)
Creates Edns parsed object from xml.

```
var Edns = require("akamai-edns-parser");


var edns = Edns.fromXml(akamai_xml);

console.log(edns.getRecords()[0].ttl);

```


###toXml()

Creates xml form Edns object
```
var edns = new Edns(
  "token",
  "id",
  "instance",
  "name",
  "publisher",
  "time",
  "version"
);


var record = new Edns.Record(
  "a",              //record type
  {                 //record attributes (you've got free reign here )
  "ttl": "200",
  "b": "a"
  }
);

edns.addRecord(record);

console.log(edns.toXml());

```

Output:
```
<?xml version="1.0"?>
<zone_configuration token="token">
  <zone id="id" instance="instance" name="name" publisher="publisher" time="time" version="version">
    <a ttl="200" b="a"/>
  </zone>
</zone_configuration>
```


###constructor:
```
var edns = new Edns(
  "token",              //api token
  "id",                 //zone id
  "instance",
  "name",                //zone name
  "publisher",
  "time",                //update time
  "version"              // zone version
);

```

###setToken(token)
Sets the api token

###addRecord(record)
Adds a new record to the record list

###getRecords()
Returns records list in the zone


## Record


###Record types:
"a", "aaaa", "soa", "ns", "mx", "txt", "cname", "dname", "ptr", 'spf', 'srv'

###constructor

```
var record = new Edns.Record(
  "a",              //record type
  {                 //record attributes (you've got free reign here )
  "ttl": "200",
  "b": "a"
  }
);

```

###addAttributes(attributes)
Marges the new attributes with the old ones

###removeAllAttributes
Removes all attributes from the record

###toXml()
Translate the record to its xml representation

```
var xml = record.toXml();

console.log(xml);

```

Output:
```
<a ttl="200" b="a"/>
```

###fromXml(xml)             //Static to class
Translates xml to its record representation


```
var record = Edns.Record.fromXml('<a ttl="200" b="a"/>');

console.log("The attribute values are: " , record.ttl, record.b);

```

Output:

```
The attribute values are:  200 a

```


###isRecord(record)         //Static to class
Checks if a record is valid (if it's type is in alloved record types)



Development
===========

To run tests:

```
npm test
```
