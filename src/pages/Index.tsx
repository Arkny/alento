import { useState, useMemo } from "react";
import { ChevronLeft } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { PostCard } from "@/components/PostCard";
import { PostModal } from "@/components/PostModal";
import { mockPosts, categories } from "@/data/posts";
import { Post } from "@/components/PostCard";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPosts = useMemo(() => {
    return mockPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = activeCategory === "all" || post.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end">
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <div className="flex justify-start mb-4">
          <button className="p-3 bg-surface-overlay/80 rounded-full backdrop-blur-sm">
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Header Container */}
        <div className="flex justify-center mb-8">
          <div className="bg-surface-overlay/80 backdrop-blur-sm rounded-3xl px-16 py-10 w-full max-w-xl">
            {/* Header */}
            <div className="flex items-center justify-center mb-10">
              <h1 className="text-4xl font-semibold text-white text-center">Informativo</h1>
            </div>

            {/* Search Bar */}
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onClick={() => handlePostClick(post)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/80 text-lg">
              Nenhum post encontrado para os filtros selecionados.
            </p>
          </div>
        )}

        {/* Post Modal */}
        <PostModal
          post={selectedPost}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default Index;
