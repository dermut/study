import lifecycleLogger from '../mixins/lifecycle-logger.mixin.js'
export default {
    name: 'MessageListItem',
    mixins: [lifecycleLogger],
    template: `<li>{{ item.text }} - {{ item.createdAt | datetime('MM/DD/YYYY') }}
    <button @click="deleteClicked">X</button>`,
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteClicked() {
            this.$emit('delete');
        }
    }
}