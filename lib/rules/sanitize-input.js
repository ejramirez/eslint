/**
 * @fileoverview Sanitizes inputs
 * @author
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce Sanitization of inputs",
            category: "Fill me in",
            recommended: true
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: []
    },

    /* eslint object-shorthand: "off", curly: "error" */
    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            /* eslint object-shorthand: "off", curly: "error" */
            ImportDeclaration: function(node) {

                node.specifiers.forEach(function(specifer) {
                    if (specifer.type === "ImportDeclaration" && specifer.local.type === "Identifer" && specifer.local.name === "_") {
                        context.report(node, "Prefer importing single functions over a full FP library");
                    }
                });
            }
        };
    }
};
