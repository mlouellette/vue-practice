export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                {{ assignement.name }}
        
                <input type="checkbox" v-model="assignement.complete" class="ml-3">
        
            </label>
        </li>
    
    `,

    props: {
        assignement: Object
    }
}
