<template>
  <div class="flex w-72 flex-col">
    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-primary-600 px-6">
      <div class="flex h-16 shrink-0 items-center gap-x-2 text-white">
        <BookOpenIcon class="h-8 w-auto"/>
        <span>VueFolio</span>
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li v-for="item in navigation" :key="item.name">
                <router-link :to="item.path"
                             v-slot="{ isActive, isExactActive }">
                  <div
                      :class="[isActive ? 'bg-primary-700 text-white' : 'text-primary-200 hover:text-white hover:bg-primary-700', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                    <component :is="item.icon"
                               :class="[isActive ? 'text-white' : 'text-primary-200 group-hover:text-white', 'h-6 w-6 shrink-0']"
                               aria-hidden="true"/>
                    {{ item.name }}
                    <span v-if="item.count"
                          class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-primary-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-primary-500"
                          aria-hidden="true">{{ item.count }}</span>
                  </div>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
          </li>
          <li class="-mx-6 mt-auto">
            <router-link to="/profile" class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-primary-700">
              <img class="h-8 w-8 rounded-full bg-primary-700"
                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                   alt=""/>
              <span class="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  BookOpenIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
  {name: 'Dashboard', path: '/', icon: HomeIcon},
  {name: 'Listings', path: '/listings', icon: FolderIcon, count: '12'},
  {name: 'About', path: 'about', icon: CalendarIcon},
]
</script>