<template>
  <div class="bg-gray-100 py-8 grow h-screen overflow-y-scroll">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="user in users" :key="user.id"
            class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <router-link :to="{ name:'ListingDetails', params: { id: user.id} }">
            <div class="flex w-full items-center justify-between space-x-6 p-6">
              <div class="flex-1 truncate">
                <div class="flex items-center space-x-3">
                  <h3 class="truncate text-sm font-medium text-gray-900">{{ user.first_name }}</h3>
                  <span v-if="user.role"
                        class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{
                      user.role
                    }}</span>
                </div>
                <p class="mt-1 truncate text-sm text-gray-500">{{ user.first_name }} {{ user.last_name }}</p>
              </div>
              <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" :src="user.avatar" alt=""/>
            </div>
            <div>
              <div class="-mt-px flex divide-x divide-gray-200">
                <div class="flex w-0 flex-1">
                  <a :href="`mailto:${user.email}`"
                     class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                    <EnvelopeIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>
<script setup>
import {EnvelopeIcon} from '@heroicons/vue/20/solid'
import {onMounted, computed} from 'vue';
import {useUserStore} from '../store/userStore';

// Initialize store
const userStore = useUserStore();

const users = computed(() => {
  return userStore.getUsers;
});

// Use onMounted to fetch users when the component is mounted
onMounted(() => {
  userStore.fetchUsers();
});

</script>
