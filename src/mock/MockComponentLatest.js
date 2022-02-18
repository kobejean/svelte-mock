/* generated by Svelte v3.46.0 and modified by Miguel Camba */
/*eslint-disable */
/* generated by Svelte v3.46.4 */
"use strict";

const { SvelteComponent, create_slot, get_all_dirty_from_scope, get_slot_changes, init, safe_not_equal, transition_in, transition_out, update_slot_base } = require("svelte/internal");
const { mapValues, pickBy, filter } = require('lodash');

function create_fragment(ctx) {
        let current;
        const default_slot_template = /*#slots*/ ctx[ctx.length - 1].default;
        const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[ctx.length - 2], null);

        return {
                c() {
                        if (default_slot) default_slot.c();
                },
                m(target, anchor) {
                        if (default_slot) {
                                default_slot.m(target, anchor);
                        }

                        current = true;
                },
                p(ctx, [dirty]) {
                        if (default_slot) {
                                if (default_slot.p && (!current || dirty & /*$$scope*/ (1 << (ctx.length - 2)))) {
                                        update_slot_base(
                                                default_slot,
                                                default_slot_template,
                                                ctx,
                                                /*$$scope*/ ctx[ctx.length - 2],
                                                !current
                                                ? get_all_dirty_from_scope(/*$$scope*/ ctx[ctx.length - 2])
                                                : get_slot_changes(default_slot_template, /*$$scope*/ ctx[ctx.length - 2], dirty, null),
                                                null
                                        );
                                }
                        }
                },
                i(local) {
                        if (current) return;
                        transition_in(default_slot, local);
                        current = true;
                },
                o(local) {
                        transition_out(default_slot, local);
                        current = false;
                },
                d(detaching) {
                        if (default_slot) default_slot.d(detaching);
                }
        };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots = {}, $$scope } = $$props;

	$$self.$$set = $$newProps => {
    for (var key in $$newProps) {
      if ($$newProps.hasOwnProperty(key)) {
				const index = $$self.$$.props[key];
        $$invalidate(index, $$props[key] = $$newProps[key]);
      }
    }
	};
	const propBlacklist = ['$$slots', '$$scope'];
	const filteredProps = filter($$props, (_, prop) => !propBlacklist.includes(prop));
	return [...filteredProps, $$scope, $$slots];
}

class MockComponent extends SvelteComponent {
	constructor(options) {
		super();
		const propBlacklist = ['$$slots', '$$scope']
		const filteredProps = pickBy(options.props, (_, prop) => !propBlacklist.includes(prop))
		let i = 0;
    	const $$props = mapValues(filteredProps, () => {
			const value = i;
			i++;
			return value;
		});
		this.$$ = {};
		options.target = options.target || {};
		init(this, options, instance, create_fragment, safe_not_equal, $$props);
	}

}

exports.default = MockComponent;
