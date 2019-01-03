<!-- test -->
<template>
    <button 
		:class="`t_button_${type}`">
        <slot>默认按钮</slot>
    </button>
</template>

<script>
    export default {
        name: 'TButton',
        data() {
            return {};
		},
		props: {
			type: {
				type: String,
				default: 'default'
			}
		},

        components: {},

        methods: {
            clickButton() {
                console.log("you clicked this");
            }
        }

    }
</script>