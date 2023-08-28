import Assignement from "./Assignement.js"

export default {
    components: { Assignement },
    template: `
        <section v-show="assignements.length">
        <h2 class="font-bold mb-2">{{ title }}</h2>
        
            <ul class="border border-gray-600 divide-y divide-gray-600">
                <assignement 
                    v-for="assignement in assignements"
                    :key="assignement.id"
                    :assignement="assignement"
                ></assignement>
            </ul>
        </section>
    
    `,

    props: {
        assignements: Array,
        title: String
    }
}