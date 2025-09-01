import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  experience?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index?: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative">
        <img
          src={member.image}
          alt={`${member.name} photo`}
          className="w-full h-56 object-cover"
        />
        {member.experience && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-blue-600 text-white">
              {member.experience}
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {member.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {member.role}
        </p>
        <div className="flex justify-center space-x-4">
          {member.linkedin && (
            <a
              href={member.linkedin}
              className="text-gray-400 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
