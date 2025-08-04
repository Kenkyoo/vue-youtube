<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { HeartIcon, PlayCircleIcon, FireIcon, HomeIcon, EyeIcon } from '@heroicons/vue/24/solid'
import ThemeToggle from './components/ThemeToggle.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="relative h-screen">
    <div
      class="hidden isolate md:flex items-center gap-x-6 overflow-hidden bg-primary text-primary-content px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
    >
      <div
        class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          class="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style="
            clip-path: polygon(
              74.8% 41.9%,
              97.2% 73.2%,
              100% 34.9%,
              92.5% 0.4%,
              87.5% 0%,
              75% 28.6%,
              58.5% 54.6%,
              50.1% 56.8%,
              46.9% 44%,
              48.3% 17.4%,
              24.7% 53.9%,
              0% 27.9%,
              11.9% 74.2%,
              24.9% 54.1%,
              68.6% 100%,
              74.8% 41.9%
            );
          "
        />
      </div>
      <div
        class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          class="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style="
            clip-path: polygon(
              74.8% 41.9%,
              97.2% 73.2%,
              100% 34.9%,
              92.5% 0.4%,
              87.5% 0%,
              75% 28.6%,
              58.5% 54.6%,
              50.1% 56.8%,
              46.9% 44%,
              48.3% 17.4%,
              24.7% 53.9%,
              0% 27.9%,
              11.9% 74.2%,
              24.9% 54.1%,
              68.6% 100%,
              74.8% 41.9%
            );
          "
        />
      </div>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p class="text-sm/6 text-gray-900">
          <strong class="font-semibold">Hi!</strong
          ><svg viewBox="0 0 2 2" class="mx-2 inline size-0.5 fill-current" aria-hidden="true">
            <circle cx="1" cy="1" r="1" /></svg
          >See my github profile and my others repos
        </p>
        <a
          href="https://github.com/Kenkyoo"
          class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >Kenkyoo <span aria-hidden="true">&rarr;</span></a
        >
      </div>
      <div class="flex flex-1 justify-end">
        <button type="button" class="-m-3 p-3 focus-visible:-outline-offset-4">
          <span class="sr-only">Dismiss</span>
          <XMarkIcon class="size-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
    <div class="navbar bg-base-100 z-40 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <RouterLink to="/"><HomeIcon class="size-5 text-primary" /> Home</RouterLink>
            </li>

            <li>
              <RouterLink to="/popular"
                ><FireIcon class="size-5 text-primary" /> Popular</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/history"><EyeIcon class="size-5 text-primary" /> History</RouterLink>
            </li>
          </ul>
        </div>
        <div class="tooltip tooltip-accent" data-tip="YT App">
          <a class="btn btn-ghost text-xl">YT</a>
        </div>
        <PlayCircleIcon class="size-5 text-secondary -ms-3" />
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <RouterLink to="/"><HomeIcon class="size-5 text-primary" /> Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/popular"><FireIcon class="size-5 text-primary" /> Popular</RouterLink>
          </li>
          <li>
            <RouterLink to="/history"><EyeIcon class="size-5 text-primary" /> History</RouterLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="flex justify-center items-center gap-4 pe-2">
          <div class="tooltip tooltip-accent" data-tip="theme mode">
            <ThemeToggle />
          </div>
          <div class="tooltip tooltip-accent" data-tip="history">
            <Sidebar class="hidden md:flex" />
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="flex flex-col justify-center items-center gap-8 text-center px-10">
      <RouterView />
    </div>
    <div class="divider"></div>
    <div>
      <footer class="footer sm:footer-horizontal footer-center bg-base-100 text-base-content p-4">
        <aside>
          <div class="flex justify-center text-center gap-4">
            <div><p class="font-mono">Dev by Kenkyo with</p></div>
            <div><HeartIcon class="size-5 text-accent" /></div>
          </div>
        </aside>
      </footer>
    </div>
    <div class="dock sticky bottom-0 left-0 right-0 flex md:hidden">
      <button>
        <RouterLink to="/"
          ><HomeIcon class="size-5 text-primary ms-1" />
          <span class="dock-label">Home</span></RouterLink
        >
      </button>

      <button>
        <RouterLink to="/popular"
          ><FireIcon class="size-5 text-primary ms-1" />
          <span class="dock-label">Popular</span></RouterLink
        >
      </button>

      <button>
        <RouterLink to="/history"
          ><EyeIcon class="size-5 text-primary ms-1" />
          <span class="dock-label">History</span></RouterLink
        >
      </button>
    </div>
  </div>
</template>
