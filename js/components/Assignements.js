import AssignementList from "./AssignementList.js";
import AssignementCreate from "./AssignementCreate.js";

export default {
    components: { AssignementList, AssignementCreate },
    template: `
        <section class="flex gap-8">
            <assignement-list :assignements="filters.inProgress" title="In Progress">
                <assignement-create @add="add"></assignement-create>
            </assignement-list>
            <div v-show="showCompleted">
                <assignement-list
                    v-if="showCompleted"
                    :assignements="filters.completed"
                    title="Completed"
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                ></assignement-list>
           </div>
        </section>
    `,
    data() {
        return {
            assignements: [],
            showCompleted: true,
        };
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignements.filter(assignement => !assignement.complete),
                completed: this.assignements.filter(assignement => assignement.complete),
            };
        }
    },
    created() {
        fetch('http://localhost:3001/assignements')
            .then(response => response.json())
            .then(assignements => {
                this.assignements = assignements;
            });
    },
    methods: {
        add(name) {
            this.assignements.push({
                name: name,
                completed: false,
                id: this.assignements.length + 1,
            });
        }
    }
};
