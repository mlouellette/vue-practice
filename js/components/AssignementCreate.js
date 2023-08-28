export default {
    template: `
        <form @submit.prevent="add"> 

            <div class="border border-gray-600 text-black">
                <input v-model="newAssignement" class="p-2" placeholder="New assignment..." />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
          newAssignement: ''  
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignement);

            this.newAssignement = ''; 

        }
    }


}