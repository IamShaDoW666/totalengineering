import { CheckCircle } from 'lucide-react'

export default function SuccessAlert({ message = "Operation completed successfully!" }: { message?: string }) {
  return (
    <div className="w-full mx-auto">
      <div className="bg-success/30 border-l-4 border-success p-4 rounded-md shadow-md">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <CheckCircle className="h-5 w-5 text-success" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800 dark:text-green-500" role="alert">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}