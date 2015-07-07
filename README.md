#Segmented and Validated Inputs
##Description
This JQueryUI widget takes a single text input and separates it into input segments, which each can have separate parameters defined, including validation. 

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
	afsource: "",
	validator: "",
	postdata: [{ ... }],
	enableSegments: true,
	enableOriginal: false,   
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
`acsource`|(optional) A URL for server-side autocomplete requests
`afsource`|(optional) A URL for server-side auto-fill requests
`validator`|(optional) A URL for server-side validation requests
`postdata`|(optional) An array of key-value pairs sent to the server in post for server-side validation and auto-fill requests
`enableSegments`|(optional) If false, disables all segment inputs
`enableOriginal`|(optional) If false, the original input is made readonly
`forceUpperCase`|(optional) If true, converts text in segment inputs to uppercase
`showHints`|(optional) If true, displays input placeholder hints in segment inputs
`autoOpen`|(optional) If true, automatically opens the widget on load
`autoSubmit`|(optional) If true, automatically validates (and if valid, submits) the new value(s) when focus leaves the last segment input
`imgSubmit`|(optional) Replaces the default Submit icon
`imgOpen`|(optional) Replaces the default Open/Edit icon
`imgCancel`|(optional) Replaces the default Cancel icon
`imgWorking`|(optional) Replaces the default Working... icon
`onSubmit`|(optional) A callback that fires when submitting, *before* the input change event. 

#####Notes
* `postdata`, if defined, will be included in validation and auto-fill requests (but not autocomplete) for every segment input.
* Buttons can be hidden entirely by setting their respective img parameter to an empty string (ex: `imgCancel: ""`).
* In the `onSubmit` callback function, `this.oldVal` and `this.newVal` can be used to access the original value and the new value respectively.

###Segments:

Each segment object can have a number of properties to control the resulting segment input.

ex:

```javascript

{ type: "N", maxLength: 2, hint: "01", title: "Two-digit number" }

```

All properties are optional, though of course certain functionality does require certain properties. A segment defined as `{ }` will use the widget defaults `dftype` and `dflength` to determine its behavior. 

Property | Format | Description   | Example
------------- | -------- | ------------- | -------
`type`|String| Numeric ("N"), Alphanumeric ("A"), Validated ("V"), Auto-fill ("F"), or Separator ("-") (See below)|`type: "A"` 
`maxLength`|Integer|The maximum number of characters the input will accept |`maxLength: 5` 
`minLength` |Integer|The minimum number of characters the input will accept |`minLength: 3` 
`max`|Integer|The maximum value the input will accept|`max: 256`
`min`|Integer|The minimum value the input will accept|`min: 1`
`name`|String|The name of the input|`name: "Year"`
`hint`|String|The placeholder that describes the input when empty, or how a separator will display between inputs|`hint: "00"`
`title`|String|The tooltip of the input|`title: "Area Code"`
`dfval`|String or Integer|The value the segment input should start with, if not otherwise filled|`dfval: 000`
`mask`|String|If set, this overrides the input's value when creating the final output. (Intended for separators.)|`mask: "-"`
`regex`|RegExp|If set, this overrides the default validation RegExp for the input|`regex: /\w/`
`ddown`|String or String Array|An identifier to pass to the autocomplete source, or a hard-coded list of selections for autocomplete|`ddown: "PCO/MO"`, `ddown: ["Alpha", "Beta"]`
`reqAC`|Boolean|Whether the segment input should allow only values from the autocomplete source list| `reqAC: true`
`ssdata`|Array|An array of key-value pairs sent to the server in post for server-side validation and auto-fill requests|`ssdata: [{ key1: "value1", key2: "value2" }]`

####Segment Types

Type | Behavior
---------| -------------
Numeric (`type: "N"`)|Numeric input segments by default accept only numeric values within the bounds of their `max` and `min` properties, if defined. If a user input is too short compared to `minLength`, zeroes will be fronted to reach an acceptable length.
Alphanumeric (`type: "A"`)|Alphanumeric input segments by default accept letters and numbers. If a user input is too short compared to `minLength`, it will simply be marked invalid. 
Validated (`type: "V"`)|Validated input segments attempt to ask a server (via ajax post) whether their values are valid. If a validated segment cannot talk to the server, it will prevent submission.
Auto-fill (`type: "F"`)|Auto-fill segments attempt to ask a server (via ajax post) what their values should be. If an auto-fill segment cannot talk to the server, it will prevent submission.
Separator (`type: "-"`)|Separators allow for text and/or space between segment inputs. `hint` defines how the separator appears between inputs; `mask` defines how the separator appears in the final consolidated value. 


#####Notes

* If `maxLength` is not defined, but `max` is, `maxLength` will be set to `max.length`. If neither are defined, it will try to use `min.length`, and then will default to the widget's `dflength` option.
* If `minLength` is not defined, it defaults to `maxLength`: The input will accept that length, no more or less.
* `regex` can be used to modify a segment input's accepted values, but not the base behavior of its type: Numeric will zero-front, Alphanumeric will not, etc.
* If `hint` is not defined, but `showHints` is true, it will use `name`. If `name` is also not defined, that input will have no placeholder hint.
* `dfval` will only affect the segment input if the widget does not otherwise fill that segment input with a piece of the original input's value (e.g. if the original input had no value). 
* If `ddown` is not defined, that segment input will have no autocomplete dropdown.
* `ddown` can be a string, a simple string array, or a JSON array with `[{ label: "Label1", value: "value1" }]` format. (See JQueryUI autocomplete API for details.)
* If `reqAC` is not defined, or is anything other than `true`, it defaults to false. 
* `ssdata` and `postdata` are merged together and then included as *data* when posting to the server.


##Status
Not currently in active development. v1.7 is the final planned release, barring bugfixes.

##Acknowledgments

This project was inspired by rgembalik's `jquery-segmented-picker` project, and began as an update to said project, before veering off into a very different direction. None of the original source code remains.