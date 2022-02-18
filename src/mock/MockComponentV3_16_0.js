/* generated by Svelte v3.16.0 and modified by Jean Flaherty */
/*eslint-disable */
"use strict";

const { SvelteComponent, create_slot, get_slot_changes, get_slot_context, init, safe_not_equal, transition_in, transition_out } = require("svelte/internal");
const { mapValues, pickBy, filter } = require('lodash');


function create_fragment(ctx) {
	let current;

	const slot_templates = /* $$slots */ ctx[ctx.length - 1];
	const slots = {}
	for (const slot_name of Object.keys(slot_templates)) {
		slots[slot_name] = create_slot(slot_templates[slot_name], ctx, /* $$scope */ ctx[ctx.length - 2]);
	}

	return {
		c() {
			for (const slot of Object.values(slots)) {
				if (slot) slot.c()
			}
		},
		m(target, anchor) {
			for (const slot of Object.values(slots)) {
				if (slot) slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			for (const [name, slot] of Object.entries(slots)) {
				if (slot && slot.p && dirty & /*$$scope*/ (1 << (ctx.length - 2))) {
					slot.p(
						get_slot_context(slot_templates[name], ctx, /*$$scope*/ ctx[ctx.length - 2], null),
						get_slot_changes(slot_templates[name], ctx, /*$$scope*/ ctx[ctx.length - 2], dirty, null)
					);
				}
			}
		},
		i(local) {
			if (current) return;
			for (const slot of Object.values(slots)) {
				transition_in(slot, local);
			}
			current = true;
		},
		o(local) {
			for (const slot of Object.values(slots)) {
				transition_out(slot, local);
			}
			current = false;
		},
		d(detaching) {
			for (const slot of Object.values(slots)) { 
				if (slot) slot.d(detaching);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$newProps => {
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
		})
		init(this, options, instance, create_fragment, safe_not_equal, $$props);
	}
}

exports.default = MockComponent;
