"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Float } from "@react-three/drei"
import { Group, Color } from "three"
import { useSpring, animated } from "@react-spring/three"

interface SceneProps {
  activeSection: string
  scrollY: number
}

const AnimatedMesh = animated(({ color, scale }: { color: any; scale: any }) => {
  return (
    <mesh scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
    </mesh>
  )
})

export default function Scene({ activeSection, scrollY }: SceneProps) {
  const group = useRef<Group>(null)

  // Color mapping for different sections
  const sectionColors = {
    about: "#8b5cf6",
    experience: "#3b82f6",
    projects: "#ec4899",
    skills: "#10b981",
    education: "#f59e0b",
    contact: "#ef4444",
  }

  // Get current color based on active section
  const currentColor = sectionColors[activeSection as keyof typeof sectionColors] || "#8b5cf6"

  // Spring animations
  const { sphereColor, sphereScale } = useSpring({
    sphereColor: currentColor,
    sphereScale: [2, 2, 2] as [number, number, number],
    config: { mass: 2, tension: 200, friction: 40 },
  })

  // Animate based on scroll
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2
      group.current.position.y = (-scrollY * 0.002) + 1
    }
  })

  return (
    <group ref={group}>
      {/* Main sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <AnimatedMesh color={sphereColor} scale={sphereScale} />
      </Float>

      {/* Floating name */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text
          position={[0, 3, 0]}
          fontSize={1.5}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.1}
          outlineColor={currentColor}
          outlineOpacity={1}
          strokeWidth={0.05}
          strokeColor="white"
          fillOpacity={1}
          maxWidth={10}
          textAlign="center"
        >
          Ashirvad Dubey
        </Text>
      </Float>

      {/* Background particles */}
      {Array.from({ length: 50 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 20
        const y = (Math.random() - 0.5) * 20
        const z = (Math.random() - 0.5) * 20
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial
              color={new Color(currentColor).lerp(new Color("#ffffff"), Math.random())}
              emissive={currentColor}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        )
      })}
    </group>
  )
}
