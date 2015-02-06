#Segmented and Validated Inputs
##Description
This JQueryUI widget takes a single text input and separates it into input segments, which each can have separate parameters defined, including validation. 

##Disclaimer
Still very much a work in progress. Some planned functionality has not yet been implemented. 

##Dependencies
JQuery
JQueryUI


##Usage:
```javascript

$("input").svInput(
        {
	segments: [{ ... }, { ... }, ... ], 
		//The following are all optional:
	enabled: true,   
	forceUpperCase: true,  
	dftype: "N", 
	dflength: 5, 
	target: "", 
	key: "",    
                });
```

###Parameters:

Name | Description
---- | -----------
`segments`|An array of segment objects (see below)
`enabled`|(optional) If false, disables all segment inputs
`forceUpperCase`|(optional) if true, converts text in segment inputs to uppercase
`dftype`|(optional) The default segment type to use if not specified within the segment definition
`dflength`|(optional) The default maximum length for the segment input if it cannot be determined any other way
`target`|(optional) (Not yet functional!) 
`key`|(optional) (Not yet functional!)

###Segments:

Each segment object can have a number of properties to control the resulting segment input.

ex:

```javascript

{ type: "N", maxLength: 2, hint: "01", title: "Two-digit number" }

```

All properties are optional, though note that `type` must be defined in the widget setting `dftype` if it is ommitted in the segment definition.

Property | Format | Description   | Example
------------- | -------- | ------------- | -------
Type|String| Numeric ("N"), Alphanumeric ("A"), Validated ("V"), or Separator ("-") | `type: "A"` 
maxLength| Integer |The maximum number of characters the input will accept |   `maxLength: 5` 
minLength | Integer |The minimum number of characters the input will accept |  `minLength: 3` 
max| Integer|The maximum value the input will accept| `max: 256`
min| Integer|The minimum value the input will accept| `min: 1`
hint| String|The placeholder that describes the input when empty, or how a separator will display between inputs| `hint: "00"`
title| String|The tooltip of the input| `title: "Area Code"`
mask| String|If set, this overrides the input's value when creating the final output. (Intended for separators.)| `mask: "-"`

##Acknowledgments

This project was inspired by rgembalik's `jquery-segmented-picker` project, and began as an update to said project, before veering off into a very different direction. None of the original source code remains.