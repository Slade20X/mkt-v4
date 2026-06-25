import {
  Search,
  Megaphone,
  TrendingUp,
  Globe,
  MousePointerClick,
  Target,
  BarChart3,
  LineChart,
  MessageSquare,
  Layers,
  MapPin,
  Check,
  ArrowRight,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react"

const map: Record<string, LucideIcon> = {
  Search,
  Megaphone,
  TrendingUp,
  Globe,
  MousePointerClick,
  Target,
  BarChart3,
  LineChart,
  MessageSquare,
  Layers,
  MapPin,
  check: Check,
  "arrow-right": ArrowRight,
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
}

export function Icon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Component = map[name] ?? Target
  return <Component className={className} aria-hidden="true" />
}
