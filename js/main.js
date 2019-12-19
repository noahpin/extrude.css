var dropdown = document.getElementById('dropdown');
var btn = document.getElementById('extrudeBtn');
var text = document.getElementById('text');

console.log(dropdown.value);
function getNewClass(){
    var classes = ['extrude-small-br-b-h','extrude-medium-br-b-h','extrude-large-br-b-h','extrude-xlarge-br-b-h','extrude-small-br-b','extrude-medium-br-b','extrude-large-br-b','extrude-xlarge-br-b',
                   'extrude-small-br-t-h','extrude-medium-br-t-h','extrude-large-br-t-h','extrude-xlarge-br-t-h','extrude-small-br-t','extrude-medium-br-t','extrude-large-br-t','extrude-xlarge-br-t',
                   'extrude-small-br-t-b-h','extrude-medium-br-tb-h','extrude-large-br-tb-h','extrude-xlarge-br-tb-h','extrude-small-br-tb','extrude-medium-br-tb','extrude-large-br-tb','extrude-xlarge-br-tb',

                   'extrude-small-b-b-h','extrude-medium-b-b-h','extrude-large-b-b-h','extrude-xlarge-b-b-h','extrude-small-b-b','extrude-medium-b-b','extrude-large-b-b','extrude-xlarge-b-b',
                   'extrude-small-b-t-h','extrude-medium-b-t-h','extrude-large-b-t-h','extrude-xlarge-b-t-h','extrude-small-b-t','extrude-medium-b-t','extrude-large-b-t','extrude-xlarge-b-t',
                   'extrude-small-b-t-b-h','extrude-medium-b-tb-h','extrude-large-b-tb-h','extrude-xlarge-b-tb-h','extrude-small-b-tb','extrude-medium-b-tb','extrude-large-b-tb','extrude-xlarge-b-tb',

                   'extrude-small-bl-b-h','extrude-medium-bl-b-h','extrude-large-bl-b-h','extrude-xlarge-bl-b-h','extrude-small-bl-b','extrude-medium-bl-b','extrude-large-bl-b','extrude-xlarge-bl-b',
                   'extrude-small-bl-t-h','extrude-medium-bl-t-h','extrude-large-bl-t-h','extrude-xlarge-bl-t-h','extrude-small-bl-t','extrude-medium-bl-t','extrude-large-bl-t','extrude-xlarge-bl-t',
                   'extrude-small-bl-t-b-h','extrude-medium-bl-tb-h','extrude-large-bl-tb-h','extrude-xlarge-bl-tb-h','extrude-small-bl-tb','extrude-medium-bl-tb','extrude-large-bl-tb','extrude-xlarge-bl-tb',

                   'extrude-small-l-b-h','extrude-medium-l-b-h','extrude-large-l-b-h','extrude-xlarge-l-b-h','extrude-small-l-b','extrude-medium-l-b','extrude-large-l-b','extrude-xlarge-l-b',
                   'extrude-small-l-t-h','extrude-medium-l-t-h','extrude-large-l-t-h','extrude-xlarge-l-t-h','extrude-small-l-t','extrude-medium-l-t','extrude-large-l-t','extrude-xlarge-l-t',
                   'extrude-small-l-t-b-h','extrude-medium-l-tb-h','extrude-large-l-tb-h','extrude-xlarge-l-tb-h','extrude-small-l-tb','extrude-medium-l-tb','extrude-large-l-tb','extrude-xlarge-l-tb',

                   'extrude-small-tl-b-h','extrude-medium-tl-b-h','extrude-large-tl-b-h','extrude-xlarge-tl-b-h','extrude-small-tl-b','extrude-medium-tl-b','extrude-large-tl-b','extrude-xlarge-tl-b',
                   'extrude-small-tl-t-h','extrude-medium-tl-t-h','extrude-large-tl-t-h','extrude-xlarge-tl-t-h','extrude-small-tl-t','extrude-medium-tl-t','extrude-large-tl-t','extrude-xlarge-tl-t',
                   'extrude-small-tl-t-b-h','extrude-medium-tl-tb-h','extrude-large-tl-tb-h','extrude-xlarge-tl-tb-h','extrude-small-tl-tb','extrude-medium-tl-tb','extrude-large-tl-tb','extrude-xlarge-tl-tb',

                   'extrude-small-t-b-h','extrude-medium-t-b-h','extrude-large-t-b-h','extrude-xlarge-t-b-h','extrude-small-t-b','extrude-medium-t-b','extrude-large-t-b','extrude-xlarge-t-b',
                   'extrude-small-t-t-h','extrude-medium-t-t-h','extrude-large-t-t-h','extrude-xlarge-t-t-h','extrude-small-t-t','extrude-medium-t-t','extrude-large-t-t','extrude-xlarge-t-t',
                   'extrude-small-t-tb-h','extrude-medium-t-tb-h','extrude-large-t-tb-h','extrude-xlarge-t-tb-h','extrude-small-t-tb','extrude-medium-t-tb','extrude-large-t-tb','extrude-xlarge-t-tb',

                   'extrude-small-tr-b-h','extrude-medium-tr-b-h','extrude-large-tr-b-h','extrude-xlarge-tr-b-h','extrude-small-tr-b','extrude-medium-tr-b','extrude-large-tr-b','extrude-xlarge-tr-b',
                   'extrude-small-tr-t-h','extrude-medium-tr-t-h','extrude-large-tr-t-h','extrude-xlarge-tr-t-h','extrude-small-tr-t','extrude-medium-tr-t','extrude-large-tr-t','extrude-xlarge-tr-t',
                   'extrude-small-tr-tb-h','extrude-medium-tr-tb-h','extrude-large-tr-tb-h','extrude-xlarge-tr-tb-h','extrude-small-tr-tb','extrude-medium-tr-tb','extrude-large-tr-tb','extrude-xlarge-tr-tb',

                   'extrude-small-r-b-h','extrude-medium-r-b-h','extrude-large-r-b-h','extrude-xlarge-r-b-h','extrude-small-r-b','extrude-medium-r-b','extrude-large-r-b','extrude-xlarge-r-b',
                   'extrude-small-r-t-h','extrude-medium-r-t-h','extrude-large-r-t-h','extrude-xlarge-r-t-h','extrude-small-r-t','extrude-medium-r-t','extrude-large-r-t','extrude-xlarge-r-t',
                   'extrude-small-r-tb-h','extrude-medium-r-tb-h','extrude-large-r-tb-h','extrude-xlarge-r-tb-h','extrude-small-r-tb','extrude-medium-r-tb','extrude-large-r-tb','extrude-xlarge-r-tb'];
    var classToGet = dropdown.value;
    console.log(classToGet);
    for (let i = 1; i <= classes.length; i++) {
        if (i != classToGet){
            console.log(classes[i - 1]);
            btn.classList.remove(classes[i - 1]);
        }
        
    }
    console.log(classes[classToGet - 1]);
    btn.classList.add(classes[classToGet - 1]);
    text.value = "extrude " + classes[classToGet - 1];
}
/*<option value="1">Small Hover - Box Only</option>
                <option value="2">Medium Hover - Box Only</option>
                <option value="3">Large Hover - Box Only</option>
                <option value="4">xLarge Hover - Box Only</option>
                <option value="5">Small - Box Only</option>
                <option value="6">Medium - Box Only</option>
                <option value="7">Large - Box Only</option>
                <option value="8">xLarge - Box Only</option>
            <optgroup label="Text Only">
                <option value="9">Small Hover - Text Only</option>
                <option value="10">Medium Hover - Text Only</option>
                <option value="11">Large Hover - Text Only</option>
                <option value="12">xLarge Hover - Text Only</option>
                <option value="13">Small - Text Only</option>
                <option value="15">Medium - Text Only</option>
                <option value="16">Large - Text Only</option>
                <option value="17">xLarge - Text Only</option>
            </optgroup> 
            <optgroup label="Text and Box">
                <option value="18">Small Hover - Text and Box</option>
                <option value="19">Medium Hover - Text and Box</option>
                <option value="20">Large Hover - Text and Box</option>
                <option value="21">xLarge Hover - Text and Box</option>
                <option value="22">Small - Text and Box</option>
                <option value="23">Medium - Text and Box</option>
                <option value="24">Large - Text and Box</option>
                <option value="25">xLarge - Text and Box</option>*/