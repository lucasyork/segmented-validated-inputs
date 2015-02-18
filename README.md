#Segmented and Validated Inputs
##Description
This JQueryUI widget takes a single text input and separates it into input segments, which each can have separate parameters defined, including validation. 

##Disclaimer
A work in progress. Some planned functionality has not yet been implemented. 

##Dependencies
JQuery, 
JQueryUI (widget base + autocomplete)


##Usage:
```javascript

$("input").svInput(
        {
	segments: [{ ... }, { ... }, ... ], 
		//The following are all optional:
	dftype: "N", 
	dflength: 5,	
	acsource: "",
	validator: "",	 
	key: "",
	enabled: true,   
	forceUpperCase: true,
	showHints: true,
	autoOpen: false,
	autoSubmit: false,
	imgSubmit: "",
	imgOpen: "",
	imgCancel: "",
	imgWorking: "",
	onSubmit: function() { ... }

                });
```

###Parameters:

Name | Description
---- | -----------
`segments`|An array of segment objects (see below)
`dftype`|(optional) The default segment type to use if not specified within the segment definition
`dflength`|(optional) The default maximum length for the segment input if it cannot be determined any other way
`acsource`|(optional) A URL for server-side autocomplete requests.
`validator`|(optional) A URL for server-side validation requests.
`key`|(optional) An additional parameter passed to the `acsource` and `validator` targets, e.g. for PageKey
`enabled`|(optional) If false, disables all segment inputs
`forceUpperCase`|(optional) If true, converts text in segment inputs to uppercase
`showHints`|(optional) If true, displays input placeholder hints in segment inputs
`autoOpen`|(optional) If true, automatically opens the widget on load
`autoSubmit`|(optional) If true, automatically validates (and if valid, submits) the new value(s) when focus leaves the last segment input
`imgSubmit`|(optional) Replaces the default Submit icon
`imgOpen`|(optional) Replaces the default Open/Edit icon
`imgCancel`|(optional) Replaces the default Cancel icon
`imgWorking`|(optional) Replaces the default Working... icon
`onSubmit`|(optional) A callback that fires when submitting, *before* the input change event. 

####Notes
* Buttons can be hidden entirely by setting their respective img parameter to an empty string (ex: `imgCancel: ""`).
* In the `onSubmit` callback function, `this.oldVal` and `this.newVal` can be used to access the original value and the new value respectively.

###Segments:

Each segment object can have a number of properties to control the resulting segment input.

ex:

```javascript

{ type: "N", maxLength: 2, hint: "01", title: "Two-digit number" }

```

All properties are optional; a segment defined as `{ }` will use the widget defaults `dftype` and `dflength` to determine its behavior. 

Property | Format | Description   | Example
------------- | -------- | ------------- | -------
`type`|String| Numeric ("N"), Alphanumeric ("A"), Validated ("V"), or Separator ("-") |`type: "A"` 
`maxLength`|Integer|The maximum number of characters the input will accept |`maxLength: 5` 
`minLength` |Integer|The minimum number of characters the input will accept |`minLength: 3` 
`max`|Integer|The maximum value the input will accept|`max: 256`
`min`|Integer|The minimum value the input will accept|`min: 1`
`name`|String|The name of the input|`name: "Year"`
`hint`|String|The placeholder that describes the input when empty, or how a separator will display between inputs|`hint: "00"`
`title`| String|The tooltip of the input|`title: "Area Code"`
`mask`|String|If set, this overrides the input's value when creating the final output. (Intended for separators.)|`mask: "-"`
`regex`|RegExp|If set, this overrides the default validation RegExp for the input|`regex: /\w/`
`ddown`|String or String Array|An identifier to pass to the autocomplete source, or a hard-coded list of selections for autocomplete|`ddown: "PCO/MO"`, `ddown: ["Alpha", "Beta"]`
`uid`|String| A unique identifier for the input segment, for server-side validation |`uid: "PCO/YR"`

####Notes

* If `maxLength` is not defined, but `max` is, `maxLength` will be set to `max.length`. If neither are defined, it will try to use `min.length`, and then will default to the widget's `dflength` option.
* If `minLength` is not defined, it defaults to `maxLength`: The input will accept that length, no more or less. 
* If `hint` is not defined, but `showHints` is true, it will use `name`. If `name` is also not defined, that input will have no placeholder hint. 
* `hint` for a separator defines how it appears between the input segments. `mask` defines how it appears when the inputs are consolidated into one string. 
* `regex` will override other properties, including `type`. Use it with care.
* `ddown` can be a string, a simple string array, or a JSON array with `[{ label: "Label1", value: "value1" }]` format. (See JQueryUI autocomplete API for details.) 
* If `ddown` is not defined, but `acsource` has been set in the widget settings, it will check for `uid` and use it instead, if possible.
* If `uid` is not defined, but `validator` has been set in the widget settings, and the input is `type: "V"`, it will check for `ddown` and use it instead, if possible.
* If neither `uid` nor `ddown` is defined, that input segment will have no autocomplete or server-side validation (but will otherwise function normally). 

##Acknowledgments

This project was inspired by rgembalik's `jquery-segmented-picker` project, and began as an update to said project, before veering off into a very different direction. None of the original source code remains.