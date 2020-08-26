/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface MyRadioGroupProps {
  
  /** If `true`, the radios can be deselected. */
  allowEmptySelection?: Components.MyRadioGroup["allowEmptySelection"]
  
  /** The name of the control, which is submitted with the form data. */
  name?: Components.MyRadioGroup["name"]
  
  /** the value of the radio group. */
  value?: Components.MyRadioGroup["value"]
}

interface MyRadioGroupEvents {
  
  /** Emitted when the value has changed. */
  myChange: Parameters<JSX.MyRadioGroup["onMyChange"]>[0]["detail"]
}

interface MyRadioGroupSlots {
  default: any
}
  
/* generated by Svelte v3.24.1 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	flush,
	init,
	insert,
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let my_radio_group;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			my_radio_group = element("my-radio-group");
			if (default_slot) default_slot.c();
			set_custom_element_data(my_radio_group, "allow-empty-selection", /*allowEmptySelection*/ ctx[1]);
			set_custom_element_data(my_radio_group, "name", /*name*/ ctx[2]);
			set_custom_element_data(my_radio_group, "value", /*value*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, my_radio_group, anchor);

			if (default_slot) {
				default_slot.m(my_radio_group, null);
			}

			/*my_radio_group_binding*/ ctx[8](my_radio_group);
			current = true;

			if (!mounted) {
				dispose = listen(my_radio_group, "myChange", /*onEvent*/ ctx[4]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*allowEmptySelection*/ 2) {
				set_custom_element_data(my_radio_group, "allow-empty-selection", /*allowEmptySelection*/ ctx[1]);
			}

			if (!current || dirty & /*name*/ 4) {
				set_custom_element_data(my_radio_group, "name", /*name*/ ctx[2]);
			}

			if (!current || dirty & /*value*/ 1) {
				set_custom_element_data(my_radio_group, "value", /*value*/ ctx[0]);
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
			if (detaching) detach(my_radio_group);
			if (default_slot) default_slot.d(detaching);
			/*my_radio_group_binding*/ ctx[8](null);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { allowEmptySelection = undefined } = $$props;
	let { name = undefined } = $$props;
	let { value = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);

		if (e.type === "myChange") {
			$$invalidate(0, value = e.detail);
		}
	};

	let { $$slots = {}, $$scope } = $$props;

	function my_radio_group_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("allowEmptySelection" in $$props) $$invalidate(1, allowEmptySelection = $$props.allowEmptySelection);
		if ("name" in $$props) $$invalidate(2, name = $$props.name);
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		value,
		allowEmptySelection,
		name,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		$$slots,
		my_radio_group_binding
	];
}

class MyRadioGroup extends SvelteComponent {
  $$prop_def: MyRadioGroupProps;
  $$events_def: MyRadioGroupEvents;
  $$slot_def: MyRadioGroupSlots;

  $on<K extends keyof MyRadioGroupEvents>(type: K, callback: (e: MyRadioGroupEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<MyRadioGroupProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			allowEmptySelection: 1,
			name: 2,
			value: 0,
			getWebComponent: 5
		});
	}

	get allowEmptySelection() {
		return this.$$.ctx[1];
	}

	set allowEmptySelection(allowEmptySelection) {
		this.$set({ allowEmptySelection });
		flush();
	}

	get name() {
		return this.$$.ctx[2];
	}

	set name(name) {
		this.$set({ name });
		flush();
	}

	get value() {
		return this.$$.ctx[0];
	}

	set value(value) {
		this.$set({ value });
		flush();
	}

	get getWebComponent(): HTMLMyRadioGroupElement | undefined {
		return this.$$.ctx[5];
	}
}

export default MyRadioGroup;