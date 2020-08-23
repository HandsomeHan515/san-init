import san from 'san'

export default san.defineComponent({
    template: `
        <div>
            Hello {{title}}
            <div id="app"></div>
        </div>
    `,
    initData() {
        return {
            title: 'world'
        }
    },
    attached() {
        console.log(this.data.get('title'))
    }
})
