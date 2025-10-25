import Image from "next/image"

interface AboutCardProps {
  title: string
  description?: string
  className?: string
  image: string
}

export function AboutCard({ title, description, image, className = "" }: AboutCardProps) {
  return (
    <div
      className={`bg-gray-100 w-[300px] h-[356px] rounded-[32px] p-8 shadow-lg flex flex-col items-center justify-between gap-4 ${className}`}
    >
      {/* Title */}
      <h3 className="text-xl font-medium text-center">{title}</h3>

      {/* Centered Image */}
      <div className="flex justify-center items-center w-16 h-16 rounded-full  transition-transform hover:scale-105">
        <Image src={image} height={400} width={400} alt="Skepsis" />
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-center text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
