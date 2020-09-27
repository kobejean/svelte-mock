/* generated by Svelte v3.15.0 */
/*eslint-disable */
'use strict';

const { SvelteComponent, create_slot, get_slot_changes, get_slot_context, init, safe_not_equal, transition_in, transition_out } = require('svelte/internal');
const { mapValues, pickBy } = require('lodash');

function create_fragment(ctx) {
  let current;

	const slot_templates = ctx.$$slots;
	const slots = {}
	for (const slot_name of Object.keys(slot_templates)) {
		slots[slot_name] = create_slot(slot_templates[slot_name], ctx, null);
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
    p(changed, ctx) {
			for (const [name, slot] of Object.entries(slots)) {
				if (slot && slot.p && changed.$$scope) {
					slot.p(
						get_slot_changes(slot_templates[name], ctx, changed, null),
						get_slot_context(slot_templates[name], ctx, null)
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
    },
  };
}

function instance($$self, $$props, $$invalidate) {
  $$props.$$slots = { ...$$props.$$slots };

	$$self.$set = $$newProps => {
    for (var key in $$newProps) {
      if ($$newProps.hasOwnProperty(key)) {
				const index = $$self.$$.props[key];
        $$invalidate(index, $$props[key] = $$newProps[key]);
      }
    }
	};

  return $$props;
}

class MockComponent extends SvelteComponent {
  constructor(options) {
    super();
		const propBlacklist = ['$$slots', '$$scope']
		const filteredProps = pickBy(options.props, (_, prop) => !propBlacklist.includes(prop))
    const $$props = mapValues(filteredProps, (_, prop) => prop);
    init(this, options, instance, create_fragment, safe_not_equal, $$props);
  }
}

exports.default = MockComponent;
