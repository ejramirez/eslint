/**
 * @fileoverview Sanitizes inputs
 * @author
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/sanitize-input"),

    RuleTester = require("../../../lib/testers/rule-tester");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("sanitize-input", rule, {

    valid: [

        // give me some code that won't trigger a warning
        "var $ = require('jquery');",
        "var filter = require('lodash/fp/filter')"
    ],

    invalid: [
        {
            code: "var _ = require('your favorite fp library');",
            errors: [{
                message: "Prefer importing single functions over a full FP library",
                type: "VariableDeclaration"
            }]
        }
    ]
});
