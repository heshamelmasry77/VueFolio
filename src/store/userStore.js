import {defineStore} from 'pinia'
import axios from 'axios'; // Assuming you're using Axios for HTTP requests

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        users: [],
        loading: false,
        singleUser: {}
    }),
    getters: {
        getUsers(state) {
            return state.users
        },
        getUserDetails(state) {
            return state.singleUser
        },
        getTotalUsers(state) {
            return state.users.length;
        }
    },
    actions: {
        async fetchUsers() {
            this.loading = true;
            try {
                const response = await axios.get('https://reqres.in/api/users');
                this.users = response.data.data;
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                this.loading = false;
            }
        },
        async fetchUserById(id) {
            this.loading = true;
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                this.singleUser = response.data.data;
            } catch (error) {
                console.error("Error fetching user by id:", error);
            } finally {
                this.loading = false;
            }
        },
    },
});
