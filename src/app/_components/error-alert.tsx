import { XCircle } from 'lucide-react'

export default function ErrorAlert({ message = "An error occurred. Please try again." }: { message?: string }) {
  return (
    <div className="max-w-md w-full mx-auto">
      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md shadow-md">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <XCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-red-800" role="alert">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}