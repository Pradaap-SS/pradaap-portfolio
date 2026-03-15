<script setup lang="ts">
import { profile } from '~/data/profile'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const showToast = ref(false)

const validate = () => {
  errors.name = form.name ? '' : 'Name is required.'
  errors.email = /\S+@\S+\.\S+/.test(form.email) ? '' : 'Please enter a valid email.'
  errors.message = form.message ? '' : 'Message cannot be empty.'
  return !errors.name && !errors.email && !errors.message
}

const submitForm = () => {
  if (!validate()) return
  showToast.value = true
  form.name = ''
  form.email = ''
  form.message = ''
  setTimeout(() => (showToast.value = false), 2400)
}

useSeoMeta({
  title: 'Contact',
  description: 'Contact Pradaap Shiva Kumar Shobha for backend and distributed systems opportunities.'
})
</script>

<template>
  <div class="space-y-12">
    <SectionTitle title="Contact" subtitle="I'm actively exploring backend and AI-enabled product opportunities." />

    <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form class="card space-y-5" @submit.prevent="submitForm">
        <div>
          <label class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Name</label>
          <input
            v-model="form.name"
            type="text"
            class="input-control mt-2"
            placeholder="Your name"
          />
          <p v-if="errors.name" class="mt-1 text-xs text-rose-500">{{ errors.name }}</p>
        </div>
        <div>
          <label class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="input-control mt-2"
            placeholder="you@email.com"
          />
          <p v-if="errors.email" class="mt-1 text-xs text-rose-500">{{ errors.email }}</p>
        </div>
        <div>
          <label class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Message</label>
          <textarea
            v-model="form.message"
            rows="4"
            class="input-control mt-2"
            placeholder="Tell me about the role or project."
          ></textarea>
          <p v-if="errors.message" class="mt-1 text-xs text-rose-500">{{ errors.message }}</p>
        </div>
        <button type="submit" class="btn-primary">Send Message</button>
      </form>

      <div class="card space-y-4">
        <h3 class="font-display text-2xl font-semibold">Connect</h3>
        <p class="text-sm leading-7 text-slate-600 dark:text-slate-300">
          Reach out via LinkedIn or email.
        </p>
        <div class="space-y-3 text-sm">
          <a class="flex items-center gap-2 hover:text-brand-500" :href="profile.linkedin" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a class="flex items-center gap-2 hover:text-brand-500" :href="`mailto:${profile.email}`">
            {{ profile.email }}
          </a>
        </div>
      </div>
    </div>

    <div
      v-if="showToast"
      class="fixed right-6 top-6 z-50 rounded-full bg-gradient-to-r from-accent-500 to-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft"
    >
      Message sent. I will reply soon.
    </div>
  </div>
</template>
