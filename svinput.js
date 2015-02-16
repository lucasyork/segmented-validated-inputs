

$.widget('ly.svInput', {
    options: {                    
            acsource: "", // autocomplete source
            validator: "", // validation target
            onSubmit: null, // submit callback
            key: "",    // pagekey
            enabled: true,   // enables/disables segment inputs
            forceUpperCase: true,
            autoOpen: false,
            autoSubmit: false,
            segments: [], // the segments!
            dftype: "-",  // the default type used when not specified in segment -- HardSeparatorType "-", NumericInputType "N", AlphanumericInputType "A", ValidatedInputType "V"
            dflength: 5, //the default maxLength used when all other efforts fail
                //image sources:
            imgSubmit: "data:image/gif;base64,R0lGODlhDAAMAHcAACH5BAEAAAAALAAAAAAMAAwAh5kA/wBWCgBgDQBwBwFmEAJnEARoFAZxEwx7FxR4IRR6IRVlIRduJhlvJxx/KB9+LiByLiCVKSSIMSVjKSuXNSx8OS2QNi5lMjSAQDd8QDybSD9tQEGiSEOZUkOoTUWaUEeVUEumWU2bVE6nV1CgXFGqX1WeXVmaZWStcWutb3Ced3eogHiif4Kug4awjZO9lpkA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhTAAEIHEjwwgaCCDFkQEiQRAcVDAWaKIEiIoAWHkKsGPiCIAcKHway0DBCYIoICFwMrPBAgggAFgaAQNiAQAIFBxxEZCDAQIETFhcEgGBR4ISIAQEAOw==",
            imgOpen: "data:image/gif;base64,R0lGODlhDAAMAPcAAAAAADMAAGYAAJkAAMwAAP8AAAAzADMzAGYzAJkzAMwzAP8zAABmADNmAGZmAJlmAMxmAP9mAACZADOZAGaZAJmZAMyZAP+ZAADMADPMAGbMAJnMAMzMAP/MAAD/ADP/AGb/AJn/AMz/AP//AAAAMzMAM2YAM5kAM8wAM/8AMwAzMzMzM2YzM5kzM8wzM/8zMwBmMzNmM2ZmM5lmM8xmM/9mMwCZMzOZM2aZM5mZM8yZM/+ZMwDMMzPMM2bMM5nMM8zMM//MMwD/MzP/M2b/M5n/M8z/M///MwAAZjMAZmYAZpkAZswAZv8AZgAzZjMzZmYzZpkzZswzZv8zZgBmZjNmZmZmZplmZsxmZv9mZgCZZjOZZmaZZpmZZsyZZv+ZZgDMZjPMZmbMZpnMZszMZv/MZgD/ZjP/Zmb/Zpn/Zsz/Zv//ZgAAmTMAmWYAmZkAmcwAmf8AmQAzmTMzmWYzmZkzmcwzmf8zmQBmmTNmmWZmmZlmmcxmmf9mmQCZmTOZmWaZmZmZmcyZmf+ZmQDMmTPMmWbMmZnMmczMmf/MmQD/mTP/mWb/mZn/mcz/mf//mQAAzDMAzGYAzJkAzMwAzP8AzAAzzDMzzGYzzJkzzMwzzP8zzABmzDNmzGZmzJlmzMxmzP9mzACZzDOZzGaZzJmZzMyZzP+ZzADMzDPMzGbMzJnMzMzMzP/MzAD/zDP/zGb/zJn/zMz/zP//zAAA/zMA/2YA/5kA/8wA//8A/wAz/zMz/2Yz/5kz/8wz//8z/wBm/zNm/2Zm/5lm/8xm//9m/wCZ/zOZ/2aZ/5mZ/8yZ//+Z/wDM/zPM/2bM/5nM/8zM///M/wD//zP//2b//5n//8z//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAANcALAAAAAAMAAwAAAg/AK8JHDiwQAGCCA2yEoBQIIACCxkiBMAqYkOKrBwAuMhqhEaOHjdO7PgRoRUAIRteA3BSpEkALFVes2JFpsCAADs=",
            imgCancel: "data:image/gif;base64,R0lGODlhDAAMAJH/AP///4CAwABAgAAAACH5BAEAAAAALAAAAAAMAAwAQAIdhI8ZAhLZnlmwQseSyGfbGkgHhTgACS0cgppfUgAAO6BAAMBAAOBAAABgACBgAEBgAGBgAIBgAKBgAMBgAOBgAACAACCAAECAAGCAAICAAKCAAMCAAOCAAACgACCgAECgAGCgAICgAKCgAMCgAOCgAADAACDAAEDAAGDAAIDAAKDAAMDAAODAAADgACDgAEDgAGDgAIDgAKDgAMDgAODgAAAAQCAAQEAAQGAAQIAAQKAAQMAAQOAAQAAgQCAgQEAgQGAgQIAgQKAgQMAgQOAgQABAQCBAQEBAQGBAQIBAQKBAQMBAQOBAQABgQCBgQEBgQGBgQIBgQKBgQMBgQOBgQACAQCCAQECAQGCAQICAQKCAQMCAQOCAQACgQCCgQECgQGCgQICgQKCgQMCgQOCgQADAQCDAQEDAQGDAQIDAQKDAQMDAQODAQADgQCDgQEDgQGDgQIDgQKDgQMDgQODgQAAAgCAAgEAAgGAAgIAAgKAAgMAAgOAAgAAggCAggEAggGAggIAggKAggMAggOAggABAgCBAgEBAgGBAgIBAgKBAgMBAgOBAgABggCBggEBggGBggIBggKBggMBggOBggACAgCCAgECAgGCAgICAgKCAgMCAgOCAgACggCCggECggGCggICggKCggMCggOCggADAgCDAgEDAgGDAgIDAgKDAgMDAgODAgADggCDggEDggGDggIDggKDggMDggODggAAAwCAAwEAAwGAAwIAAwKAAwMAAwOAAwAAgwCAgwEAgwGAgwIAgwKAgwMAgwOAgwABAwCBAwEBAwGBAwIBAwKBAwMBAwOBAwABgwCBgwEBgwGBgwIBgwKBgwMBgwOBgwACAwCCAwECAwGCAwICAwKCAwMCAwOCAwACgwCCgwECgwGCgwICgwKCgwMCgwOCgwADAwCDAwEDAwGDAwIDAwKDAwP/78KCgpICAgP8AAAD/AP//AAAA//8A/wD//////yH5BAAAAAAALAAAAAAMAAwAAAgyAP8JHEiwoMGDCP+RI1eQHCSCkBgKdGgwosKHByNiPOhwY8OHFj8ODCkQksd/JhMWDAgAOw==",
            imgWorking:"data:image/gif;base64,R0lGODlhEAAQAPMPALu7u5mZmTMzM93d3REREQAAAHd3d1VVVWZmZqqqqoiIiO7u7kRERCIiIgARAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAPACwAAAAAEAAQAEAEcPDJtyg6dUrFetDTIopMoSyFcxxD1krD8AwCkASDIlPaUDQLR6G1Cy0SgqIkE1IQGMrFAKCcGWSBzwPAnAwarcKQ15MpTMJYd1ZyUDXSDGelBY0qIoBh/ZoYGgELCjoxCRRvIQcGD1kzgSAgAACQDxEAIfkEBQcADwAsAAAAAA8AEAAABF3wyfkMkotOJpscRKJJwtI4Q1MAoxQ0RFBw0xEvhGAVRZZJh4JgMAEQW7TWI4EwGFjKR+CAQECjn8DoN0kwDtvBT8FILAKJgfoo1iAGAPNVY9DGJXNMIHN/HJVqIxEAIfkEBQcADwAsAAAAABAADwAABFrwyfmColgiydpaQiY5x9Ith7hURdIl0wBIhpCAjKIIxaAUPQ0hFQsAC7MJALFSFi4SgC4wyHyuCYNWxH3AuhSEotkNGAALAPqqkigG8MWAjAnM4A8594vPUyIAIfkEBQcADwAsAAAAABAAEAAABF3wySkDvdKsddg+APYIWrcg2DIRQAcU6DJICjIsjBEETLEEBYLqYSDdJoCGiHgZwG4LQCCRECEIBAdoF5hdEIWwgBJqDs7DgcKyRHZl3uUwuhm2AbNNW+LV7yd+FxEAIfkEBQcACAAsAAAAABAADgAABEYQyYmMoVgeWQrP3NYhBCgZBdAFRUkdBIAUguVVo1ZsWFcEGB5GMBkEjiCBL2a5ZAi+m2SAURExwKqPiuCafBkvBSCcmiYRACH5BAUHAA4ALAAAAAAQABAAAARs0MnpAKDYrbSWMp0xZIvBKYrXjNmADOhAKBiQDF5gGcICNAyJTwFYTBaDQ0HAkgwSmAUj0OkMrkZM4HBgKK7YTKDRICAo2clAEIheKc9CISjEVTuEQrJASGcSBQcSUFEUDQUXJBgDBW0Zj34RACH5BAUHAA8ALAAAAAAQABAAAARf8Mn5xqBYgrVC4EEmBcOSfAEjSopJMglmcQlgBYjE5NJgZwjCAbO4YBAJjpIjSiAQh5ayyRAIDKvJIbnIagoFRFdkQDQKC0RBsCIUFAWsT7RwG410R8HiiK0WBwJjFBEAIfkEBQcADgAsAQABAA8ADwAABFrQybEWADXJLUHHAMJxIDAgnrOo2+AOibEMh1LN62gIxphzitRoCDAYNcNN6FBLShao4WzwHDQKvVGhoFAwGgtFgQHENhoB7nCwHRAIC0EyUcC8Zw1ha3NIRgAAIfkEBQcADwAsAAAAABAAEAAABGDwyfnWoljaNYYFV+Zx3hCEGEcuypBtMJBISpClAWLfWODymIFiCJwMDMiZBNAAYFqUAaNQ2E0YBIXGURAMCo1AAsFYBBoIScBJEwgSVcmP0li4FwcHz+FpCCQMPCFINxEAIfkEBQcADgAsAAABABAADwAABFzQyemWXYNqaSXY2vVtw3UNmROM4JQowKKlFOsgRI6ASQ8IhSADFAjAMIMAgSYJtByxyQIhcEoaBcSiwegpDgvAwSBJ0AIHBoCQqIAEi/TCIAABGhLG8MbcKBQgEQAh+QQFBwAPACwAAAEAEAAPAAAEXfDJSd+qeK5RB8fDRRWFspyotAAfQBbfNLCVUSSdKDV89gDAwcFBIBgywMRnkWBgcJUDKSZRIKAPQcGwYByAAYTEEJAAJIGbATEQ+B4ExmK9CDhBd8ThdHw/AmUYEQAh+QQFBwAPACwAAAEADwAPAAAEXvBJQIa8+ILSspdHkXxS9wxF4Q3L2aTBeC0sFjhAtuyLIjAMhYc2GBgaSKGuyNoBDp7czFAgeBIKwC6kWCAMxUSAFjtNCAAFGGF5tCQLAaJnWCTqHoREvQuQJAkyGBEAOw=="
    },

    _officialValue: "",
    _tempValue: "",
    _baseacpath: "",
    _basevalpath: "",
    oldVal: "",
    newVal: "",

    _destroy: function () {
        this.element.show();
        this.element.unbind('click');
        //unhide?
    },

    genPath: function(target, basepath){
        var svI = this;
        var atg = target, akey = svI.options.key;
        var pathy = "";
        if (typeof atg != "undefined") {
            if (atg.length > 0) {
                pathy = atg;
            }
        }
        if (typeof akey != "undefined") {
            if (akey.length > 0 && pathy.length > 0) {
                pathy = pathy + "/" + akey;
            }
        }
        
        if (pathy.length > 0) {
            if (basepath == "ac") { svI._baseacpath = pathy; }
            else if (basepath == "val") { svI._basevalpath = pathy; }            
            return true;
        } else { return false; }

    },
       
    inputModeOpen: function () {
        var svI = this;
        var originalInput = this.element
        
        originalInput.hide();
        $(".ly-svInput").show();
        $("#ly-svSBtn").show();
        if (svI.options.imgCancel.length > 0) {
            if (svI.options.imgOpen.length > 0) {
                $("#ly-svTBtn").attr("title", "Cancel").attr("src", svI.options.imgCancel).click(function () {
                    svI.inputModeRevert();
                });
            } else {
                svI.element.after("<img src='" + svI.options.imgCancel + "' title='Cancel' id='ly-svTBtn' />");
                $("#ly-svTBtn").click(function () {
                    var $this = $(this);
                    $this.remove();
                    svI.inputModeRevert();
                });
            }

        } else {
            $("#ly-svTBtn").hide();
        }
        
    },

    inputModeRevert: function () {
        var svI = this;
        var originalInput = this.element

        $(".ly-svInput").hide();
        $("#ly-svSBtn").hide();
        $("#ly-svWBtn").hide();
        originalInput.show().val(svI._officialValue);
        
        $("#ly-svTBtn").attr("title", "Edit...").attr("src", svI.options.imgOpen).unbind("click").show().click(function () {
            svI.inputModeOpen();
        });
    },

    submitValue: function(){
        var svI = this;
        var originalInput = this.element;
        var waitfor = [];

        $("#ly-svWBtn").show();
        $("#ly-svSBtn").hide();

        //validation stuff
        $(".ly-svA, .ly-svN").each(function () {
            var $this = $(this);
                waitfor.push(svI.blurValidation($this));               
            });

        if ($("input.ly-svInvalid").length == 0) {

            $(".ly-svV").each(function () {
                var $this = $(this);
                if (svI._basevalpath.length > 0) {
                    waitfor.push(svI.ssValidation($this));
                }
            });

            $.when.apply($, waitfor).done(function () {
                if ($("input.ly-svInvalid").length == 0) {

                    //submission stuff
                    svI._officialValue = svI._tempValue;
                    originalInput.val(svI._officialValue);
                    svI.newVal = svI._officialValue;
                    if (svI.options.onSubmit != null) { svI.options.onSubmit.call(svI); }
                    originalInput.change(); //force a change event
                    svI.oldVal = svI._officialValue;
                    svI.inputModeRevert();
                } else {
                    $("#ly-svSBtn").show();
                    $("#ly-svWBtn").hide();
                }
            });
        } else {
            $("#ly-svSBtn").show();
            $("#ly-svWBtn").hide();
        }

        
    },

    blurValidation: function (input) {
        var svI = this;
        var pat = new RegExp(input.data("pattern"));
        var isValid = false;
        var dfd = $.Deferred();

        if (svI.options.forceUpperCase) { input.val(input.val().toUpperCase()); }

        if ((input.hasClass("ly-svN") || input.hasClass("ly-svV")) && input.val().length < input.attr("minlength")) {
            var adds = parseInt(input.attr("minlength") - input.val().length);

            for (var i = 0; i < adds; i++) {
                input.val("0" + input.val());
            }
        }

        if (input.val().match(pat) != null) {
            if (!(input.val() > input.attr("max") || input.val() < input.attr("min") || input.val().length > input.attr("maxlength"))) {
                isValid = true;
            }
        }

        if (!isValid) { input.addClass("ly-svInvalid"); }
        else {
            input.removeClass("ly-svInvalid");
        }

         dfd.resolve(); 

        return dfd.promise();
    },

    ssValidation: function (input) {
        var svI = this;
        var sid = input.data("uid");
        if (typeof sid == "undefined") { sid = input.data("dd"); }
        if (typeof sid == "undefined" || typeof sid == "object") { sid = false; }
        var dfd = $.Deferred();

        if (sid) {
            var vurl = svI._basevalpath + "/" + sid;
            $.ajax({
                type: 'POST',
                data: input.val(),
                url: vurl,
                async: true
            }).done(function (response) {
                if (response == "0") { input.addClass("ly-svInvalid"); }
                else { input.addClass("ly-svValid") }
                dfd.resolve();
            });
        } else { dfd.resolve(); }
        return dfd.promise();
    },

    _create: function () {
        var svI = this;
        var originalInput = this.element, originalName = originalInput.attr("name"), originalVal = originalInput.val();
        svI._officialValue = originalVal;
        svI.oldVal = originalVal;
		var disableflag = "";
        if (typeof originalName == "undefined") { originalName = originalInput.attr("id"); }
		if (!svI.options.enabled) { disableflag = "disabled"; }
		var inputTemplate = "<input type='text' class='ly-svInput' " + disableflag + "/>";
		var buttonToggle;
	    	if (svI.options.imgOpen.length > 0) { buttonToggle = "<img src='" + svI.options.imgOpen + "' title='Edit...' id='ly-svTBtn' />"; }
		var buttonSubmit;
		    if (svI.options.imgSubmit.length > 0) { buttonSubmit = "<img src='" + svI.options.imgSubmit + "' title='Submit' id='ly-svSBtn' />"; }
	    var waitgif;
		    if (svI.options.imgWorking.length > 0) { waitgif = "<img src='" + svI.options.imgWorking + "' title='Please wait...' id='ly-svWBtn' />"; }
        var workingSegment;
        var IsACTargetDefined = svI.genPath(svI.options.acsource, "ac");
        var IsValTargetDefined = svI.genPath(svI.options.validator, "val");
        
        originalInput.after(buttonSubmit);
        originalInput.after(waitgif);
        originalInput.after(buttonToggle);

        $("#ly-svWBtn").hide();

        $("#ly-svSBtn").hide().click(function(){
            svI.submitValue();
        });

        $("#ly-svTBtn").click(function(){
            svI.inputModeOpen();
        });

                    //For each segment...
        for (var i = 0; i < svI.options.segments.length; i++) {
            var Seg = svI.options.segments[i];
            var segType = Seg.type;
            var segLength = Seg.maxLength, segMinLength = Seg.minLength, segMax = Seg.max, segMin = Seg.min;
            var segHint = Seg.hint, segTitle = Seg.title, segMask = Seg.mask;
            var segDroplist = Seg.ddown, segAcid = Seg.uid;

            if (typeof segLength == "undefined") {
                if (typeof segMax == "undefined") {
                    if (typeof segMin == "undefined") {
                        segLength = svI.options.dflength;
                    } else {
                        segLength = segMin.toString().length;
                    }
                } else {
                    segLength = segMax.toString().length;
                }
            }
            if (typeof segHint == "undefined") { segHint = ""; }
			if (typeof segMinLength == "undefined") { segMinLength = segLength; }
            if (typeof segType == "undefined") { segType = svI.options.dftype; }
            if (typeof segTitle == "undefined") { segTitle = segHint; }

            if (segType == "A" || segType == "N" || segType == "V") {
                workingSegment = $(inputTemplate).addClass("ly-sv" + segType)
                    .attr("id", originalName + "_i" + i)
                    .attr("maxlength", segLength)
					.attr("minlength", segMinLength)
                    .attr("size", segLength)
                    .attr("placeholder", segHint)
                    .attr("title", segTitle);
			if (typeof segMax != "undefined") { workingSegment.attr("max", segMax); }
			if (typeof segMin != "undefined") { workingSegment.attr("min", segMin); }
			if (typeof segMask != "undefined") { workingSegment.data("mask", segMask); }
			if (typeof segAcid != "undefined") { workingSegment.data("uid", segAcid); }
			if (typeof segDroplist != "undefined") { workingSegment.data("dd", segDroplist); }

					//regex logic
		var segregN = new RegExp("\\d{" + segMinLength + "," +  segLength + "}");  //numeric regex
        var segregA = new RegExp("\\w{" + segMinLength + "," +  segLength + "}"); //alphanumeric regex
        var segregV = new RegExp("\\w{" + segMinLength + "," +  segLength + "}"); //validated regex 
		
                if (typeof Seg.regex != "undefined") {
                    workingSegment.data("pattern", Seg.regex);
                } else {
                    var segReg = "";
						 if (segType == "N") { segReg = segregN; }
                    else if (segType == "A") { segReg = segregA; }
                    else if (segType == "V") { segReg = segregV; }
                    workingSegment.data("pattern", segReg);
                }

                originalInput.before(workingSegment);

                //splitting the original value into the segment(s)
                var slice;
                if (segLength == segMinLength) {
                     slice = originalInput.val().substring(0, segLength);

                    workingSegment.val(slice);
                    originalInput.val(originalInput.val().substring(segLength));
                }
                else {
                    var fs = originalInput.val().indexOf("-");
                    if (fs > 0) {
                         slice = originalInput.val().substring(0, fs);

                        workingSegment.val(slice);
                        originalInput.val(originalInput.val().substring(fs));
                    }
                    else if (originalInput.val().length <= segLength) {
                        slice = originalInput.val();

                        workingSegment.val(slice);
                        originalInput.val("");
                    }
                    else {
                        console.warn("Unable to parse original value into segmented inputs");
                        originalInput.val("");
                        
                    }
                }

                //autocomplete
                var sourcepath = "";
                
                if (typeof segDroplist == "object") { sourcepath = segDroplist; }
                else if (IsACTargetDefined && typeof segDroplist == "string") { sourcepath = svI._baseacpath + "/" + segDroplist; }
                else if (IsACTargetDefined && typeof segAcid != "undefined") { sourcepath = svI._baseacpath + "/" + segAcid; }
                
                if (sourcepath.length > 0) {
                    workingSegment.autocomplete({
                        minLength: 0,
                        delay: 350,
                        source: sourcepath
                    });
                }

            } //end if 
            else if (segType == "-") {
				
				if (typeof segMask == "undefined") { segMask = ""; }
				
                workingSegment = $("<span class='ly-svInput ly-separator' data-mask='" + segMask + "'>" + segHint + "</span>");
                originalInput.before(workingSegment);

                if (originalInput.val().substring(0, segMask.length) == segMask) {
                    originalInput.val(originalInput.val().substring(segMask.length));
                }
            }
            else {
                console.log(segType + " is not a valid input segment type");
            }
        } // end for each segment
        originalInput.val(originalVal);

        $(".ly-svInput").hide();

        var si = $("input.ly-svInput");


            //Validation on blur
        si.blur(function () {
            var $this = $(this);
            svI.blurValidation($this);

            if ($this.hasClass("ly-svV")) {
                if (IsValTargetDefined) {
                    svI.ssValidation($this);
                }
            }

            //If nothing invalid...
            if ($("input.ly-svInvalid").length == 0) {
                var amalgam = "";
                var piece;
                $(".ly-svInput").each(function () {
                    var $t = $(this);

                    if ($t.data("mask")) { piece = $t.data("mask"); }
                    else { piece = $t.val(); }
                    amalgam = amalgam + piece;
                });

                //new value into original input
                svI._tempValue = amalgam;
                $("#outval").text(svI._tempValue); //temporary!
            }

        }); //end on blur

        if (svI.options.autoSubmit) {
            var lastInput = $("input.ly-svInput:last");
            lastInput.blur(function () {
                svI.submitValue();
            });
        }

        if (svI.options.autoOpen) { svI.inputModeOpen(); }
        
    } //end _create
});