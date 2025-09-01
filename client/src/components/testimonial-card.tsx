import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <Card className="h-full" data-testid={`testimonial-card-${index}`}>
      <CardContent className="p-8">
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">Verified Review</span>
        </div>
        <p className="text-muted-foreground mb-6 italic" data-testid={`testimonial-text-${index}`}>
          "{testimonial.testimonial}"
        </p>
        <div className="flex items-center">
          {testimonial.clientImage && (
            <img
              src={testimonial.clientImage}
              alt={`${testimonial.clientName} photo`}
              className="w-12 h-12 rounded-full mr-4 object-cover"
              data-testid={`testimonial-image-${index}`}
            />
          )}
          <div>
            <div className="font-semibold text-card-foreground" data-testid={`testimonial-name-${index}`}>
              {testimonial.clientName}
            </div>
            <div className="text-sm text-muted-foreground" data-testid={`testimonial-role-${index}`}>
              {testimonial.clientRole}, {testimonial.clientCompany}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
