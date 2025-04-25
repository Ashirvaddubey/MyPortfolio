export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black">
      <div className="text-center">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-transparent border-white"></div>
        <p className="text-lg font-medium text-white">Loading 3D Environment...</p>
      </div>
    </div>
  )
}
