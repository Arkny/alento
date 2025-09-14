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
      className="bg-white border-4 border-black/30 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 rounded-3xl overflow-hidden"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Badge 
            variant="secondary" 
            className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-3 py-1"
          >
            {post.category}
          </Badge>
          {post.source && (
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-card-foreground mb-3 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs"
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