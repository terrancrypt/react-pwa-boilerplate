// Import package.json to access version information
import packageJson from '../package.json';

function App() {
  return (
    <div className="bg-amber-300 fixed inset-0 w-full h-full flex flex-col items-center justify-center" style={{ margin: 0, padding: 0 }}>
      <h1 className="text-2xl font-bold mb-4">React PWA Boilerplate</h1>
      <div className="bg-white p-4 rounded-md shadow-md">
        <p className="text-lg">Version: <span className="font-semibold">{packageJson.version}</span></p>
      </div>
    </div>
  )
}

export default App
