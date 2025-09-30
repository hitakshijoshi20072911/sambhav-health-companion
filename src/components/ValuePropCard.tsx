import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ValuePropCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ValuePropCard = ({ icon: Icon, title, description, delay = 0 }: ValuePropCardProps) => {
  return (
    <Card 
      className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6 flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ValuePropCard;
