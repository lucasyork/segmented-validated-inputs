

$.widget('ly.svInput', {
    options: {
        items: {            
            actarget: "", // autocomplete source
            key: "",    // pagekey 
            valtarget: "",            
            enabled: true,   // enables/disables segment inputs
            forceUpperCase: true,
            segments: [], // the segments!
            dftype: "-",  // the default type used when not specified in segment -- HardSeparatorType "-", NumericInputType "N", AlphanumericInputType "A", ValidatedInputType "V"
            dflength: 5 //the default maxLength used when all other efforts fail
            //and more?
        }
    },
    _officialValue: "",
    _baseacpath: "",
    _basevalpath: "",

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

        $("#ly-svTBtn").attr("title", "Cancel").click(function () {
            svI.inputModeRevert();
        });
    },

    inputModeRevert: function () {
        var svI = this;
        var originalInput = this.element

        $(".ly-svInput").hide();
        $("#ly-svSBtn").hide();
        originalInput.show().val(svI._officialValue);
        
        $("#ly-svTBtn").attr("title", "Edit...").unbind("click").click(function () {
            svI.inputModeOpen();
        });
    },

    submitValue: function(){
        var svI = this;
        var originalInput = this.element

        //validation stuff here
       
        $(".ly-svInput").each(function () {
            $(this).focus();
        });
        $(".ly-svInput:first").focus();

            if ($("input.ly-svInvalid").length == 0) {

                svI._officialValue = originalInput.val();
                svI.inputModeRevert();
            }
       
    },

    _create: function () {
        var svI = this;
        var originalInput = this.element, originalName = originalInput.attr("name"), originalVal = originalInput.val();
        svI._officialValue = originalVal;
		var disableflag = "";
        if (typeof originalName == "undefined") { originalName = originalInput.attr("id"); }
		if (!svI.options.enabled) { disableflag = "disabled"; }
		var inputTemplate = "<input type='text' class='ly-svInput' " + disableflag + "/>";
		var buttonToggle = "<img src='' title='Edit...' id='ly-svTBtn' />";
		var buttonSubmit = "<img src='' title='Submit' id='ly-svSBtn' />";
        var workingSegment;
        var IsACTargetDefined = svI.genPath(svI.options.actarget, "ac");
        var IsValTargetDefined = svI.genPath(svI.options.valtarget, "val");


        originalInput.after(buttonSubmit);
        originalInput.after(buttonToggle);

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
                var segDroplist = Seg.ddown;
                var segAcid = Seg.acid;
                if (typeof segDroplist != "undefined") { sourcepath = segDroplist; }
                else if (IsACTargetDefined && typeof segAcid != "undefined") { sourcepath = svI._baseacpath + "/" + segAcid; }

                
                if (sourcepath.length > 0) {
                    workingSegment.autocomplete({
                        minLength: 0,
                        delay: 350,
                        source: sourcepath

                    });
                }
            } //end if segType
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
        }
        originalInput.val(originalVal);

        $(".ly-svInput").hide();

        var si = $("input.ly-svInput");

        si.blur(function () {
            var $this = $(this);
            var pat = new RegExp($this.data("pattern"));
            var isValid = false;
			
            if (svI.options.forceUpperCase) { $this.val($this.val().toUpperCase()); }

			if ($this.hasClass("ly-svN") && $this.val().length < $this.attr("minlength"))
			{
				var adds = parseInt($this.attr("minlength") - $this.val().length);
				
				for (var i=0; i < adds; i++)
				{
					$this.val("0" + $this.val());
				}
			}

            

            if ($this.val().match(pat) != null){ 
                if (!($this.val() > $this.attr("max") || $this.val() < $this.attr("min") || $this.val().length > $this.attr("maxlength")))
				{
				isValid = true;
				}			
			}
            
            $("#RepVal").text(isValid); //temporary measure!

            if (!isValid) { $this.addClass("ly-svInvalid");  }
			else { 
			$this.removeClass("ly-svInvalid");		
			}
		
		if ($("input.ly-svInvalid").length == 0)
		{
			var amalgam  = "";
			var piece;
			$(".ly-svInput").each(function(){
				var $t = $(this);
				
				if ($t.data("mask")){piece = $t.data("mask");}
				else {piece = $t.val();}
				amalgam = amalgam + piece;
			});
			
			originalInput.val(amalgam);
			$("#outval").text(originalInput.val());
		}
		
        });
    }


});