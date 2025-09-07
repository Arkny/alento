import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, User } from "lucide-react";
import { Post } from "./PostCard";

interface PostModalProps {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PostModal = ({ post, isOpen, onClose }: PostModalProps) => {
  if (!post) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-surface-elevated">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <Badge 
              variant="secondary" 
              className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-3 py-1"
            >
              {post.category}
            </Badge>
            {post.source && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ExternalLink className="h-4 w-4" />
                <span>{post.source}</span>
              </div>
            )}
          </div>
          
          <DialogTitle className="text-2xl font-bold text-left leading-tight">
            {post.title}
          </DialogTitle>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </DialogHeader>
        
        <div className="mt-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="text-card-foreground leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
          
          {post.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};