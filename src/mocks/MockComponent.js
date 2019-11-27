/* generated by Svelte v3.15.0 and modified by Jean Flaherty */
"use strict";

const { SvelteComponent, create_slot, get_slot_changes, get_slot_context, init, safe_not_equal, transition_in, transition_out } = require("svelte/internal");
const { assign, mapValues } = require('lodash');


function create_fragment(ctx) {
	let current;
	const default_slot_template = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_template, ctx, null);

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
		p(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
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
  $$self.$$svelteMock = { props: { ...$$props } };
  $$props.$$slots = { ...$$props.$$slots }

	$$self.$set = $$newProps => {
    assign($$self.$$svelteMock.props, $$newProps)
    for (var key in $$newProps) {
      if ($$newProps.hasOwnProperty(key)) {
        $$invalidate(key, $$props[key] = $$newProps[key]);
      }
    }
	};

  return $$props;
}

class MockComponent extends SvelteComponent {
	constructor(options) {
		super();
    const $$props = mapValues(options.props, () => 0)
		init(this, options, instance, create_fragment, safe_not_equal, $$props);
	}
}

exports.default = MockComponent;
