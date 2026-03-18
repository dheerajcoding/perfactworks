'use client'

import dynamic from 'next/dynamic'

// ssr: false is allowed here because this is a Client Component.
// ParticleBackground uses canvas API which has no server equivalent.
const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
  loading: () => null,
})

export default function ClientParticles() {
  return <ParticleBackground />
}
