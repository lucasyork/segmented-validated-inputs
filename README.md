#Segmented and Validated Inputs
##Description
This JQueryUI widget takes a single text input and separates it into input segments, which each can have separate parameters defined, including validation. 

##Disclaimer
Still very much a work in progress. Some planned functionality has not yet been implemented. 

##Dependencies
JQuery, 
JQueryUI (widget base + autocomplete)


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
	actarget: "",
	valtarget: "", 
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
`actarget`|(optional) A URL for server-side autocomplete requests.
`valtarget`| (optional) (Not yet functional!) A URL for server-side validation requests. 
`key`|(optional) An additional parameter passed to `actarget` and `valtarget`, e.g. for PageKey.

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
regex| RegExp|If set, this overrides the default validation RegExp for the input| `regex: /\w/`
ddown| String Array|A hard-coded list of selections for autocomplete| `ddown: ["Alpha", "Beta"]`
acid| String| A unique identifier for the input segment, for server-side autocomplete | `acid: "PCO/YR"`

###Notes

* If `maxLength` is not defined, but `max` is, `maxLength` will be set to `max.length`. If neither are defined, it will try to use `min.length`, and then will default to the widget's `dflength` option.
* If `minLength` is not defined, it defaults to `maxLength`: The input will accept that length, no more or less. 
* `hint` for a separator defines how it appears between the input segments. `mask` defines how it appears when the inputs are consolidated into one string. 
* `regex` will override other properties, including `type`. Use it with care.
* If `ddown` is defined, `acid` is ignored. If neither is defined, that input segment will simply not have any autocomplete.
* `ddown` can be a simple string array, or a JSON array with `[{ label: "Label1", value: "value1" }]` format. (See JQueryUI autocomplete API for details.) 

##Acknowledgments

This project was inspired by rgembalik's `jquery-segmented-picker` project, and began as an update to said project, before veering off into a very different direction. None of the original source code remains.