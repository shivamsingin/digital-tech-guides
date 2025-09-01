import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@shared/schema";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const metrics = JSON.parse(caseStudy.metrics || '{}');
  const metricEntries = Object.entries(metrics);

  return (
    <Card className="card-hover overflow-hidden" data-testid={`case-study-card-${index}`}>
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <Badge 
            variant="secondary" 
            className="bg-secondary/10 text-secondary"
            data-testid={`case-study-industry-${index}`}
          >
            {caseStudy.industry}
          </Badge>
          {caseStudy.imageUrl && (
            <img 
              src={caseStudy.imageUrl} 
              alt="Location flag" 
              className="w-6 h-4 rounded object-cover"
              data-testid={`case-study-flag-${index}`}
            />
          )}
        </div>
        <h3 className="text-lg font-semibold text-card-foreground mb-2" data-testid={`case-study-title-${index}`}>
          {caseStudy.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4" data-testid={`case-study-challenge-${index}`}>
          <span className="font-medium">Challenge:</span> {caseStudy.challenge}
        </p>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          {metricEntries.map(([key, value], metricIndex) => (
            <div key={metricIndex} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span 
                className="text-2xl font-bold text-secondary" 
                data-testid={`case-study-metric-${index}-${metricIndex}`}
              >
                {String(value)}
              </span>
            </div>
          ))}
        </div>
        <Button 
          className="w-full mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90"
          data-testid={`button-view-case-study-${index}`}
        >
          View Full Case Study
        </Button>
      </CardContent>
    </Card>
  );
}
