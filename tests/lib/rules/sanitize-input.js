/**
 * @fileoverview Sanitizes inputs
 * @author
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/sanitize-input"),

    RuleTester = require("../../../lib/testers/rule-tester");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("sanitize-input", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var i = \"<script>alert(\"Unsanitized\");<script>\";",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
