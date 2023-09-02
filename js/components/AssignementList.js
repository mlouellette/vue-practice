import Assignement from "./Assignement.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
    components: { Assignement, AssignmentTags, Panel },
    template: `
        <Panel v-show="assignements.length" class="w-60">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">
                    {{ title }}
                    <span>({{ assignements.length }})</span>
                </h2>
                <button v-show="canToggle" @click="$emit('toggle')">x</button>
            </div>
            <assignment-tags
                v-model:currentTag="currentTag"
                :initial-tags="assignements.map(a => a.tag)"
            />
            <slot />
            <template v-slot:footer>
                my footer 
            </template>
        </Panel>
    `,
    data() {
        return {
            currentTag: "all",
        };
    },
    props: {
        assignements: Array,
        title: String,
        canToggle: { type: Boolean, default: false },
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === "all") {
                return this.assignements;
            }
            return this.assignements.filter((a) => a.tag === this.currentTag);
        },
    },
};
