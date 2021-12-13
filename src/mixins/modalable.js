const modalableMixin = {
	props: {
		value: {
			required: true,
		},
	},
	computed: {
		inputVal: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('input', val);
			},
		},
	},
	methods: {
		close() {
			this.inputVal = false;
		},
	},
};

export default modalableMixin;
