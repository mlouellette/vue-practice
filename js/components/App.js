import Assignements from "./Assignements.js";
import Panel from "./Panel.js";

export default {
    components: { Assignements, Panel },
    template: `
        <div class="grid gap-6">
            <assignements></assignements>

            <panel>
                <template v-slot:heading>
                    Hi there
                </template>

                this is my default content

                <template v-slot:footer>
                    this is my default content
                </template>
            
            </panel>

            <panel>
                <template v-slot:heading>
                    Hi there
                </template>

                this is my default content

                <template v-slot:footer>
                    this is my default content
                </template>
            </panel>
        </div>
    `,

    props: {
        add: Object
    }
};
