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
    },
    attached() {
        const arr = [1, 2, 3]
        let i = arr.includes(2)
        console.log(i)
    }
})