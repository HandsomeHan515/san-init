import san from 'san'

export default san.defineComponent({
    template: `
        <template>
            {{name}}
        </template>
    `,
    initData() {
        return {
            name: 'This is Add!'
        }
    }
})