<template>
    <div class="bg-gray-100 py-8 grow h-screen overflow-y-scroll">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-none">
                <div class="overflow-hidden bg-white sm:rounded-lg sm:shadow">
                    <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                        <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                            <div class="ml-4 mt-4">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="h-12 w-12 rounded-full"
                                             :src=userDetails.avatar
                                             alt="">
                                    </div>
                                    <div class="ml-4">
                                        <h3 class="text-base font-semibold leading-6 text-gray-900">
                                            {{ userDetails.first_name }}</h3>
                                        <p class="text-sm text-gray-500">
                                            <a href="#">{{ userDetails.last_name }}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ml-4 mt-4 flex flex-shrink-0 gap-4 flex-col">
                            <div class="flex gap-x-2 items-center">
                                <PhoneIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                <span class="text-sm font-thin">{{
                                        userDetails.phone || 'Sorry :(, No Phone Number'
                                    }}</span>
                            </div>
                            <div class="flex gap-x-2 items-center">
                                <EnvelopeIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                <span class="text-sm font-thin">{{ userDetails.email || 'NA' }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {EnvelopeIcon, PhoneIcon} from '@heroicons/vue/20/solid'
import {reactive, toRaw} from 'vue'


import {computed, onMounted} from "vue";
import {useUserStore} from "../store/userStore.js";
import {useRoute} from 'vue-router';

// Initialize store
const userStore = useUserStore();

const route = useRoute();
const userId = parseInt(route.params.id)

const userDetails = computed(() => {
    return userStore.getUserDetails;
});

onMounted(() => {
    userStore.fetchUserById(userId);
})
</script>
