<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { profile } from '~/data/profile'

type NoticeState = {
  type: 'success' | 'error' | 'info'
  message: string
}

const runtimeConfig = useRuntimeConfig()
const formRef = ref<HTMLFormElement | null>(null)

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

const isSending = ref(false)
const notice = ref<NoticeState | null>(null)
let noticeTimeout: ReturnType<typeof setTimeout> | null = null

const emailjsConfig = computed(() => ({
  serviceId: runtimeConfig.public.emailjsServiceId?.trim(),
  templateId: runtimeConfig.public.emailjsTemplateId?.trim(),
  publicKey: runtimeConfig.public.emailjsPublicKey?.trim()
}))

const isEmailjsConfigured = computed(() =>
  Boolean(emailjsConfig.value.serviceId && emailjsConfig.value.templateId && emailjsConfig.value.publicKey)
)

const setNotice = (nextNotice: NoticeState, duration = 3200) => {
  notice.value = nextNotice

  if (noticeTimeout) {
    clearTimeout(noticeTimeout)
  }

  noticeTimeout = setTimeout(() => {
    notice.value = null
    noticeTimeout = null
  }, duration)
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
}

const validate = () => {
  errors.name = form.name.trim() ? '' : 'Name is required.'
  errors.email = /\S+@\S+\.\S+/.test(form.email) ? '' : 'Please enter a valid email.'
  errors.message = form.message.trim() ? '' : 'Message cannot be empty.'
  return !errors.name && !errors.email && !errors.message
}

const clearFieldError = (field: keyof typeof errors) => {
  errors[field] = ''
}

const submitForm = async () => {
  if (isSending.value) return
  if (!validate()) return

  if (!isEmailjsConfigured.value) {
    setNotice(
      {
        type: 'error',
        message: 'Unable to send your message right now. Please try again shortly.'
      },
      4200
    )
    return
  }

  isSending.value = true

  try {
    await emailjs.send(
      emailjsConfig.value.serviceId!,
      emailjsConfig.value.templateId!,
      {
        from_name: form.name.trim(),
        to_name: "Pradaap Shobha",
        from_email: form.email.trim(),
        to_email: 'pradaap.shobha@gmail.com',
        message: form.message.trim()
      },
      {
        publicKey: emailjsConfig.value.publicKey!
      }
    )

    resetForm()
    setNotice({
      type: 'success',
      message: 'Thank you. I will get back to you as soon as possible.'
    })
  } catch (error) {
    console.error('EmailJS submission failed:', error)
    setNotice(
      {
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again or email me directly.'
      },
      5200
    )
  } finally {
    isSending.value = false
  }
}

onBeforeUnmount(() => {
  if (noticeTimeout) {
    clearTimeout(noticeTimeout)
  }
})

useSeoMeta({
  title: 'Contact',
  description: 'Contact Pradaap Shiva Kumar Shobha for backend and distributed systems opportunities.'
})
</script>

<template>
  <div class="space-y-12">
    <SectionTitle title="Contact" subtitle="I'm actively exploring backend and AI-enabled product opportunities." />

    <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form ref="formRef" class="card space-y-5" @submit.prevent="submitForm">
        <div class="space-y-2">
          <p class="section-kicker">Get In Touch</p>
          <p class="text-sm leading-7 text-slate-600 dark:text-slate-300">
            Send a note about a role, project, or collaboration. Messages are delivered directly through the contact form.
          </p>
        </div>

        <div>
          <label class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Name</label>
          <input
            v-model="form.name"
            type="text"
            class="input-control mt-2"
            placeholder="Your name"
            autocomplete="name"
            @input="clearFieldError('name')"
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
            autocomplete="email"
            @input="clearFieldError('email')"
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
            @input="clearFieldError('message')"
          ></textarea>
          <p v-if="errors.message" class="mt-1 text-xs text-rose-500">{{ errors.message }}</p>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Preferred direct contact:
            <a class="font-medium text-slate-700 underline decoration-brand-400/60 underline-offset-4 dark:text-slate-200" :href="`mailto:${profile.email}`">
              {{ profile.email }}
            </a>
          </p>
          <button type="submit" class="btn-primary min-w-[10rem]" :disabled="isSending">
            {{ isSending ? 'Sending...' : 'Send Message' }}
          </button>
        </div>
      </form>

      <div class="card space-y-4">
        <p class="section-kicker">Connect</p>
        <h3 class="font-display text-2xl font-semibold">Let’s start a conversation</h3>
        <p class="text-sm leading-7 text-slate-600 dark:text-slate-300">
          Reach out for full-stack roles, backend engineering opportunities, or AI-enabled product work.
        </p>
        <div class="grid gap-3 text-sm">
          <a class="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/65 px-4 py-3 transition hover:border-brand-500/60 hover:text-brand-600 dark:border-slate-700/80 dark:bg-slate-900/55 dark:hover:text-brand-300" :href="`mailto:${profile.email}`">
            {{ profile.email }}
          </a>
          <a class="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/65 px-4 py-3 transition hover:border-brand-500/60 hover:text-brand-600 dark:border-slate-700/80 dark:bg-slate-900/55 dark:hover:text-brand-300" :href="profile.linkedin" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <div class="rounded-2xl border border-slate-200/70 bg-white/65 px-4 py-3 dark:border-slate-700/80 dark:bg-slate-900/55">
            {{ profile.location }}
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="notice"
      class="fixed right-6 top-6 z-50 max-w-sm rounded-2xl border px-4 py-3 text-sm font-semibold shadow-soft backdrop-blur"
      :class="
        notice.type === 'success'
          ? 'border-emerald-400/40 bg-emerald-500 text-white'
          : notice.type === 'error'
            ? 'border-rose-400/40 bg-rose-500 text-white'
            : 'border-amber-300/50 bg-amber-50 text-amber-900 dark:bg-amber-500/90 dark:text-slate-950'
      "
    >
      {{ notice.message }}
    </div>
  </div>
</template>
