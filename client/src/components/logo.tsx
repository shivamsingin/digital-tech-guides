import { Link } from "wouter";

interface LogoProps {
  variant?: "default" | "footer" | "navigation";
  className?: string;
}

export default function Logo({ variant = "default", className = "" }: LogoProps) {
  const logoContent = (
    <div className="flex items-center space-x-3">
      {/* Abstract Graphic - Stylized C/S or forward arrow */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
          {/* Abstract shape - combination of C and S or forward arrow */}
          <svg 
            viewBox="0 0 40 40" 
            className="w-6 h-6 text-white"
            fill="currentColor"
          >
            {/* Forward-pointing arrow enclosed in rounded square */}
            <path d="M8 8 L32 8 Q36 8 36 12 L36 28 Q36 32 32 32 L8 32 Q4 32 4 28 L4 12 Q4 8 8 8 Z M16 12 L28 20 L16 28 L16 12 Z" />
          </svg>
        </div>
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col">
        <span className={`font-bold ${variant === "footer" ? "text-background" : "text-gray-900"} ${
          variant === "navigation" ? "text-2xl" : variant === "footer" ? "text-2xl" : "text-3xl"
        }`}>
          Digital
        </span>
        <span className={`font-semibold ${variant === "footer" ? "text-background/80" : "text-gray-700"} ${
          variant === "navigation" ? "text-lg" : variant === "footer" ? "text-lg" : "text-xl"
        } tracking-wider uppercase`}>
          TECH GUIDES
        </span>
      </div>
    </div>
  );

  if (variant === "footer") {
    return (
      <div className={className}>
        {logoContent}
      </div>
    );
  }

  return (
    <Link href="/" className={`flex-shrink-0 ${className}`}>
      {logoContent}
    </Link>
  );
}
