import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  source?: string;
  tags: string[];
}

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export const PostCard = ({ post, onClick }: PostCardProps) => {
  return (
    <Card 
      className="bg-black/35 hover:bg-black/45 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 rounded-3xl border-0 overflow-hidden"
      onClick={onClick}
    >
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-4">
          <Badge 
            variant="secondary" 
            className="bg-white/20 text-white hover:bg-white/30 rounded-full px-3 py-1"
          >
            {post.category}
          </Badge>
          {post.source && (
            <ExternalLink className="h-4 w-4 text-white/70" />
          )}
        </div>
        
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-white/70">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 rounded-full text-xs bg-filter-active/70 text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};