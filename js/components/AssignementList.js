import Assignement from "./Assignement.js"

export default {
    components: { Assignement },
    template: `
        <section v-show="assignements.length">
        <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{ assignements.length }})</span>
        </h2>

        <div class="flex gap-2">
            <button
              @click="currentTag = tag"
              v-for="tag in tags"
              class="border rounded px-1 py-px text-xs"
              :class="{
                'border-blue-500 text-blue-500' : tag === currentTag
              }"
            >{{ tag }}</button>
        </div>
        
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignement 
                    v-for="assignement in filteredAssignments"
                    :key="assignement.id"
                    :assignement="assignement"
                ></assignement>
            </ul>
        </section>
    
    `,

    props: {
        assignements: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignements;
            }

            return this.assignements.filter(a => a.tag === this.currentTag);
        },

        tags() {
            return ['all', ...new Set(this.assignements.map(a => a.tag))];
        }
    }
}