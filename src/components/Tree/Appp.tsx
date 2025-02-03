import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { InstancedMesh, Object3D, Color } from 'three'
import { OrbitControls } from '@react-three/drei'

// Для отладки используем меньшее число инстансов (например, 1000)
// Если всё заработает, можно вернуть totalDays = 36500
const totalDays = 1000 

const LifeSpiral: React.FC = () => {
  const meshRef = useRef<InstancedMesh>(null!)
  // Dummy-объект для расчёта матриц каждого инстанса
  const dummy = useMemo(() => new Object3D(), [])

  // Параметры спирали:
  // Здесь для отладки используем 5 оборотов, для полного варианта — 50 оборотов
  const turns = 5 
  const angleFactor = (2 * Math.PI * turns) / totalDays // угол на один инстанс
  const radius = 20             // радиус спирали
  const totalHeight = 200       // общая высота спирали
  const zFactor = totalHeight / totalDays // шаг по оси Z

  // Вычисляем массив цветов для каждого кубика
  const colorArray = useMemo(() => {
    const arr = new Float32Array(totalDays * 3)
    for (let i = 0; i < totalDays; i++) {
      // Для демонстрации: меняем оттенок по HSL
      const hue = (i / totalDays) * 360
      const col = new Color(`hsl(${hue}, 100%, 50%)`)
      arr[i * 3] = col.r
      arr[i * 3 + 1] = col.g
      arr[i * 3 + 2] = col.b
    }
    return arr
  }, [])

  // При первом рендере вычисляем матрицы для всех инстансов
  useEffect(() => {
    if (meshRef.current) {
      for (let i = 0; i < totalDays; i++) {
        const angle = i * angleFactor
        const x = radius * Math.cos(angle)
        const y = radius * Math.sin(angle)
        const z = i * zFactor
        dummy.position.set(x, y, z)
        dummy.rotation.set(0, angle, 0)
        dummy.updateMatrix()
        meshRef.current.setMatrixAt(i, dummy.matrix)
      }
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  }, [angleFactor, radius, zFactor, dummy])

  // Плавное вращение всей спирали
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, totalDays]}
      onClick={(e) => {
        // При клике выводится номер инстанса (дня)
        alert(`Редактировать день: ${e.instanceId}`)
      }}
    >
      <boxGeometry args={[0.8, 0.8, 0.8]}>
        {/* Привязываем атрибут instanceColor для задания цвета каждому кубику */}
        <instancedBufferAttribute attach="attributes-instanceColor" args={[colorArray, 3]} />
      </boxGeometry>
      {/* Используем MeshPhongMaterial с поддержкой vertexColors и базовым белым цветом */}
      <meshPhongMaterial vertexColors color={0xffffff} side={2} />
    </instancedMesh>
  )
}

const App: React.FC = () => {
  return (
    // Внешний контейнер с градиентным фоном
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #1e293b, #475569)'
      }}
    >
      <Canvas
        camera={{ position: [80, 80, 150], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        {/* Освещение */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[100, 100, 100]} intensity={0.8} />
        <LifeSpiral />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
