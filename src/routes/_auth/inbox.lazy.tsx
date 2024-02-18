import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/inbox')({
  component: () => <div>Hello /_auth/inbox!</div>
})